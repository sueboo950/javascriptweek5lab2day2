function placeslivedCreator(){
    let place, name;
    name = prompt("What is your name?");
    place = prompt("Where have you lived?");
    placeslivedHeader.innerHTML = `Places Lived`;
    placeslivedParagraph.innerHTML = `Hi ${name}! I am so glad to see that you have lived ${place}. I bet that you have had some amazing experiences while there. Never forget to keep exploring!`;

}
placeslivedButton.onclick = placeslivedCreator