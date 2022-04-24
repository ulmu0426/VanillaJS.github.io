const quotesDiv = document.querySelector('.quotesDiv');
const quotes = document.querySelector('#quotes');
const auther = document.querySelector('#auther');

const quotesList = [    {
        text:"Do not try to be original, just try to be good.",
        auther:"Paul Rand"
    },    {
        text:"I never dreamed aout success, I worked for it.",
        auther:"Estee Lauder"
    },    {
        text:"Do not be afraid to give up the good to go for the great.",
        auther:"john D. Rockefeller"
    },    {
        text:"No pain, No gain.",
        auther:"Benjamin Franklin"
    },    {
        text:"It is not length of life, But depth of life.",
        auther:"Ralph Waldo Emerson"
    },    {
        text:"The road to success and the road to failure are almost exactly the same.",
        auther:"Colin R. Davis"
    },    {
        text:"Success is walking from failure to failure with no loss of enthusiasm.",
        auther:"Winston Chuchill"
    },    {
        text:"All progress takes place outside the comfort zone.",
        auther:"Michael John Bobak"
    },    {
        text:"You cannot change what you are, only what you do.",
        auther:"Philip Pullman"
    },    {
        text:"Change the way you look at things and the things you look at change.",
        auther:"Wayne Dyer"
    },    {
        text:"We konw what we are, but know not what we may be.",
        auther:"William Shakespeare"
    },
];

const randomIndex = Math.floor(Math.random()*quotesList.length);

quotes.innerText = quotesList[randomIndex].text;
auther.innerText = `-${quotesList[randomIndex].auther}-`;