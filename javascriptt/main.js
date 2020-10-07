// One Month JS


// Week 2 Homework
// Finish the GIF search engine



document.querySelector(".js-go").addEventListener('click', function() {

    var input = document.querySelector("input").value;
    pushtoapi(input);

});

document.querySelector(".js-userinput").addEventListener('keyup', function(e) {

    var input = document.querySelector("input").value;

    // if the key ENTER is pressed...
    if (e.which === 13) {
        pushtoapi(input);
    }

});

/* 2. do the data stuff with the API */
function pushtoapi(input) {
    var url = "http://api.giphy.com/v1/gifs/search?q=" + input + "&api_key=dc6zaTOxFJmzC";
    console.log(url);

    // AJAX Request
    var GiphyAJAXCall = new XMLHttpRequest();
    GiphyAJAXCall.open('GET', url);
    GiphyAJAXCall.send();

    GiphyAJAXCall.addEventListener('load', function(e) {

        var data = e.target.response;
        pushToDOM(data);

    });
}





/* 3. Show me the GIFs */


function pushToDOM(data) {
    var container = document.querySelector(".js-container");
    var response = JSON.parse(data);

    var src = response.data;
    container.innerHTML = "";

    src.forEach(function(image) {

        var srcs = image.images.fixed_height.url;

        // console.log(src);


        container.innerHTML = container.innerHTML + "<img src=\"" + srcs + "\" class=\"container-image\">";

    });

}