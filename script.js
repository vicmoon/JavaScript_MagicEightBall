const options = [
    "It is certain",
    "Reply hazy, try again",
    "Don’t count on it",
    "It is decidedly so",
    "Ask again later",
    "My reply is no",
    "Without a doubt",
    "Better not tell you now",
    "My sources say no",
    "Yes definitely",
    "Cannot predict now",
    "Outlook not so good",
    "You may rely on it",
    "Concentrate and ask again",
    "Very doubtful",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes"
];

const magicBall= document.getElementById('mb-container');
const response = document.getElementById('response'); 


magicBall.addEventListener('click', function(){
    
    const index = Math.floor(Math.random() * 20); 
    const message = options[index];
    magicBall.classList = 'magicBall_outer animate'; 
    
    setTimeout(() => {
    response.textContent = message;
    response.style.fontSize= '1.1rem';
    magicBall.classList = 'magicBall_outer'; 

    }, 3000); 

})
