
// Copy IBAN
const navButtons = document.querySelectorAll(".nav li a");
navButtons.forEach(button => {
  button.addEventListener("click", () => {
    navButtons.forEach(button => button.classList.remove("active"));
    button.classList.add("active");
  });
});

const ibanWrapper = document.querySelector(".iban-wrapper");
ibanWrapper.addEventListener("click", () => {
  copyIban();
});
ibanWrapper.addEventListener("onmouseout", () => {
  outFunc();
});

function copyIban() {
  // get the container
  const element = document.querySelector("#iban");

  // Create a fake `textarea` and set the contents to the text
  // you want to copy
  const storage = document.createElement("textarea");
  storage.value = element.innerHTML;
  element.appendChild(storage);

  // Copy the text in the fake `textarea` and remove the `textarea`
  storage.select();
  storage.setSelectionRange(0, 99999);
  document.execCommand("copy");
  element.removeChild(storage);

  var tooltip = document.getElementById("myTooltip");
  // tooltip.innerHTML = "Copiado!: " + storage.value;
  tooltip.innerHTML = "¡Copiado!";
}

function outFunc() {
  var tooltip = document.getElementById("myTooltip");
  tooltip.innerHTML = "Copiar";
}



$('#mailData').submit(function(e) {
  e.preventDefault();

  var data = {
    invitado : $("input[name='invitado']").val(),
    acompanante : $("input[name='acompanante']").val(),
    viernes : $("input[name='viernes']").is(":checked"),
    sabado : $("input[name='sabado']").is(":checked"),
  };

  if (data.invitado == "" || data.viernes == false && data.sabado == false) {
    document.querySelector("#error1").classList.add("show");
    setTimeout(() => {
      document.querySelector("#error1").classList.remove("show");
    }, 4000)
    return false;
  } 

  $.ajax({
    url: "email.php",
    type: "POST",
    data: data,
    success: function(data) {
      document.querySelector(".thanks").classList.add("show");
    },
    error: function() {
      document.querySelector("#error2").classList.add("show");
      setTimeout(() => {
        document.querySelector("#error2").classList.remove("show");
      }, 4000)
    }
  })
})


// Highlight NAVIGATION
var boxes = document.querySelectorAll(".box");

window.onscroll = function () {

  boxes.forEach(box => {
    var bounding = box.getBoundingClientRect();
    var myBoxtHeight = box.offsetHeight;
    var myBoxtWidth = box.offsetWidth;

    const id = box.parentElement.getAttribute("id");
    const ref = document.querySelector(`a[href="#${id}"]`);

    if (
      bounding.top >= -myBoxtHeight &&
      bounding.left >= -myBoxtWidth &&
      bounding.right <=
        (window.innerWidth || document.documentElement.clientWidth) +
          myBoxtWidth &&
      bounding.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) +
          myBoxtHeight
    ) {
      ref.classList.add("active");
    } else {
      ref.classList.remove("active");
    }
  });
};

// Remove webhost watermark
const webhost = document.querySelector("a[title*='webhost']");
if (webhost) webhost.parentElement.remove();
