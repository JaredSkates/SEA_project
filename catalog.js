// This is an array of objects (workout) & integers (IDs representing a workout object)
const workoutData = data;
let favorite_Ids = [];

// This function adds the card elements to the DOm
function showCards(workouts) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");
  
  let desc, title, level, bp, equipment, id;
  for (let i = 0; i < workouts.length; i++) {
    if (workouts[i].Title == "") {
      title =  "Not Available";
    } else {
      title = workouts[i].Title;
    }
    
    if (workouts[i].Level == "") {
      level =  "Not Available";
    } else {
      level = workouts[i].Level;
    }

    if (workouts[i].Desc == "") {
      desc = "Not Available";
    } else {
      desc = workouts[i].Desc;
    }

    if(workouts[i].BodyPart == "") {
      bp =  "Not Available";
    } else {
      bp = workouts[i].BodyPart;
    }

    if(workouts[i].Equipment == "") {
      equipment =  "Not Available";
    } else {
      equipment = workouts[i].Equipment;
    }

    id = workouts[i][""];
    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, title, level, desc, bp, equipment, id); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  }
}

// Edit the card content before appending to the container
function editCardContent(card, newTitle, level, desc, bp, equipment, id) {
    card.style.display = "block";
    card.setAttribute("data-id", id);

    if(favorite_Ids.includes(parseInt(id))) {
        card.querySelector("#fav-btn").style.backgroundColor = "red";
        card.querySelector("#fav-btn").textContent = "Unfavorite";
    }

    const cardHeader = card.querySelector("h2");
    const cardLevel = card.querySelector("#level"); 
    const cardBP = card.querySelector("#bodypart");
    const cardDesc = card.querySelector("#description");
    const cardEquipment = card.querySelector("#equipment")

    cardHeader.textContent = newTitle;
    cardLevel.textContent = "Level: " + level;
    cardBP.textContent = "Body Part: " + bp;
    cardDesc.textContent = "Description: " + desc;
    cardEquipment.textContent = "Equipment: " + equipment;
}

// Add the equipment options to the drop down menu
function showEquipmentOption() {
  let equipment = workoutData.map(workout => workout.Equipment);
  equipment = new Set(equipment);
  console.log(equipment);

  const selectEquipment = document.querySelector("#select-equipment");
  const templateOption = document.querySelector(".option-card");
  
  equipment.forEach(element => {
    const newOption = templateOption.cloneNode(true);
    newOption.textContent = element;
    selectEquipment.appendChild(newOption);
    }
  )
}

// Add the body part options to the drop down menu
function showBodyOptions() {
  let bodyParts = workoutData.map(workout => workout.BodyPart);
  bodyParts = new Set(bodyParts);

  const selectBodyPart = document.querySelector("#select-body-part");
  const templateOption = document.querySelector(".option-card");
  
  bodyParts.forEach(element => {
    const newOption = templateOption.cloneNode(true);
    newOption.textContent = element;
    selectBodyPart.appendChild(newOption);
    }
  )
}

// Add the level options to the drop down menu
function showLevelOptions() {
  let levels = workoutData.map(workout => workout.Level);
  levels = new Set(levels);

  const selectLevel = document.querySelector("#select-level");
  const templateOption = document.querySelector(".option-card");
  
  levels.forEach(element => {
    const newOption = templateOption.cloneNode(true);
    newOption.textContent = element;
    selectLevel.appendChild(newOption);
    }
  )
}

// Filter catalog based on current search query and selected filters
function applyFilters() {
  const selectLevel = document.querySelector("#select-level");
  const selectBodyPart = document.querySelector("#select-body-part");
  const selectEquipment = document.querySelector("#select-equipment");
  const searchQuery = document.querySelector("#search-query");
  
  console.log(selectBodyPart.value == "All Body Parts")
  console.log(selectLevel.value == "allLevels")
  console.log(selectEquipment.value == "All Equipment")
  console.log(searchQuery.value == "");
  
  let filteredObject = workoutData.filter(workout => {
    return (
      (selectLevel.value == "All Levels" || workout.Level == selectLevel.value) &&
      (selectBodyPart.value == "All Body Parts" || workout.BodyPart == selectBodyPart.value) &&
      (selectEquipment.value == "All Equipment" || workout.Equipment == selectEquipment.value) &&
      (workout.Title.toLowerCase().includes(searchQuery.value.toLowerCase()) || searchQuery.value == "")
    )
  })
  
  console.log(filteredObject)

  showCards(filteredObject)
}


