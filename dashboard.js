var visitor = prompt("Enter you Login information");
var message = "Welcome back, " + visitor;
document.write(message+"<br>");
// var message = document.createElement("h1");
// document.write(message);

// function name() {
//   html += '<h1>' + message + '</h1>';
// }
// console.log(name());
// document.write(message);



var names = new Array();
var grades = new Array ();
var students = prompt ("How man kids in the class?");

for (i = 0; i < students; i++)
{
  names[i] = prompt("Enter students name: ");
  grades[i] = prompt("What was their test grade?");
}
for (i = 0; i < students; i++)
{
  document.write(names[i]+" got a "+grades[i]+"!<br>");
}
