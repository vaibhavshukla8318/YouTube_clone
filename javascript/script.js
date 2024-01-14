const listIcon = document.getElementById("list-icon");
const aside = document.getElementById("aside");
const main = document.getElementById("main");

listIcon.addEventListener("click", ()=>{
    if(aside.style.display === "none"){
        aside.style.display = "block";
        main.style.width = "80vw"
    }else{
        aside.style.display = "none";
        main.style.width = "100%"
    }
});


const profileDetails = document.querySelector(".profile-details");
const profile = document.getElementById("profile");

// Add an event listener to the document to handle clicks outside the profileDetails container
document.addEventListener("click", (event) => {
    const isClickInsideProfileDetails = profileDetails.contains(event.target);
    
    if (!isClickInsideProfileDetails) {
        profile.style.display = "none";
        appearance.style.display = "none"
    }
});

// Stop propagation of click events inside the profileDetails container to prevent it from triggering the document click handler
profileDetails.addEventListener("click", (event) => {
    event.stopPropagation();

    if(profile.style.display === "block"){
                profile.style.display = "none";
            }
            else{
                profile.style.display = "block";
    }
});


const appearanceContainer = document.getElementById("appearance-container");
const appearance = document.getElementById("appearance");

appearanceContainer.addEventListener("click", (event)=>{
    event.stopPropagation();

    if(appearance.style.display === "block"){
        appearance.style.display = "none";
    }
    else{
        profile.style.display = "none";
        appearance.style.display = "flex";
    }
})

const bellFillIcon = document.querySelector(".bi-bell-fill");
const bellIcon = document.querySelector(".bi-bell");
const notificationDetails = document.querySelector(".notification-details");
const notification = document.getElementById("notification");

notificationDetails.addEventListener("click", () =>{
    if(notification.style.display === "block"){
        notification.style.display = "none";
        bellIcon.style.display = "flex";
        bellFillIcon.style.display = "none";
    }
    else{
        notification.style.display = "block";
        bellIcon.style.display = "none";
        bellFillIcon.style.display = "flex";
    }
})

const videoFillIcon = document.querySelector(".bi-camera-video-fill");
const videoIcon = document.querySelector(".bi-camera-video");
const videoDetails = document.querySelector(".video-details");
const video = document.getElementById("video")

videoDetails.addEventListener("click", ()=>{
    if(video.style.display === "block"){
        video.style.display = "none";
        videoIcon.style.display = "flex";
        videoFillIcon.style.display = "none";
    }
    else{
        video.style.display = "block";
        videoIcon.style.display = "none";
        videoFillIcon.style.display = "flex";
    }
})

const containers = document.querySelectorAll(".notification-content div");
containers.forEach(container => {
    const moreIcon = container.querySelector(".more-icon-container i");

    container.addEventListener("mouseenter", () => {
        moreIcon.style.display = "flex";

    });

    container.addEventListener("mouseleave", () => {
        moreIcon.style.display = "none";
    });
});



// theme

const body = document.body;
const anchors = document.querySelectorAll("a");
const filters = document.querySelector(".filters");

// Function to set the theme
function setTheme(theme) {
    if (theme === "dark") {
        body.style.backgroundColor = "rgb(15,15,15)";
        body.style.color = "white";
        filters.style.backgroundColor = "rgb(15, 15, 15)";

        anchors.forEach(anchor => {
            anchor.style.color = "white";
        });
    } else if (theme === "light") {
        body.style.backgroundColor = "#fd5c63";
        filters.style.backgroundColor = "#76FF7A";
        body.style.color = "#E1EBEE";

        anchors.forEach(anchor => {
            anchor.style.color = "#E1EBEE";
        });
    }
}

// Check if a theme is stored in localStorage
const storedTheme = localStorage.getItem("theme");

// If a theme is stored, set it; otherwise, use the default dark theme
setTheme(storedTheme || "dark");

// Dark mode
const dark = document.getElementById("dark");
const darkDone = document.querySelector(".dark-done");
dark.addEventListener("click", () => {
    setTheme("dark");
    // Store the selected theme in localStorage
    localStorage.setItem("theme", "dark");
    darkDone.style.display = "block";
    lightDone.style.display = "none";
});

// Light mode
const light = document.getElementById("light");
const lightDone = document.querySelector(".light-done");

light.addEventListener("click", () => {
    setTheme("light");
    // Store the selected theme in localStorage
    localStorage.setItem("theme", "light");
    lightDone.style.display = "block";
    darkDone.style.display = "none";
});
