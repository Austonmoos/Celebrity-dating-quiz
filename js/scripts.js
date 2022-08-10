window.onload = function() {


  document.querySelector("form").onsubmit = function(event) {
    event.preventDefault();
    const age = parseInt(document.querySelector("input#age").value);
    const height = parseInt(document.querySelector("input#height").value);
    const color = (document.querySelector("input#color").value);
    const gender = (document.querySelector("input#gender").value);

    if (age || height && color && gender) {
      if (age >= 12 || height >= 80 && color === red && gender === male) {
        document.getElementById("minnie-mouse").removeAttribute("class");
        document.getElementById("sanguinius").removeAttribute("class");
        document.getElementById("the-emperor").removeAttribute("class");
      } else if (age <= 12 || height <= 48 && color === pink && gender === male) {
        document.getElementById("wanda-maximoff").removeAttribute("class");
        document.getElementById("sanguinius").removeAttribute("class");
        document.getElementById("the-emperor").removeAttribute("class");
      } else if (age >= 16 || height >= 60 && color === blue && gender === female) {
        document.getElementById("wanda-maximoff").removeAttribute("class");
        document.getElementById("minnie-mouse").removeAttribute("class");
        document.getElementById("the-emperor").removeAttribute("class");
      } else if (age >= 16 || height >= 70 && color === gold && gender === female) {
        document.getElementById("wanda-maximoff").removeAttribute("class");
        document.getElementById("minnie-mouse").removeAttribute("class");
        document.getElementById("the-emperor").removeAttribute("class");
      }
    }
  };
} 