async function searchFilter(){
  const data = await fetch("https://api.openbrewerydb.org/breweries?by_name=cooper ")
  const result = await data.json();
  console.log(result)


  const searchbar = document.createElement("input","searchbar")
  const label = document.createElement("label")
  label.setAttribute("id","searchId")
  searchbar.setAttribute("class","searchme")
  searchbar.setAttribute("id","searchId")
  searchbar.setAttribute("placeholder","Search 🍺")
  searchbar.innerText = "Search"

  searchbar.onkeyup = (i)=>{
    var val = i.target.value.toLowerCase()
    console.log(val)
    for(var l=0;l<result.length;i++){
      if(val[i] == result[i]){
        result.forEach((i) => createUsers(i));
  
      }
    }
  
  }


  document.body.append(searchbar)
    


}
searchFilter()

// function searchedList(val,result){
//   var fildata = []
//   for(var i=0;i<result.legth;i++){
//     val = val.toLowerCase()
//     var namee = val[i].name.toLowerCase()

//     if(namee.includes(val)){
//       fildata.push(result[i])
//     }

//   }

//   return fildata
// }

async function beers() {
  
  
    const data = await fetch("https://api.openbrewerydb.org/breweries")
    const result = await data.json();
    // console.log(result)
    result.forEach((i) => createUsers(i));

    
    
}
  beers()

function createUsers(i){
    
    const onebeer = document.querySelector(".beer")
    onebeer.innerHTML += `<div class="container">
    <p><b>Brewerie Name :</b>${i.name}</p>
    <p><b>Brewerie Type :</b>${i.brewery_type}</p>
    <p><b>Brewerie Address :</b>${i.country}, ${i.country}, ${i.state}, ${i.city}, ${i.street}</p>
    <p><b>Website URL :</b>${i.website_url}</p>
    <p><b>Phone Number :</b>${i.phone}</p>
    </div>`
    
}







//   How do I process the API data?

// Display the breweries name and type.
// Display the brewery’s address.
// Also display the website url.
// Display the phone no of the brewery.