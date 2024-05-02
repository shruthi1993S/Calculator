let _input = document.getElementById("inputfield");

function display(number) {
  _input.value += number;
}

function calculate() {
  try {
    _input.value = eval(_input.value);
  } catch (err) {
    alert("Invalid,only numbers are allowed");
  }
}
function Clear() {
  _input.value = "";
}
function del() {
  _input.value = _input.value.slice(0, -1);
}
