function addvalue(a) {
  var input = document.getElementById("input")
  input.value += a;
}
function result() {
  var input = document.getElementById("input")
  input.value = eval(input.value)
}
 
function clean() {
  var input = document.getElementById("input").value = ""}        