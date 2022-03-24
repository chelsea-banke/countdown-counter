class movie {
    constructor(title, poster, realeaseDate){
        this.title = title;
        this.poster = poster;
        this.realeaseDate = realeaseDate;
    }
}
// November 11, 2022
// July 8, 2022
// December 16, 2022
// March 17, 2023
// April 15
let movies = [
    new movie("Multiverse Of Madness", "resourses/posters/Doctor_Strange_Poster_2.png", "06/05/2022")
]

let index = 0;
movies.forEach( _movie => {
    let carouselItem = document.createElement("div");
    carouselItem.value = index;
    carouselItem.classList.add("_carousel-item");
    carouselItem.innerHTML = `<img src="/${_movie.poster}" class="poster" value="${index}">`;
    document.getElementById("carousel").append(carouselItem);
    index ++;
})

let current = 0;
let carouselItems = document.querySelectorAll("._carousel-item");
carouselItems[current].style.display = "block";
console.log(carouselItems[current])