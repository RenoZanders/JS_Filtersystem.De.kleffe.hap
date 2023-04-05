const burger = document.querySelectorAll(".burger");
const fries = document.querySelectorAll(".fries");
const drinks = document.querySelectorAll(".drinks");
const wdrinks = document.querySelectorAll(".wdrinks");
const saus = document.querySelectorAll(".saus");
const land = document.querySelectorAll(".land");

const checkboxes = document.querySelectorAll(".check");

// make all checkboxes listen to the 'change' event
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', onCheckboxPressed);
});

function onCheckboxPressed() {
    // default false state of any checked
    let anyChecked = false;

    // if checkbox is checked change to true (no matter the order)
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) anyChecked = true;
    })

    // if none are checked and anyChecked stayed false, show all and stop function
    if (!anyChecked) {
        loopProducts(burger);
        loopProducts(fries);
        loopProducts(drinks);
        loopProducts(wdrinks);
        loopProducts(saus);
        loopProducts(land);
        return;
    }

    // if any are checked, we check all of them to change state
    checkboxes.forEach(checkbox => {
        switch(checkbox.id) {
            case "burger":
                loopProducts(burger, convertChecked(checkbox.checked));
                break;
            case "fries":
                loopProducts(fries, convertChecked(checkbox.checked));
                break;
            case "drinks":
                loopProducts(drinks, convertChecked(checkbox.checked));
                break;
            case "wdrinks":
                loopProducts(wdrinks, convertChecked(checkbox.checked));
                break;
            case "saus":
                loopProducts(saus, convertChecked(checkbox.checked));
                break;
            case "land":
                loopProducts(land, convertChecked(checkbox.checked));
                break;
            }
    });
}

// simple functions to shortify code and stop repeating stuff
function convertChecked(checked) {
    // checkbox.checked = true
    // checked = !checkbox.checked AKA false = !checkbox.checked
    // 
    return checked ? "block" : "none";
}

function loopProducts(source, style = "block") {
    for (let i = 0; i < source.length; i++) {
        source[i].style.display = style;
    }
}