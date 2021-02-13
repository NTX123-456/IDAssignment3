# IDAssignment3 
<h1>[Webpage done by Ng Tung Xuan(S10205325) and Tan Wei Jun(S10204421)]</h1>
<h2>Motive of this website:</h2>
<p>To allow Students who are keen on increasing their knowledge on Mathematics, and allow them to have a chance to tackle some difficult questions. In the process students can also gain scores and use their scores to exchange for some rewards. The gamification concept implemented in this assignment is that students who score for well for the quiz can stand a chance to win attractive prizes using their highscores.</p>

<h2>Useful Links</h2>
<li> Github Repository for this assignment: https://github.com/NTX123-456/NTX123-456.github.io-IDAssignment3 </li>
<li> Github pages that this website is hosted on (Mainpage): https://ntx123-456.github.io/NTX123-456.github.io-IDAssignment3/</li>
<li> Game page: https://ntx123-456.github.io/NTX123-456.github.io-IDAssignment3/Game.html</li>
<li> HighScores page: https://ntx123-456.github.io/NTX123-456.github.io-IDAssignment3/HighScores.html </li>
<li> Ending page: https://ntx123-456.github.io/NTX123-456.github.io-IDAssignment3/Ending.html </li>
<li> Rewards page: https://ntx123-456.github.io/NTX123-456.github.io-IDAssignment3/Rewards.html </li>
<li> UserInfo page: https://ntx123-456.github.io/NTX123-456.github.io-IDAssignment3/UserInfo.html </li>

<h2>Features of this website:</h2>
<li>The first feature of this website is a challenging math quiz implemented to test students on their math knowledge</li>
<li>The Second feature of this website is the display of correct answers if the students get a particular question wrong</li>
<li>The third feature of this website is a highscore system that scores user's highscores into a database and displays it in a highscore page to allow students to save and see their own highscores</li>
<li>The Fourth feature of this website is a rewarding system to reward students who score well for the quiz with some small rewards like vouchers and movie tickets</li>
<li>The last feature is a form system that allows uers to input their details each time they claim a reward to ensure that their username is recorded each time they claim a reward</li>

<h1>Watch our demonstration/pitch video for our website here </h1>
<li>Pitch link: https://drive.google.com/file/d/1TbInhdDaeJJUJr1jHD2-SmtbuBP0EQxw/view?usp=sharing</li>

<h2>Design Process:</h2>
<p> We wanted to design something simple yet fun for users to try out, and we decided to do a quiz as we feel it is a easier concept to work on and expannd on, we also found it easier to implement some gamification features such as the highscore system and the rewards page system to encourage more students to take part in the quiz as well. This quiz takes a api from a website and loads the questions from the api into the quiz.</p>

<h2>Test Cases: </h2>

Test | Test step | Expected Result | Actual Result | Pass/Fail |
-------------- | -------------- | -------------- | -------------- | -------------- |
Test if there are no errors in CSS and HTML codes | Copy and Paste page url into CSS and HTML validators respectively and fix all errors observed | Minor errors are observed but are easy to fix | A few errors popped up and were fixed without problem |Pass|Test if Quiz questions are able to load into the html document and display the questions correctly |Load the api into postman and check if the questions are loaded properly and run the quiz to see if questions are displayed correctly |All Questions are able to be displayed correctly and clearly|All questions are displayed correctly|Pass|

<h2>Deployment Process:</h2>
Before we fully deployed this website into github pages, we tested this many times in our local files and also testing it in repl.it to make sure it is able to access the databases created to store the highscores and store the user input information before safely publishing our website on github after making the appropriate changes. For the website hosted on Github pages and the website that is hosted locally, the differences are the links to the various bootstrap CSS and Js core codes. For the locally hosted website a more specific link will be used to access the css and js core codes.


<h1>Credits</h1>
Bootstrap: https://getbootstrap.com/
<h3>Bootstrap examples used:</h3>
<li>Pricing template: https://getbootstrap.com/docs/4.0/examples/pricing/ </li>
<li>Starter template: https://getbootstrap.com/docs/4.0/examples/starter-template/ </li>

Api used for quiz questions:
<li>'https://opentdb.com/api.php?amount=10&category=19&difficulty=hard&type=multiple'</li>
Website for open quiz api:
<li> https://opentdb.com/ </li>

<h2>How to request for api</h2>
<li>1.Find the most suitable api that you want to use for your website/application</li>
<li>2.Test your api on postman to see whether it works or not, if it does not work, find another suitable api to use</li>
<li>3.There are many ways to request for an api, the way which we used for this assignment is using the fetch method, which is very commonly used for fetching api.</li>

<h3>Technologies used:</h3>
<li>Jquery</li>
<li>JavaScript</li>
<li>Html</li>
<li>Bootstrap</li>
<li>CSS</li>
<li>Fetch</li>

<h3>Outside/external codes referenced</h3>


