const loadMeals=(search)=>{
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res=> res.json())
    .then(data=>displayMeals(data.meals))
}
const displayMeals=meals=>{
    const mealsContainer=document.getElementById('meals-container')
    mealsContainer.innerText='';
    meals.forEach(meal => {
        console.log(meal)
     const mealsDiv=document.createElement('div')
     mealsDiv.classList.add('col')   
     mealsDiv.innerHTML=`
     <div class="card h-100">
       <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
       <div class="card-body">
         <h5 class="card-title">${meal.strMeal}</h5>
         <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
          <button onclick="mealsDataDetail(${meal.idMeal})">Details</button>
         </div>
     </div>
     `
     mealsContainer.appendChild(mealsDiv)
    });
}

const searchFood=()=>{
    const searchField=document.getElementById('search-field')
    const searchText=searchField.value
    loadMeals(searchText)
    searchField.value='';
}
const mealsDataDetail=idMeal=>{
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
    .then(res=> res.json())
    .then(data=> displayDataDetail(data.meals[0]))
}
const displayDataDetail=meal=>{
  const detailContainer=document.getElementById('detail-container')
  detailContainer.classList.add('card')
  detailContainer.innerHTML=`
  <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
     <h5 class="card-title">${meal.strMeal}</h5>
     <p class="card-text">${meal.strInstructions.slice(0,50)}</p>
     
    </div>
  `
}


loadMeals('')