// Change URL name
// const url = "www.victor-cristina.com";
// window.history.replaceState({}, '', url);
// window.history.pushState({}, '', url);

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

// Send mail
// const checkin = document.querySelector(".boton-checkin");
// checkin.addEventListener("click", e => {
//   e.preventDefault();
//   e.stopPropagation();

//   const invitado = document.querySelector("#invitado").value;
//   const acompanante = document.querySelector("#acompanante").value;

//   const viernes = document.querySelector("#viernes").checked;
//   const sabado = document.querySelector("#sabado").checked;

//   const target = "Noacrisvic@gmail.com";
//   // const subject = 'Confirmación de asistencia';
//   const subject = `Invitado: ${invitado} ${
//     acompanante ? ` - Acompañante: ${acompanante}` : ""
//   } --- Días:${viernes ? "V" : ""} ${sabado ? " S" : ""} `;

//   let body = `Hola, soy ${invitado} y asistiré ${viernes ? "el viernes" : ""} ${
//     sabado ? "el sábado" : ""
//   } ${acompanante ? "acompañado de " + acompanante : ""}.`;

//   body += `\n`;
//   body += `Por favor, no cambies el asunto del correo.`;
//   body += `Si quieres añadir algo, hazlo debajo.`;
//   body += `\n`;
//   body += `Gracias! 😀`;

//   window.location.href = `mailto:${target}?subject=${subject}&body=${body}`;

//   document.querySelector(".thanks").classList.add("show");
// });

function submitForm() {
  //Do validation and submit form
  $.ajax({
    url: "mail.php",
    type: "POST",
    success: function(data) {
      console.log("🚀 ~ success")
      document.querySelector(".thanks").classList.add("show");
    },
    error: function() {
      console.log("🚀 ~ success")
      alert('Ha habido un error! Intentalo de nuevo por favor.');
    }
  })
  // .done(function (data) {
  //   alert(data);
  //   if (data == 1) {
  //     // alert("Success");
  //     // window.location.href = "test.php"; //Your location
  //       document.querySelector(".thanks").classList.add("show");
  //   } else {
  //     alert("Ha habido un error. Intentalo de nuevo...");
  //   }
  // });
  return false;
}

// Highlight NAVIGATION
var boxes = document.querySelectorAll(".box");

window.onscroll = function () {
  // function elementInViewport() {

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
