// Topics
var topics = ["stone cold", "undertaker", "vince mcmahon", "the rock", "hulk hogan"];

// Display topics 
var topicButtons = function () {
    $("#buttons").empty();

    for (var i = 0; i < topics.length; i++) {
        var button = $('<button class="button">');
        button.attr("data-name", topics[i]);
        //must remember uppercase
        button.text(topics[i].toUpperCase());
        $("#buttons").append(button);
    }
}

topicButtons ();


 //Push buttons from search bar to screen using jquery
 $("#add-gif-button").on("click", (event) => {
    event.preventDefault();
    //Place the value as data-name
        var term =  $("#search-input").val().trim();
        topics.push(term);
        console.log(topics);
        var button = $('<button class="button">');
        button.attr("data-name", term);
        button.text(term.toUpperCase());
        $("#buttons").append(button);
        topicButtons ();
        //Once on screen, data-name will be used as term to pull ajax call
  
    });
// get data from api
$(".button").on("click", function () {
    // My api key
    var api = "&api_key=5t8MlY5fypS0vO5FlPmAtWubZunwN06n";
    var term = $(this).attr("data-name");
    var url = "https://api.giphy.com/v1/gifs/search?q=";
    var limits = "&limit=10";
    var rating = "&rating=pg";
    var queryUrl = url + term + api + limits + rating;

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

});

 

 