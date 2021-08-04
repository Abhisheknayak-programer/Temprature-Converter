// You'll create a simple app to convert temperatures from Celsius to Fahrenheit, and vice-versa. This project should be implemented as a web page.

// Requirements
// The user will input a temperature in either Fahrenheit or Celsius and press a "convert" button. The converted temperature will then be displayed with the correct unit.

// Your UI should include four main elements:

// Input field for the user to type in their temperature - don't forget to validate that the input is a number!
// Dropdown menu or radio button for the user to choose if they are inputting in Celsius or Fahrenheit
// "Convert" button to trigger the temperature conversion
// Display area for the final converted temperature and unit
// For an extra challenge: You can add in a third conversion option to convert from and to Kelvin as well.

const userInput = document.querySelector("#degree");
const optionSelected = document.querySelector("#type");
const btn = document.querySelector("#convert--btn");
const MessageBox = document.querySelector("#message");

btn.addEventListener("click", function (event) {
  event.preventDefault();
  const SelectedValue = optionSelected.value;
  const InputValue = +userInput.value;

  if (InputValue === "") {
    MessageBox.textContent = "Enter a valid number";
  }

  //Coversions
  if (SelectedValue === "Fahrenheit") {
    MessageBox.textContent = "";
    MessageBox.textContent = `${(InputValue * 9) / 5 + 32}°F`;
  }
  if (SelectedValue === "Celsius") {
    MessageBox.textContent = "";
    MessageBox.textContent = `${InputValue}°C`;
  }
  if (SelectedValue === "Kelvin") {
    MessageBox.textContent = "";
    MessageBox.textContent = `${InputValue + 273.15}°K`;
  }
});
