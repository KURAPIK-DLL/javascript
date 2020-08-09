// grap the input value //




document.querySelector(".js-go").addEventListener('click', function() {
    //  alert("test");

    var x = document.querySelector("input").value;
    console.log(x);
    Push(x);


});








// do the data stuff with the API //







// show me the GIFS //

function Push(x) {
    var container = document.querySelector(".js-container");
    container.innerHTML = x;
}