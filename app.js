//navbar hamburger
const hamburgerMenu = document.querySelector(".hamburger-menu");
const slideMenu = document.querySelector(".slide-menu");
const exitIcon = document.querySelector(".exit-icon");

if (hamburgerMenu) {
  hamburgerMenu.addEventListener("click", function() {
    slideMenu.classList.toggle("active");
  });
}

if (exitIcon) {
  exitIcon.addEventListener("click", function() {
    slideMenu.classList.remove("active");
  });
}

//Contact Information Mobile
const contactUsLink = document.querySelector('li:nth-of-type(4) a');
const form = document.querySelector('form');
const h2Elements = document.getElementsByTagName('h2');

if (contactUsLink && form) {
  contactUsLink.addEventListener('click', function(event) {
    event.preventDefault();
    form.classList.toggle('slide-out');
    for (let i = 0; i < h2Elements.length; i++) {
      if (h2Elements[i].textContent === 'Contact Us') {
        h2Elements[i].classList.toggle('hidden');
      }
    }
  });
}

//Nav Selection animations
let items = document.querySelectorAll(".nav-items, .slide-nav-items");

for (let i = 0; i < items.length; i++) {
  let itemLinks = items[i].querySelectorAll("a, button");
  for (let j = 0; j < itemLinks.length; j++) {
    itemLinks[j].addEventListener("click", function() {
      for (let k = 0; k < itemLinks.length; k++) {
        itemLinks[k].classList.remove("selected");
      }
      this.classList.add("selected");
    });
  }
}

//Chevron scroll transition
const section2 = document.querySelector('.section-2');
const chevronButton = document.querySelector('.chevron-button');

if (chevronButton && section2) {
  chevronButton.addEventListener('click', function() {
    section2.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
}

//Section Selection Animation
const servicesItem = document.getElementById("services-item");

if (servicesItem) {
  servicesItem.addEventListener("click", function(event) {
    if (event.target.closest(".nav-items")) {
      smoothScroll(section2);
    } else {
      slideMenu.style.display = "none";
      smoothScroll(section2);
    }
  });
}

function smoothScroll(target) {
  let targetPosition = target.offsetTop;
  let startPosition = window.pageYOffset;
  let distance = targetPosition - startPosition;
  let duration = 1000;
  let start = null;

  window.requestAnimationFrame(step);

  function step(timestamp) {
    if (!start) start = timestamp;
    let progress = timestamp - start;
    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
    if (progress < duration) window.requestAnimationFrame(step);
  }
}

function easeInOutCubic(t, b, c, d) {
  t /= d / 2;
  if (t < 1) return c / 2 * t * t * t + b;
  t -= 2;
  return c / 2 * (t * t * t + 2) + b;
}

// Contact Us Form
document.getElementById('contact-button').addEventListener('click', function() {
  document.getElementById('contact-form').style.display = 'block';
  document.getElementById('contact-exit-icon').addEventListener('click', function() {
      document.getElementById('contact-form').style.display = 'none';
  });
});

// Service Form
function calculatePrice() {
const vehicleType = document.querySelector("#vehicle-type").value;
const detailType = document.querySelector("#detail-type").value;
const output = document.querySelector("#output");

if (vehicleType === "sedan" && detailType === "full") {
output.innerHTML = "$150-$175";
} else if (vehicleType === "truck" && detailType === "full") {
output.innerHTML = "$200-$250";
} else if (vehicleType === "sedan" && detailType === "interior") {
output.innerHTML = "$115";
} else if (vehicleType === "truck" && detailType === "interior") {
output.innerHTML = "$135";
} else if (vehicleType === "sedan" && detailType === "exterior") {
output.innerHTML = "$69";
} else if (vehicleType === "truck" && detailType === "exterior") {
output.innerHTML = "$89";
} else {
output.innerHTML = "Please select both a vehicle type and detail type";
}
}

// Img Based on Form
window.addEventListener("load", function() {
const vehicleType = document.querySelector("#vehicle-type");
const detailType = document.querySelector("#detail-type");
const generateBtn = document.querySelector("#generateBtn");
const img = document.querySelector(".img");

function updateImage() {
const selectedVehicleType = vehicleType.value;
const selectedDetailType = detailType.value;
  
      img.querySelectorAll("img").forEach(function(image) {
        image.style.display = "none";
      });
  
      if (selectedVehicleType === "sedan" && selectedDetailType === "interior") {
        img.querySelector("img[alt='Car Interior']").style.display = "block";
      } else if (selectedVehicleType === "truck" && selectedDetailType === "interior") {
        img.querySelector("img[alt='Truck Interior']").style.display = "block";
      } else if (selectedVehicleType === "sedan" && (selectedDetailType === "full" || selectedDetailType === "exterior")) {
        img.querySelector("img[alt='Car']").style.display = "block";
      } else if (selectedVehicleType === "truck" && (selectedDetailType === "full" || selectedDetailType === "exterior")) {
        img.querySelector("img[alt='Truck']").style.display = "block";
      } else {
        img.querySelector("img[alt='Detailing']").style.display = "block";
      }
    }
  
    generateBtn.addEventListener("click", function() {
      updateImage();
    });
  
    updateImage();
});
  

