const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');
const highScores = JSON.parse(localStorage.getItem('highScores')) || [];
const MAX_HIGH_SCORES = 10;

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
    //window.location.assign('HighScores.html');
};

function checkforscore(){
    if (score === 100){
        alert("Superb Job!, you have answered all the answers correctly!");
    }
    if(score >= 70 && score > 50 ){
        alert("Not bad!, you man managed answer some of the questions correctly");
    }
      
    if(score > 70 && score < 100){
       
     alert("Well done!, you man managed answer majority of the questions correctly");
    }
    else{
        alert("Try better next time!");
    }
    
}   
$(document).ready(function () {
    const APIKEY = "602132893f9eb665a16892a5";
    $("#saveScoreBtn").on("click", function (e) {
        //prevent default action of the button 
        e.preventDefault();
        alert("Your highscore has been saved into the database");
        //[STEP 2]: let's retrieve form data
        //for now we assume all information is valid
        //you are to do your own data validation
        let username = $("#username").val();
        let score = mostRecentScore;
       //[STEP 3]: get form values when user clicks on send
        //Adapted from restdb api
        let jsondata = {
          "username": username,
          "finalScore": score
        };
    
        //[STEP 4]: Create our AJAX settings. Take note of API key
        let settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://loadhighscores-e488.restdb.io/rest/highscore",
          "method": "POST", 
          "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
          },
          "processData": false,
          "data": JSON.stringify(jsondata),
          "beforeSend": function(){
           
          }
        }
    
    
        //[STEP 5]: Send our ajax request over to the DB and print response of the RESTDB storage to console.
        $.ajax(settings).done(function (response) {
          console.log(response);
          
          //update our table 
          getHighScores();
        });
      });//end click 
      function getHighScores(limit = 50, all = true) {
    
        //[STEP 7]: Create our AJAX settings
        let settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://loadhighscores-e488.restdb.io/rest/highscore",
          "method": "GET", //[cher] we will use GET to retrieve info
          "headers": {
            "content-type": "application/json",
            "x-apikey": APIKEY,
            "cache-control": "no-cache"
          },
        }
    
        //[STEP 8]: Make our AJAX calls
        //Once we get the response, we modify our table content by creating the content internally. We run a loop to continously add on data
        //RESTDb/NoSql always adds in a unique id for each data, we tap on it to have our data and place it into our links 
        $.ajax(settings).done(function (response) {
          
          let content = "";
    
          for (var i = 0; i < response.length && i < limit; i++) {
            //console.log(response[i]);
            //[METHOD 1]
            //let's run our loop and slowly append content
            //we can use the normal string append += method
            /*
            content += "<tr><td>" + response[i].name + "</td>" +
              "<td>" + response[i].email + "</td>" +
              "<td>" + response[i].message + "</td>
              "<td>Del</td><td>Update</td</tr>";
            */
    
            //[METHOD 2]
            //using our template literal method using backticks
            //take note that we can't use += for template literal strings
            //we use ${content} because -> content += content 
            //we want to add on previous content at the same time
            content = `${content}<tr id='${response[i]._id}'>
            <td>${response[i].username}</td>
            <td>${response[i].finalScore}</td>
            <td><a href='#' class='delete' data-id='${response[i]._id}'>Del</a></td><td><a href='#update-contact-container' class='update' data-id='${response[i]._id}' data-Name='${response[i].username}' data-ID='${response[i].finalScore}'>Update</a></td></tr>`;
          }
    
          //[STEP 9]: Update our HTML content
          //let's dump the content into our table body
          $("#highscores-list tbody").html(content);
    
          $("#total-highscores").html(response.length);
        });
    
    
      }
    })
