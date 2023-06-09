const roomType = document.getElementById("type");
const roomPrice = document.getElementById("price");
const roomFeatures = document.getElementById("features");
const roomFacilities = document.getElementById("facilities");
const roomFile = document.getElementById("file");
const roomButton = document.getElementById("btn");
roomButton.addEventListener("click", function () {
  const selectedFacilities = [];
  for (let i = 0; i < roomFacilities.options.length; i++) {
    if (roomFacilities.options[i].selected) {
      selectedFacilities.push(roomFacilities[i].value);
      console.log(selectedFacilities);
    }
  }
  const selectedFeatures = [];
  for (let i = 0; i < roomFacilities.options.length; i++) {
    if (roomFeatures.options[i].selected) {
      console.log(selectedFeatures);
    }
  }

  console.log(`images/${roomFile.files[0].name}`);

  const newHouse = {
    roomType: roomType.value,
    roomPrice: roomPrice.value,
    roomFeatures: selectedFeatures,
    roomFacilities: selectedFacilities,
    roomFile: `images/${roomFile.files[0].name}`,
  };
  selectedFeatures.push(roomFacilities[i].value);

  const houses = [];
  if (localStorage.getItem("houses") === null) {
    houses.push(newHouse);
    localStorage.setItem("houses", JSON.stringify(houses));
  } else {
    const localStorageHouse = JSON.parse(localStorage.getItem("houses"));
    localStorageHouse.push(newHouse);
    localStorage.setItem("houses", JSON.stringify(localStorageHouse));
  }

  // console.log(newHouse);
});


document.addEventListener("DOMContentLoaded", ()=>{
  const rooms = JSON.parse(localStorage.getItem("houses"));
  rooms.map(room=>{
    const roomRight = document.createElement("div");
    roomRight.classList.add("room__right");
    roomRight.innerHTML = `
    <h4>${room.roomType}</h4>
                <p>ksh 4500 per night</p>
                <h5>${room.roomPrice}</h5>
                <ul>
                ${room.features.map(item=>`<li>${item}</li>`)}

                </ul>
                <h5>Facilities</h5>
                <ul>
                  ${room.facilities.map(item=>`<li>${item}</li>`)}
                </ul>
                <button class="btn">Book Now</button>
                

                  `
          roomRight.appendChild(roomContainer)
        

  })
})




