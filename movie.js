$('<div id="movie-wrapper"></div>').appendTo('body');
// $('<div id="results"></div>').appendTo('body');
$('<form id="movie-form"> <input id="movie-name" placeholder="movie name"> <input id="movie-rating" placeholder="movie rating"> <button>Submit</button> </form>').appendTo('#movie-wrapper');
// $('form').attr('id','movie-form');
$('<ul id="movie-list"></ul>').appendTo('#movie-wrapper');
$('#movie-form input').eq(1).attr({
    'type': "number",
    'min': "1",
    'max': "5"
});
// const movieName = $('#movie-name').val();
// const movieRating = $('#movie-rating').val();
$('button').attr('id', 'submit-button');
$('#movie-form').on('submit', function (evt) {
    evt.preventDefault();
    console.log(evt);
    const $title = evt.target[0].val;
    // const $rating = $('#movie-form').eq(1).val();
    console.log('$title', $title);
    let $newMovie = $('<li></li>');
    $newMovie.appendTo('#movie-list');
    // const newMovie = makeNewMovie(movieTitle, movieRating);
    console.log('movieName', movieName);
    // const newMovie = $(`<li>Title:${movieName} Rating:${movieRating}</li>`);
    console.log('newMovie', newMovie);
    // newMovie.appendTo('#movie-list');
})
function makeNewMovie(title, rating) {
    let $resultToAppend = $('h1');
    title = $resultToAppend.val(0);
    rating = $resultToAppend.val(1);
    console.log('title', title);
}

//on click event creat element from input value of movie name and append to div below in new paragraph
