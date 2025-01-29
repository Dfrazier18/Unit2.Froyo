let flavors = prompt("Please enter a list of comma-separated froyo flavors");
function getFlavors(froyoFlavors) {
  const flavorsArray = flavors.split(",");
  const flavorCount = {};
  for (let i = 0; i < flavorsArray.length; i++) {
    const flavor = flavorsArray[i];
    if (flavorCount[flavor] === undefined) {
      flavorCount[flavor] = 1;
    } else {
      flavorCount[flavor] += 1;
    }
  }
  return flavorCount;
}
console.log(getFlavors(flavors));
