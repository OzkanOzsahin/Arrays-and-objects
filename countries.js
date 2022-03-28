randomPersonData.sort(function (a) {
   return a.region;
})

for (let i in randomPersonData)
   document.writeln(randomPersonData[i].region)

document
   .querySelector(".region")
   .addEventListener("click", displayRegion);

