fetch("https://restcountries.com/v3.1/all?fields=name,flags")
.then(Response =>Response.json())
.then(data =>{
 const maincontainer=document.getElementById("Flags")
//  console.log(maincontainer)
 data.forEach(country  => {
    const flagsrc = country.flags.png;
    const countryTitle = country.name.common;
    // console.log(flagsrc)
    // console.log(countryTitle)
     const flagDiv=document.createElement('div')
     flagDiv.classList.add("Flags")
     flagDiv.innerHTML=
     `
     <img src="${flagsrc}" alt"${countryTitle}">
     <h2> ${countryTitle}</h2>
     `
       // <p> ${product.description}</p>
     maincontainer.appendChild(flagDiv)
 });
})
