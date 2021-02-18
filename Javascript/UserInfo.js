$(document).ready(function () { "use strict";
    const APIKEY = "6024016e5ad3610fb5bb5e6c";
    getUserInfo();
    $("#information-submit").on("click", function (e) {
        //prevent default action of the button 
        e.preventDefault();
        alert("Thank you, we have recorded your information in our database, we will send the reward to your email after confirming, thank you for participating in our quiz!");
        //[STEP 2]: let's retrieve form data
        //for now we assume all information is valid
        //you are to do your own data validation
        let username = $("#username").val();
        let score = $("#highscore").val();
        let email = $("#email").val();
       //[STEP 3]: get form values when user clicks on send
        //Adapted from restdb api
        let jsondata = {
          "username": username,
          "email" : email,
          "highscore": score
        };
    
        //[STEP 4]: Create our AJAX settings. Take note of API key
        let settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://rewarduserstorage-de62.restdb.io/rest/userinfo",
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
          getUserInfo();
        });
      });//end click 
      function getUserInfo(limit = 50, all = true) {
    
        //[STEP 7]: Create our AJAX settings
        let settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://rewarduserstorage-de62.restdb.io/rest/userinfo",
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
            <td>${response[i].email}</td>
            <td>${response[i].highscore}</td>
            <td><a href='#' class='delete' data-id='${response[i]._id}'></a></td><td><a href='#update-contact-container' class='update' data-id='${response[i]._id}' data-Name='${response[i].username}' data-ID='${response[i].email}' data-ID='${response[i].highscore}'></a></td></tr>`;
          }
    
          //[STEP 9]: Update our HTML content
          //let's dump the content into our table body
          $("#information-list tbody").html(content);
    
          $("#User-information").html(response.length);
        });
    
    
      }
    })
