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
