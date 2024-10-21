const p1Score = document.querySelector('.p1-score');
const p2Score = document.querySelector('.p2-score');

document.querySelector('.buttons').addEventListener('click', (e) =>{
    if(e.target.matches('.p1-btn')){
        p1Score.innerText ++;
        if(p1Score.innerText === "3"){
            p1Score.style.color = "green";
            p2Score.style.color = "red";
            p1Score.style.fontSize = '1.1em';
            p2Score.style.fontSize = '0.9rem';
            document.querySelector('.title').innerHTML = 'Player One Won! <br> Please click the reset button.';
            document.querySelector('.title').style.fontSize = '1.5rem';
            document.querySelector('.p1-btn').classList ='p1';
            document.querySelector('.p2-btn').classList ='p2';
        }
    } else if(e.target.matches('.p2-btn')){
        p2Score.innerText ++;
        if(p2Score.innerText === "3"){
            p1Score.style.color = "red";
            p2Score.style.color = "green";
            p1Score.style.fontSize = '0.9em'
            p2Score.style.fontSize = '1.1rem'
            document.querySelector('.title').innerHTML = 'Player Two Won! <br> Please click the reset button.';
            document.querySelector('.title').style.fontSize = '1.5rem';
            document.querySelector('.p1-btn').classList ='p1';
            document.querySelector('.p2-btn').classList ='p2';
        }
    } else if(e.target.matches('.reset')){
        p1Score.innerText = 0;
        p2Score.innerText = 0;
        p1Score.style.color = "black";
        p2Score.style.color = "black";
        p1Score.style.fontSize = '1em'
        p2Score.style.fontSize = '1rem'
        document.querySelector('.title').innerText = 'Score Keeper';
        document.querySelector('.p1').classList = 'p1-btn';
        document.querySelector('.p2').classList = 'p2-btn';
    }
})

