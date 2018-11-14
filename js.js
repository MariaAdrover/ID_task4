var button;
var input;
var inputValue;
var element;

$(document).ready(function() {
    
    // When the page has been loaded we set the value of the variables button, input and element
    button = $("#button_change");
    input = $("#input_color");
    element = $(".cow_color");

    // We add the listener to the button for when it's clicked 
    $(button).click(function() {
        getTextValue();
        $(element).html(inputValue);
    });       
});

// This function reads the value of the input of the html
function getTextValue() {    
    inputValue = $(input).val();
}