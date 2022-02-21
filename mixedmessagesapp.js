//mixed messages
let randomNumber = () => {
    return Math.floor(Math.random() * 3);
} 

let jokes ={
    jokeIntro : ['Orange.','Jimmy.','Art.' ],
    jokeResponse  : ['orange who?', 'Jimmy who?', 'Art who?'],
    jokeLine : ['orange you glad i didn\'t bannana', 'Jimmy crack corn and I do not care.', 'R2D2 is my favorite droid in Star Wars!']
};
let a = randomNumber();
console.log('Knock Knock');
console.log('Who\'s there?');
console.log(jokes.jokeIntro[a]);
console.log(jokes.jokeResponse[a]);
console.log(jokes.jokeLine[a]);
