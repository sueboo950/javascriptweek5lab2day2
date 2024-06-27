function icecreamCreator(){
    let name, flavor;
    name = prompt("What is your name?");
    flavor = prompt("What is your favorite flavor of ice cream?");
    icecreamHeader.innerHTML = 'Ice Cream...What Is Your Flavor';
    icecreamParagraph.innerHTML = `Hi ${name}! That is awesome that you love ${flavor} ice cream. I'll bet that it tastes amazing.`

}
icecreamButton.onclick = icecreamCreator