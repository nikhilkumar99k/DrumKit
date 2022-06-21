for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

 document.addEventListener("keypress",function(event){
   playSound(event.key);
   buttonAnimation(event.key);
 });

  function playSound(key){
    switch (key) {
      case "w":
        var audio = new Audio("sounds/tom-1.mp3");
        audio.play();
        break;
      case "a":
        var audio = new Audio("sounds/tom-2.mp3");
        audio.play();
        break;
      case "s":
        var audio = new Audio("sounds/tom-3.mp3");
        audio.play();
        break;
      case "d":
        var audio = new Audio("sounds/tom-4.mp3");
        audio.play();
        break;
      case "j":
        var audio = new Audio("sounds/tom-5.mp3");
        audio.play();
        break;
      case "k":
        var audio = new Audio("sounds/tom-6.mp3");
        audio.play();
        break;
      case "l":
        var audio = new Audio("sounds/tom-7.mp3");
        audio.play();
        break;
      default: console.log(key);
    }
  }

  function buttonAnimation(key){
    var activeButton=document.querySelector("."+key);
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
