let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1 / 20;

//loads in information from the contact page(email, name, message) and sends email using EmailJS. Capacity of 200 emails a day
function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs
    .sendForm(
      "service_dpwd976",
      "template_92qtkrm",
      event.target,
      "fL7yWT98p1XA2-rWg"
    )
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch(() => {
      loading.classList.remove("modal__overlay--visible");
      alert(
        "the email service is temporarily unavailable. Please contact me directly on email adrian.garcia0239@gmail.com"
      );
    });
}

//This function loads in the contact page which is used in the "about me", Mail Logo, and 'Contact' in the nav Bar
function toggleModal() {
  if (isModalOpen) {
    isModalOpen = false;
    return document.body.classList.remove("modal--open");
  }
  isModalOpen = !isModalOpen;
  document.body.classList += " modal--open";
}

//toggles the page's brightness from light --> dark by removing and adding element.
function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

// shape targets all items w/ "shape" class|| querySelectorAll turns all the shapes into array that is //targeted by the for loop
//isOdd takes the input from i and checks to see if its odd.
//offInteger checks if its odd and if its not odd --> we make it positive (--> 1)
//this creates the movement in the webpage

function moveBackground(event) {
  const shapes = document.querySelectorAll(".shape");
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i = 0; i < shapes.length; ++i) {
    const isOdd = i % 2 !== 0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform = `translate(${x * boolInt}px, ${
      y * boolInt
    }px )`;
  }
}
