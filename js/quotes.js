const quotes =[
    {
        quote: "Concentration comes out of a combination of confidence and hunger.",
        author: "Arnold Palme",
    },
    {
        quote: "You may regret your silence once, but you will regret your words often.",
        author: "이안 가비롤",
    },
    {
        quote: "No one really listens to anyone else, and if you try it for a while you'll see why.",
        author: "Mignon McLaughlin",
    },
    {
        quote: "No man is good enough to govern another man without that other's consent.",
        author: "Abraham Lincoln",
    },
    {
        quote: "Honest disagreement is often a good sign of progress.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "Do not fear death so much, but rather the inadequate life.",
        author: "Bertolt Brecht",
    },
    {
        quote: "Strength does not come from physical capacity. It comes from an indomitable will.",
        author: "Mahatma Gandhi",
    },
    {
        quote: "Work and acquire, and thou hast chained the wheel of Chance.",
        author: "Ralph Waldo Emerson",
    },
    {
        quote: "Do not weep; do not wax indignant. Understand.",
        author: "Baruch Spinoza",
    },
    {
        quote: "Truly great madness cannot be achieved without significant intelligence.",
        author: "Henrik Tikkanen",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText =  todayQuote.quote;
author.innerText = todayQuote.author;