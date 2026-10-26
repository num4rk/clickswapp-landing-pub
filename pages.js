(function () {
  var root = document.documentElement;
  var button = document.querySelector(".theme-toggle");
  if (!button) return;
  var light = window.matchMedia("(prefers-color-scheme: light)");
  var current = function () {
    return root.dataset.theme || (light.matches ? "light" : "dark");
  };
  var label = function () {
    button.setAttribute("aria-label", current() === "dark" ? "Switch to light theme" : "Switch to dark theme");
  };
  button.addEventListener("click", function () {
    var next = current() === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
    label();
  });
  light.addEventListener("change", label);
  label();
})();
