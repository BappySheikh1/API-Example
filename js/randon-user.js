const loadUsers=()=>{
   fetch('https://randomuser.me/api/?results=10')
   .then(res => res.json())
   .then(data => displayUser(data.results))
}
const displayUser=users=>{
 const blockQuote=document.getElementById('users-container')
for(const user of users){
    console.log(user)
 const usersDiv=document.createElement('div');
 usersDiv.classList.add('user')
 usersDiv.innerHTML=`
 <h3>Users Name: ${user.name.first}</h3>
 <h3>Users Email: ${user.email}</h3>
 <h3>Users location: ${user.location.city} </h3>
 <h3>Users gender: ${user.gender}</h3>
 `    
 blockQuote.appendChild(usersDiv)
}
}
loadUsers()

