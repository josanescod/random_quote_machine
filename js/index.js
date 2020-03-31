

let quotes = [

    ['No hay que ir para atrás ni para darse impulso','Laot Tse'],
    ['No hay caminos para la paz; la paz es el camino','Mahatma Gandhi'],
    ['Haz el amor y no la guerra','John Lenon'],
    ['Para trabajar basta estar convencido de una cosa: que trabajar es menos aburrido que divertirse','Charles Baudelaire'],
    ['Lo peor que hacen los malos es obligarnos a dudar de los buenos','Jacinto Benavente'],
    ['Las guerras seguirán mientras el color de la piel siga siendo más importante que el de los ojos','Bob Marley'],
    ['Aprende a vivir y sabrás morir bien','Confucio'],
    ['Cada día sabemos más y entendemos menos','Albert Einstein'],
    ['La medida del amor es amar sin medida','San Agustín'],
    ['El cuerpo humano es el carruaje; el yo, el hombre que lo conduce; el pensamiento son las riendas, y los sentimientos, los caballos','Platón']

]




window.onload = () => {


showQuote()
newQuoteButton()

}




function showQuote(){
    let RandomNumber = Math.floor(Math.random() * quotes.length)
    let text = document.querySelector('#text')
    let author = document.querySelector('#author')
    for (i=0;i<quotes[RandomNumber].length;i++) {
    text.innerHTML = quotes[RandomNumber][0]
    author.innerHTML = '- '+quotes [RandomNumber][1]
    let quoteAuthor =quotes[RandomNumber][0]+' - '+quotes[RandomNumber][1]
    let enlace = document.querySelector('#twee-quote')
    enlace.href = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="+quoteAuthor
    
    }
    

}


function newQuoteButton(){
    let botonNF = document.querySelector('#new-quote')
    botonNF.addEventListener("click",showQuote)
}









