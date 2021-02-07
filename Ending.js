const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const countscore = document.getElementById('score');
const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value,
    };
    highScores.push(score);
    highScores.sort((a, b) => b.score - a.score);
    highScores.splice(5);

    localStorage.setItem('highScores', JSON.stringify(highScores));
    window.location.assign('Highscores.html');
};

function checkforscore(){
    if (countscore === 100){
        alert("Superb Job!, you have answered all the answers correctly!");
    }
    if(countscore >= 70 && countscore > 50 ){
        alert("Not bad!, you man managed answer some of the questions correctly");
    }
      
    if(countscore > 70 && countscore < 100){
       
     alert("Well done!, you man managed answer majority of the questions correctly");
    }
    else{
        alert("Try better next time!");
    }
    
}   

