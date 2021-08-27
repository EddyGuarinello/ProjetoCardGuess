function roll() {
    const totalCards = 4;
    let arrayCards = [];

    for (let cont = 0; cont < totalCards; cont++) {
        arrayCards[cont] = cont + 1;
    }

    let randomCards;
    let aux;

    for (let i = arrayCards.length; i;) {
        randomCards = Math.random() * i-- | 0;
        aux = arrayCards[randomCards];
        arrayCards[randomCards] = arrayCards[i];
        arrayCards[i] = aux;
    }
    return arrayCards;
}

function create(x) {
    let createImg = document.createElement('img');
    let cardb = document.querySelector('#cardbox');

    cardbox.appendChild(createImg);
    cardb.lastChild.src = "cards/Cardback.png";
    cardb.lastChild.alt = `card${x}`;
    cardb.lastChild.id = `card${x}`;

}

function generateCards() {
    let cards = roll();

    let primeiro = cards[0];
    create(primeiro);

    let segundo = cards[1];
    create(segundo);

    let terceiro = cards[2];
    create(terceiro);

    let quarto = cards[3];
    create(quarto);

}

function removeCards() {
    let remove = document.querySelectorAll("img")
    for (img of remove) {
        img.parentElement.removeChild(img)
    }
}

function events() {
    let card1 = document.querySelector("#card1");
    let card2 = document.querySelector("#card2");
    let card3 = document.querySelector("#card3");
    let card4 = document.querySelector("#card4");

    card1.addEventListener("click", function clicked() {
        score += 100;
        cardFlip++;
        card1.src = "cards/CardUni.png";
        totalScore[0].innerText = score
        totalScore[1].innerText = score
        card1.removeEventListener("click", clicked)

    })
    card2.addEventListener("click", function clicked() {
        score += 50;
        cardFlip++;
        card2.src = "cards/CardSun.png";
        totalScore[0].innerText = score
        totalScore[1].innerText = score
        card2.removeEventListener("click", clicked)

    })
    card3.addEventListener("click", function clicked() {
        score += -50;
        cardFlip++;
        card3.src = "cards/CardMoon.png";
        totalScore[0].innerText = score
        totalScore[1].innerText = score
        card3.removeEventListener("click", clicked)

    })
    card4.addEventListener("click", function clicked() {
        score += -100;
        cardFlip++;
        card4.src = "cards/CardDemon.png";
        totalScore[0].innerText = score
        totalScore[1].innerText = score
        card4.removeEventListener("click", clicked)

    })
}

function deleteCardEvents() {
    card1.replaceWith(card1.cloneNode(true));
    card2.replaceWith(card2.cloneNode(true));
    card3.replaceWith(card3.cloneNode(true));
    card4.replaceWith(card4.cloneNode(true));
}
generateCards();

let round = 1;
let roundCount = document.querySelectorAll(".round")
let score = 300;
let cardFlip = 0;
let win = 0;
let corpo = document.querySelector("body")
let result = document.querySelector("#resultBodyHidden")

corpo.addEventListener("click", function () {
    if (score >= 600) {
        if (win == 0) {
            resultado.innerText = "Parabéns, você venceu!"
            deleteCardEvents()
            result.id="resultBody"
            win = 1;
        }
    } else if (score <= 0) {
        if (win == 0) {
            resultado.innerText = "Que pena... Você perdeu :( !"
            deleteCardEvents()
            result.id="resultBody";
            win = 1;
        }
    } else if (cardFlip == 2) {
        deleteCardEvents();
        setTimeout(function () {
            removeCards();

            generateCards();
            events();
            cardFlip = 0;
            round++;
            roundCount[0].innerText = round;
            roundCount[1].innerText = round;
        }, 1000)
    }
})
let totalScore = document.querySelectorAll(".score");
let resultado = document.querySelector("#resultado");
totalScore[0].innerText = score

events();
