// This calls dependency functions when the home page is first loaded
document.addEventListener("DOMContentLoaded", () => {
  storeFavoriteIDs();
  showCards(workoutData);
  showEquipmentOption();
  showBodyOptions();
  showLevelOptions();
  document.querySelector("#select-level").addEventListener("change", applyFilters);
  document.querySelector("#select-body-part").addEventListener("change", applyFilters);
  document.querySelector("#select-equipment").addEventListener("change", applyFilters);
});

