# IDAssignment3 
<h1>Webpage done by Ng Tung Xuan(S10205325)</h1>
<p>Do take note that this assignment is considered an individual and not a pair assignment, as my partner has not put in any form of contribution at all.</p>

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

<h1>Watch my demonstration/pitch video for my website here </h1>
<li>Pitch link: https://drive.google.com/file/d/1TbInhdDaeJJUJr1jHD2-SmtbuBP0EQxw/view?usp=sharing</li>

<h2>Design Process:</h2>
<p> I wanted to design something simple yet fun for users to try out, and I decided to do a quiz as we feel it is a easier concept to work on and expannd on, I also found it easier to implement some gamification features such as the highscore system and the rewards page system to encourage more students to take part in the quiz as well. This quiz takes a api from a website and loads the questions from the api into the quiz. There is also a user form system that records the user's information for example, the user's email and username to verify that they have actually won the reward.</p>

<h2>Test Cases:</h2>

Test | Test step | Expected Result | Actual Result | Pass/Fail |
------------- | ------------- | ------------- | ------------- | ------------- |
Test if there are no errors in CSS and HTML codes | Copy and Paste page url into CSS and HTML validators respectively and fix all errors observed | Minor errors are observed but are easy to fix | A few errors popped up and were fixed without problem, the errors that remained not fixed are the CSS errors found in the bootstrap CSS Code |Pass|
Test if Quiz questions are able to load into the html document and display the questions correctly | Load the api into postman and check if the questions are loaded properly and run the quiz to see if questions are displayed correctly | All Questions are able to be displayed correctly and clearly|All questions are displayed correctly|Pass|
Test if all javascript codes does not contain any error | Copy and paste Javascript code into javascript validator and observe the errors surfaced | There are some errors seen in the code but are fixable | For some of the javascript files that require the decleration of constants at the start of the program contain errors that have to do with the constants and hence are not fixable. Other than those errors other js errors are fixed | Fail | 
Check if online database is able to input and display user information for example, highscore or their username properly | Input the user details accordingly and press the submit button and check if information is displayed in the highscores table | All information is displayed properly and correctly | All Information is displayed and can be seen in the table | Pass |

<h2>Deployment Process:</h2>
Before we fully deployed this website into github pages, we tested this many times in our local files and also testing it in repl.it to make sure it is able to access the databases created to store the highscores and store the user input information before safely publishing our website on github after making the appropriate changes. For the website hosted on Github pages and the website that is hosted locally, the differences are the links to the various bootstrap CSS and Js core codes. For the locally hosted website a more specific link will be used to access the css and js core codes.

<h2>Points to take note for users of this website </h2>
<li> The Final Layout and the final version of this website will look slightly different that what was demonstrated in the pitch as we decided to make some small changes to the website, for example, adding a loading page with a lottie animation before starting the quiz and adding bootstrap layout to the quiz page. Hence the final version of the website, mainly the quiz and the loading page will be different from what is shown in the pitch.</li>

<li> The mobile version of this website might not be fully functioning for some pages, for example the website may not show the page fully for the highscore page and ending page but the buttons are stil fully functional, only some of the layout is not fully shown properly

<h2> Future Features to be added </h2>
<li> A better interface and layout for mobile users in the future </li>
<li> Add a feature which users can delete their own highscore and update it to a new highscore </li>

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
<li>1. Find the most suitable api that you want to use for your website/application</li>
<li>2. Test your api on postman to see whether it works or not, if it does not work, find another suitable api to use</li>
<li>3. There are many ways to request for an api, the way which we used for this assignment is using the fetch method, which is very commonly used for fetching api.</li>

<h3>Technologies used:</h3>
<li>Jquery</li>
<li>JavaScript</li>
<li>Html</li>
<li>Bootstrap</li>
<li>CSS</li>
<li>Fetch</li>

<h3>Tools used for automated testing process</h3>
<li>W3 HTML Validator: https://validator.w3.org/</li>
<li>W3 CSS Validator: https://jigsaw.w3.org/css-validator/</li>
<li>W3 Link Checker: https://validator.w3.org/checklink</li>
<li>Api Validator: https://www.postman.com/</li>
<li>Javascript Validator: https://codebeautify.org/jsvalidate</li>

<h3>Websites/applications that helped me to complete this assignment</h3>
<li>1. Github </li>
<li>2. Postman </li>
<li>3. Youtube </li>
<li>4. Stack Overflow </li>
<li>5. For testing purposes : repl.it </li>
<li>6. Where I get my lottie animations: https://lottiefiles.com/</li>

<h3>Background Images Used</h3>
<li>https://png.pngtree.com/thumb_back/fw800/background/20200604/pngtree-hand-drawn-education-math-background-image_337861.jpg</li>
<li>data:image/jpeg;base64,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</li>
<li>https://somnomed.com/wp-content/uploads/2016/12/website-background-1.jpg</li>
<li>http://i2.wp.com/phoenixheliparts.com/wp-content/uploads/2014/06/good-background.jpg?fit=848%2C1024</li>


<h3>Outside/external codes referenced</h3>
<li> How Make a quiz app tutorial done by James Q Quick
Link to tutorial on youtube, all credit for the tutorial goes to James Q Quick: https://www.youtube.com/watch?v=u98ROZjBWy8&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx </li>

<h3>Personal Contributions to this assignment</h3>
<li>Pitch - Ng Tung Xuan</li>
<li>Idea and research - Ng Tung Xuan</li>
<li>Coding - Ng Tung Xuan </li>
<li>Readme.md - Ng Tung Xuan </li>
<li>Github commits - Ng Tung Xuan </li>
<li>Debugging/fixing of errors - Ng Tung Xuan</li>

