const videoCardContainer = document.querySelector('.video-container');

const apiKey = "AIzaSyAAbU6f66lAovuupGjM0xuHNIPI9O7ZYK4";
const video_http = "https://www.googleapis.com/youtube/v3/videos?";
const channel_http = "https://www.googleapis.com/youtube/v3/channels?";

fetch(video_http + new URLSearchParams({
    key: apiKey,
    part:"snippet",
    chart:"mostPopular",
    maxResults:50,
    regionCode : "IN"
}))
.then(res => res.json())
.then(data => {
    // console.log(data);
    data.items.forEach(item =>{
        getChannelIcon(item);
    })
})
.catch(err => console.log(err));

const getChannelIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key: apiKey,
        part: "snippet",
        id: video_data.snippet.channelId
    }))
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
        // console.log(video_data);
        makeVideoCard(video_data);
    })
}

const makeVideoCard = (data) =>{
    videoCardContainer.innerHTML += 
    `
    <div class="video" onclick="location.href ='https://youtube.com/watch?v=${data.id}' ">
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="video-content">
            <img src="${data.channelThumbnail}" class="channel-icon" alt="">
            <div class="info">
                <h6 class="title">${data.snippet.title}</h6>
                <p class="channel-name">${data.snippet.channelTitle}</p>
            </div>
        </div>
    </div>
    `
}

