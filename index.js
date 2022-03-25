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

    let skip = document.createElement("div");
    skip.classList.add("switch");
    skip.setAttribute("value", index);
    document.getElementById("switch-container").append(skip);

    let dropdownItem = document.createElement("div");
    dropdownItem.value = index;
    dropdownItem.classList.add("dropdown-title");
    dropdownItem.innerHTML = `-> ${_movie.title}`;
    document.getElementById("all").append(dropdownItem);
    index ++;
})

let switches = document.querySelectorAll(".switch");
function clearSwitch(move){
    switches.forEach(_switch => {
        _switch.style.background = "white";
    })
    switches[move].style.background = "black";
    switches[move].style.border = "1px solid rgba(255, 255, 255, 0.589)";
}

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
clearSwitch(0);

let posters = document.querySelectorAll(".poster");
document.getElementById("slide-right").addEventListener("click", function(){
    carouselItems[current].style.display = "none"
    current += 1;
    current = (current) % (carouselItems.length);
    posters[current].style.animationName = "carouselSwitchRight";
    posters[current].style.animationDuration = "3s";
    display();
    clearSwitch(current);
})

document.getElementById("slide-left").addEventListener("click", function(){
    carouselItems[current].style.display = "none"
    if (current == 0){
        current = carouselItems.length-1;
    }
    else {
        current -= 1;
    }
    posters[current].style.animationName = "carouselSwitchLeft";
    posters[current].style.animationDuration = "3s";
    display();
    clearSwitch(current);
})

document.getElementById("switch-container").addEventListener("click", function(event){
    if (event.target.getAttribute("class") == "switch"){
        current = parseInt(event.target.getAttribute("value"));
        carouselItems.forEach(carouselItem => {
            carouselItem.style.display = "none";
        })
        display();
        clearSwitch(current);
    }
})

function toogle(value){
    if (value){
        return false;
    }
    else {
        return true;
    }
}

let visibility = false; 
document.getElementById("more").addEventListener("click", function(){
    visibility = toogle(visibility);
    if (visibility){
        document.getElementById("all").style.display = "none";
        document.getElementById("drop-icon").style.transform = "rotate(360deg)";
    }
    else{
        document.getElementById("all").style.display = "block";
        document.getElementById("drop-icon").style.transform = "rotate(180deg)";
    }
})

document.getElementById("all").addEventListener("click", function(event){
    if (event.target.classList == "dropdown-title"){
        current = parseInt(event.target.value);
        carouselItems.forEach(carouselItem => {
            carouselItem.style.display = "none";
        })
        display();
        clearSwitch(current);
        visibility = toogle(visibility);
        document.getElementById("all").style.display = "none";
        document.getElementById("drop-icon").style.transform = "rotate(360deg)"
    }
})

document.getElementById("carousel-container").addEventListener("swiped-left", function(){
    carouselItems[current].style.display = "none"
    if (current == 0){
        current = carouselItems.length-1;
    }
    else {
        current -= 1;
    }
    posters[current].style.animationName = "carouselSwitchLeft";
    posters[current].style.animationDuration = "3s";
    display();
    clearSwitch(current);
})

document.getElementById("carousel-container").addEventListener("swiped-right", function(){
    carouselItems[current].style.display = "none"
    current += 1;
    current = (current) % (carouselItems.length);
    posters[current].style.animationName = "carouselSwitchRight";
    posters[current].style.animationDuration = "3s";
    display();
    clearSwitch(current);
})