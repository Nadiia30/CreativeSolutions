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
  arrows: false,
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
        breakpoint: 610,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 910,
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
