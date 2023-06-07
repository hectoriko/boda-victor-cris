const navButtons = document.querySelectorAll('.nav li a');
navButtons.forEach(button => {button.addEventListener('click', () => {
    navButtons.forEach(button => button.classList.remove('active'));
    button.classList.add('active');
})});

const ibanWrapper = document.querySelector('.iban-wrapper');
ibanWrapper.addEventListener('click', () => {
  copyIban();
});

function copyIban() {
   // get the container
   const element = document.querySelector('#iban');

    // Create a fake `textarea` and set the contents to the text
    // you want to copy
    const storage = document.createElement('textarea');
    storage.value = element.innerHTML;
    element.appendChild(storage);

    // Copy the text in the fake `textarea` and remove the `textarea`
    storage.select();
    storage.setSelectionRange(0, 99999);
    document.execCommand('copy');
    element.removeChild(storage);

    var tooltip = document.getElementById("myTooltip");
    // tooltip.innerHTML = "Copiado!: " + storage.value;
    tooltip.innerHTML = "¡Copiado!";
}


  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copiar";
  }

  // TODO: Scroll nav