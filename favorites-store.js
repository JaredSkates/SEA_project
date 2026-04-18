// Adds the ID of a workout object to local storage and reassigns the favorite_Ids member
function favoriteAnExercise(event) {
    let curr_id = parseInt(event.target.closest("[data-id]").dataset.id);

    
    if (favorite_Ids.includes(curr_id)) {
        localStorage.removeItem(`favoriteExercise${(curr_id + 1)}`);
        favorite_Ids = favorite_Ids.filter(id => id != curr_id);
        location.reload();
    } else {
        favorite_Ids.push(curr_id);
        localStorage.setItem((`favoriteExercise${(curr_id + 1)}`), curr_id);
        event.target.style.backgroundColor = "red";
        event.target.textContent = "Unfavorite";
    }

    console.log(favorite_Ids);
}

// Return an array of objects filtered by ids
function getFavorites() {
    return workoutData.filter(workout => favorite_Ids.includes(workout[""]));
}

// Stores the ids from local storage to favorite_Ids
function storeFavoriteIDs() {
  const allItems = Object.entries(localStorage);

  for(let i = 0; i < allItems.length; i++) {
      favorite_Ids.push(parseInt(allItems[i][1]));
  }

  console.log(favorite_Ids);
}
