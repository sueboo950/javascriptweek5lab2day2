function countriesCreator(){
    let name, country;
    name = prompt("What is your name?");
    country = prompt("What country would you love to visit?");
    countriesHeader.innerHTML = `Countries Visited`;
    countriesParagraph.innerHTML = `Hi ${name}! I would love to visit Egypt one day. I sincerely hope that you get to visit ${country} one day as well.`

}
countriesButton.onclick = countriesCreator