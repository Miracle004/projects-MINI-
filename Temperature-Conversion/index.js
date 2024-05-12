const toFarenheit = document.getElementById("celToFar");
const toCelcius = document.getElementById("farToCel");
const output = document.getElementById("output");
const convertBtn = document.getElementById("convert");
function convertToFarenheit(temp) {
  let result = (temp * 9) / 5 + 32;
  return result;
}

function convertToCelcius(temp) {
  let result = (temp - 32) * (5 / 9);
  return result;
}

convertBtn.addEventListener("click", function convert() {
  const input = document.getElementById("myInput").value;
  let textBox;

  if (isNaN(input)) {
    output.textContent = "Please enter a valid number";
  }
  textBox = Number(input);

  if (toFarenheit.checked) {
    output.textContent = convertToFarenheit(textBox) + "℉";
  } else if (toCelcius.checked) {
    output.textContent = convertToCelcius(textBox) + "℃";
  } else {
    output.textContent = "Please enter a value";
  }
});
