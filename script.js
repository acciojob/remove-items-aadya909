
window.onload = function() {
  const button = document.querySelector('input[type="button"]');
  const colorSelect = document.getElementById("colorSelect");

  button.addEventListener("click", function() {
    // Remove the selected option
    colorSelect.remove(colorSelect.selectedIndex);
  });
};
