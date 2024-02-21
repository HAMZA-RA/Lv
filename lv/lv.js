function changeText(answer) {
    var message = document.getElementById("message");
    if (answer === "Yes") {
      message.innerHTML = "I love you!";
    }
  }
  
  function runAway() {
    var buttons = document.getElementById("buttons");
    buttons.style.display = "none";
    var message = document.getElementById("message");
    message.innerHTML = "Sorry to hear that. Goodbye!";
  }