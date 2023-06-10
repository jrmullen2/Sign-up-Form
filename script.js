const input1 = document.getElementById("password1");
const input2 = document.getElementById("password2");
let password1 = "";
let password2 = "";

input1.addEventListener("keyup", () => {
  password1 = input1.value;
  passwordMatch(password1, password2);
});
input2.addEventListener("keyup", () => {
  password2 = input2.value;
  passwordMatch(password1, password2);
});

function passwordMatch(p1, p2) {
  if (p1 != p2) {
    input1.style.outline = "1px solid firebrick";
    input2.style.outline = "1px solid firebrick";
    document.getElementsByClassName("message").style.color = "red";
    document.getElementsByClassName("message").innerHTML = "Does not match";
  } else {
    input1.style.outline = "none";
    input2.style.outline = "none";
    document.getElementsByClassName("message").style.color = "green";
    document.getElementsByClassName("message").innerHTML = "Matching";
  }
  return;
}
