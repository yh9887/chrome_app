const quotes = [
    {
        quote:"Do not turn back when you are just at the goal.",
        author:"Publilius Syrus",
    },
    {
        quote:"Misfortune shows those who are not really friends.",
        author:"Aristotle",
    },
    {
        quote:"Reading is sometimes an ingenious device for avoiding thought.",
        author:"Sir Arthur Helps",
    },
    {
        quote:"Can miles truly separate you from friends.... If you want to be with someone you love, aren't you already there?",
        author:"Richard Bach",
    },
    {
        quote:"I may lose land...but I never lose a minute.",
        author:"Napoleon Bonaparte",
    },
    {
        quote:"Never be entirely idle; but either be reading, or writing, or praying or meditating or endeavoring something for the public good.",
        author:"Thomas a Kempis",
    },
    {
        quote:"The past is a source of knowledge, and the future is a source of hope. Love of the past implies faith in the future.",
        author:"Stephen Ambrose",
    },
    {
        quote:"Difficulties are meant to rouse, not discourage. The human spirit is to grow strong by conflict.",
        author:"William Ellery Channing",
    },
    {
        quote:"It's the soul's duty to be loyal to its own desires. It must abandon itself to its master passion.",
        author:"Rebecca West",
    },
    {
        quote:"No great genius has ever existed without some touch of madness.",
        author:"Aristotle",
    }

]


const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;