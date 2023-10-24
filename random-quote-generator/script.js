const quotes=[
    {
        quote:'“Be yourself; everyone else is already taken.”',
        by:'Oscar Wilde'
    },
    {
        quote:'“Live as if you were to die tomorrow. Learn as if you were to live forever.”',
        by:'Mahatma Gandhi'
    },
    {
        quote:'“I have not failed. I\'ve just found 10,000 ways that won\'t work.”',
        by:'Thomas A.Edison'
    },
    {
        quote:'“Sometimes you wake up. Sometimes the fall kills you. And sometimes, when you fall, you fly.”',
        by:'Neil Gaimant'
    },
    {
        quote:'"But man is not made for defeat. A man can be destroyed but not defeated.',
        by:'Ernest Hemingway'
    },
    {
        quote:'"When you reach the end of your rope, tie a knot in it and hang on.',
        by:'Franklin D. Roosevelt'
    },
    {
        quote:'"There is nothing permanent except change.',
        by:'Heraclitus'
    },
    {
        quote:'"Let us sacrifice our today so that our children can have a better tomorrow.',
        by:'A. P. J. Abdul Kalam'
    },{
        quote:'It is better to be feared than loved, if you cannot be both.',
        by:'Niccolo Machiavelli'
    },
    {
        quote:'Learning never exhausts the mind.',
        by:'Leonardo da Vinci'
    }

]

const quo = document.querySelector(".quote");
const whotold=document.querySelector('.auth');
const buttonNext = document.querySelector('.btn-next');
const buttonLoop = document.querySelector('.btn-loop');

index = 0;
quo.textContent = quotes[index].quote;
whotold.textContent = quotes[index].by;

buttonLoop.addEventListener('click',()=>{
    setInterval(() => {
        index = Math.floor(Math.random()*(quotes.length));
        quo.textContent = quotes[index].quote;
        whotold.textContent = quotes[index].by;
    }, 3000);

})

buttonNext.addEventListener('click',()=>{
    index = Math.floor(Math.random()*(quotes.length));
    quo.textContent = quotes[index].quote;
    whotold.textContent = quotes[index].by;
})
