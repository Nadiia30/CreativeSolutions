const menuButton = $(".menu-button");
const overlayNavigation = $(".overlay-navigation");

$(document).on("click", ".menu-button", handleToggle);
function handleToggle(e) {
  e.preventDefault();
  overlayNavigation.toggleClass("visible");
}

function initMobile() {
  console.log("is-mobile");
}

function initTablet() {
  console.log("is-tablet");
}

function initDesktop() {
  overlayNavigation.removeClass("visible");
  console.log("is-desktop");
}

ssm.addStates([
  {
    id: "mobile",
    query: "(max-width: 640px)",
    onEnter: function () {
      initMobile();
    },
  },
  {
    id: "tablet",
    query: "(min-width: 641px) and (max-width: 992px)",
    onEnter: function () {
      initTablet();
    },
  },
  {
    id: "desktop",
    query: "(min-width: 993px)",
    onEnter: function () {
      initDesktop();
    },
  },
]);

$(".works-slider").slick({
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: "<div class='workarrow workarrow_prev'>Prev</div>",
  nextArrow: "<div class='workarrow workarrow_next'>Next</div>",
  dots: true,
  appendDots: ".container_dots",
  dotsClass: "dots-box",
});

$(function () {
  const config = {
    autoplay: true,
    speed: 1000,
    slidesToShow: 1,
    arrows: true,
    prevArrow: "<div class='myarrow myarrow_prev'>Prev</div>",
    nextArrow: "<div class='myarrow myarrow_next'>Next</div>",
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const sl = $(".team-slider").slick(config);
});

let map;
const cnt = { lat: 46.478766, lng: 30.723594 };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: cnt,
    zoom: 16,
  });

  const marker = new google.maps.Marker({
    position: cnt,
    map,
    title: "Malang, East Java, Indonesia",
    icon: "i/Pin.png",
  });

  const infowindow = new google.maps.InfoWindow({
    content: "Creative Digital Progect",
  });
  marker.addListener("click", function () {
    infowindow.open(map, marker);
  });
}

const navLinks = document.querySelectorAll(".nav__link");

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  header: "[data-scroll-header]",
});

document.addEventListener("scrollStop", handleScroll);

function handleScroll(e) {
  const targetEl = e.detail.anchor;
  const link = e.detail.toggle;
  navLinks.forEach((item) => item.classList.remove("active"));

  link.classList.add("active");
  const el = targetEl.firstElementChild;
  el.classList.add("pulse");
  setTimeout(() => {
    el.classList.remove("pulse");
  }, 4000);
}

let interval;
function step() {
  window.scrollBy(0, -15);
  const st = window.pageYOffset;
  if (st > 0) {
    interval = requestAnimationFrame(step);
    return;
  }
  cancelAnimationFrame(interval);
}

document.addEventListener("click", function (e) {
  const target = e.target.closest("#scroll-top");

  if (target) {
    interval = requestAnimationFrame(step);
  } else {
    cancelAnimationFrame(interval);
  }
});
