document.querySelector('html').setAttribute('lang', 'en');

let Utf = document.createElement('meta');
Utf.setAttribute('charset', 'UTF-8');
document.head.append(Utf);

let title = document.createElement('title');
title.innerHTML = "HW8";
document.head.append(title);
 
let fonts = document.createElement('link');
fonts.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Arvo&family=Montserrat:wght@700&family=Open+Sans&display=swap');
document.head.append(fonts);

let callAction = document.createElement("div");
callAction.classList.add("call-action");
document.body.append(callAction);


let callActionHead = document.createElement("h2");
callActionHead.innerHTML = "Choose Your Option";
callActionHead.classList.add("call-action__head");
callAction.append(callActionHead);

let callActionDescription = document.createElement('p');
callActionDescription.innerHTML = "But I must explain to you how all this mistaken idea of denouncing";
callActionDescription.classList.add("call-action__description");
callAction.append(callActionDescription);


let callActionCards = document.createElement('div');
callActionCards.classList.add("call-action__cards");
callAction.append(callActionCards);

let callActionCard =  document.createElement('div');
callActionCard.innerHTML = `
                    <h5 class="call-action__type">FREELANCER</h5>
                    <h3 class="call-action__title">Initially designed to </h3>
                    <p class="call-action__text">But I must explain to you how all this mistaken idea of denouncing </p>
                    <button class="call-action__btn">Start Here</button>` 
callActionCard.classList.add("call-action__card");
callActionCards.append(callActionCard);


let callActionCard2 = document.createElement('div');
callActionCard2.innerHTML = `
                <h5 class="call-action__type">STUDIO</h5>
                <h3 class="call-action__title">Initially designed to </h3>
                <p class="call-action__text">But I must explain to you how all this mistaken idea of denouncing </p>
                <button class="call-action__btn">Start Here</button>`;
callActionCard2.classList.add("call-action__card");
callActionCards.append(callActionCard2);

let style = document.createElement('style');
style.innerHTML = `
    *{
        margin: 0;
        padding: 0;
    }
    .call-action{
        text-align: center;
    }
    .call-action__head{
        margin-top: 2%;
        font-size: 36px;
        line-height: 48px;
        color: #212121;
        font-family: 'Arvo', serif;
    }
    .call-action__description{
        font-size: 14px;
        color: #9FA3A7;
        margin-top: 10px;
        font-family: 'Open Sans', sans-serif;
    }
    .call-action__cards{
        display: flex;
        justify-content: space-between;
        width: 60%;
        margin: 0 auto;
        margin-top: 4%;
        border: 1px solid #ddd;
        border-radius: 5px;
    }
    .call-action__card:hover{
        background-color: #8F75BE;
    }
    .call-action__card:hover .call-action__type{
        color: gold;
    }
    .call-action__card:hover .call-action__title,
    .call-action__card:hover .call-action__text,
    .call-action__card:hover .call-action__btn{
        color: #fff;
    }
    .call-action__type{
        margin-top: 16%;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        font-size: 12px;
        line-height: 15px;
        letter-spacing: 2.4px;
        color: #9FA3A7;
    }
    .call-action__title{
        width: 80%;
        font-size: 36px;
        font-weight: normal;
        line-height: 46px;
        font-family: 'Arvo', serif;
        color: #212121;
        margin: 0 auto;
        margin-top: 8%;
    }
    .call-action__text{
        font-family: 'Open Sans', sans-serif;
        font-size: 12px;
        line-height: 22px;
        color: #9FA3A7;
        width: 65%;
        margin: 0 auto;
        margin-top: 6%;
    }
    .call-action__btn{
        height: 50px;
        width: 160px;
        border: 2px solid gold; 
        background: transparent;
        border-radius: 20px;
        text-transform: uppercase;
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        margin: 0 auto;
        margin-top: 15%;
        margin-bottom: 14%;
        cursor: pointer;
    }
`;
document.head.append(style);