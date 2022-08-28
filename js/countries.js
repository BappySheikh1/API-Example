const countriesData=()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data=> displayCountry(data))
}
const displayCountry= countries =>{
    const countriesContainer=document.getElementById('countries-container')
 countries.forEach(country => {
    console.log(country)
    const countryDiv=document.createElement('div')
    countryDiv.classList.add('country')
    countryDiv.innerHTML=`
    <h3>Name: ${country.name.common}</h3>
    <p>Capital: ${country.capital ? country.capital[0]:"No capital"}</p>
     <button onclick="countryDataDetial('${country.cca2}')">Detail</button>
    `
    countriesContainer.appendChild(countryDiv)
    
 });
}
const countryDataDetial=code=>{
 fetch(`https://restcountries.com/v3.1/alpha/${code}`)
 .then(res=> res.json())
 .then(data=> displayCountryData(data[0]))
}
const displayCountryData=country=>{
const countryDataDetial=document.getElementById('country-detail')
countryDataDetial.innerHTML=`
<h2>Country Name ${country.name.common}</h2>
<img src="${country.flags.png}">
`
}


countriesData()