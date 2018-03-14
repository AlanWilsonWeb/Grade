function calculateGrade() {
  let inputOne = 100;
  let outputOne = "A";
  inputOne = document.getElementById("numberOne").value;
  if(inputOne >= 90) {
    outputOne = "A";
  }  else if(inputOne >= 80) {
    outputOne = "B";
  }  else if(inputOne >= 70) {
    outputOne = "C";
  }  else if(inputOne >= 60) {
    outputOne = "D";
  }  else {
    outputOne = "F";
  }
  return document.getElementById("finalGrade").innerHTML = outputOne;
};
