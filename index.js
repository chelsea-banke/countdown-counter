class movie {
    constructor(title, poster, realeaseDate){
        this.title = title;
        this.poster = poster;
        this.realeaseDate = realeaseDate;
    }
} 
let movies = [
    new movie("Multiverse Of Madness", "resourses/posters/doctor-strange-multiverse-of-madness.png", "May 05, 2022"),
    new movie("Wakanda Forever", "resourses/posters/wakanda-forever.jpg", "November 11, 2022"),
    new movie("Thor Love and Thunder", "resourses/posters/thor-love-and-thunder.jpg", "July 8, 2022"),
    new movie("Avatar 2", "resourses/posters/avatar-2.jpg", "December 16, 2022"),
    new movie("Aquaman And The Lost Kingdom", "resourses/posters/aquaman-and-the-lost-kingdom.jpg", "March 17, 2023"),
    new movie("Fantastic Beasts And The Secrets Of Dombledore", "resourses/posters/fantastic-beasts-and-the-secrets-of-dombledore.png", "April 15, 2022")
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
let background = document.getElementById("carousel-container");
let carouselItems = document.querySelectorAll("._carousel-item");

function display(){
    carouselItems[current].style.display = "flex";
    let image = movies[parseInt(carouselItems[current].value)].poster;
    document.getElementById("title").textContent = movies[parseInt(carouselItems[current].value)].title;
    background.style.backgroundImage = "url("+image+")";
}

display();
document.getElementById("slide-right").addEventListener("click", function(){
    carouselItems[current].style.display = "none"
    current += 1;
    current = (current) % (carouselItems.length);
    display();
})
document.getElementById("slide-left").addEventListener("click", function(){
    carouselItems[current].style.display = "none"
    if (current == 0){
        current = carouselItems.length-1;
    }
    else {
        current -= 1;
    }
    display();
})