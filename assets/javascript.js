// Topics
var topics = ["stone cold", "undertaker", "vince mcmahon", "the rock", "hulk hogan"]

// Display topics 
var topicButtons = function () {
    $("#buttons").empty();

    for (let i = 0; i < topics.length; i++) {
        var button = $('<button class="button">');
        button.attr("data-name", topics[i]);
        button.text(topics[i].toUpperCase());
        $("#buttons").append(button);
    }
}

topicButtons ();



// My api key
var api = "&api_key=5t8MlY5fypS0vO5FlPmAtWubZunwN06n";

$(".button").on("click", function () {

    var term = $(this).attr("data-name");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + term + api + "&limit=10&rating=g";

    $.ajax({
        method: 'GET',
        url: queryUrl
    }).then(function (response) {

        $("#gifs").empty();

        var results = response.data;
        console.log(results);
        // for loop the aviable gifs until limit is met
        for (var i = 0; i < results.length; i++) {
            var addDiv = $("<div class='pad'>");
            var addGif = $("<img class='img'>");
            // source gif
            addGif.attr("src", results[i].images.fixed_height.url);
            //append html
            addDiv.prepend(addGif);
            $("#gifs").prepend(addDiv); 
            }
        });

       
        //Push buttons from search bar to screen using jquery
        $("#add-gif-button").on("click", function () {
        //Place the value as data-name
            var term =  $("#search-input").val().trim();
            console.log(term);
            var button = $('<button class="button">');
            button.attr("data-name");

            
        });
       
        //Once on screen, data-name will be used as term to pull ajax call

});
