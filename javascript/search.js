const searchBox = document.querySelector(".input-box");
const searchIcon = document.querySelector(".search-icon");
const searchLink = "https://www.youtube.com/results?search_query=";

searchIcon.addEventListener("click", () =>{
    if(searchBox.value.length){
        
        location.href = searchLink + searchBox.value;
    }
})