// Topics
var topics = ["stone cold", "undertaker", "vince mcmahon", "the rock", "hulk hogan"]

// Display topics 
var topicButton = function () {
    $("#buttons").empty();

    for (let i = 0; i < topics.length; i++) {
        var button = $('<button class="button btn btn-primary">');
        button.attr("data-name", topics[i]);
        button.text(topics[i].toUpperCase());

        $("#buttons").append(button);
    }
}

topicButton();



// My api key
var api = "&api_key=5t8MlY5fypS0vO5FlPmAtWubZunwN06n";

$(".button").on("click", function () {

    var term = $(this).attr("data-name");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?q=" + term + api + "&limit=10&rating=g";

    $.ajax({
        method: 'GET',
        url: queryUrl
    }).then(function (response) {

        $("#gifLoader").empty();

        var results = response.data;
        console.log(results);

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item col-md-4'>");

            var rating = results[i].rating;

            var p = $("<p>").text("Rating: " + rating);

            var personImage = $("<img class='img w-100'>");
            personImage.attr("src", results[i].images.fixed_height.url);


            gifDiv.prepend(p);
            gifDiv.prepend(personImage);

            $("#gifLoader").prepend(gifDiv); 
    }
        });
});