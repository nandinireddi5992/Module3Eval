export function getRestaurants() {
  return JSON.parse(localStorage.getItem("evalData")) || [];
}

export function saveRestaurants(data) {
  localStorage.setItem("evalData", JSON.stringify(data));
}
