// https://docs.rapidapi.com/v2.0.0/docs/what-is-rapidapi
document.addEventListener("DOMContentLoaded", function() {
    // student ID and name
    const studentID = "200528748";
    const studentName = "Gaurav Gaurav";

   // <p> tag to display the student info
    const studentInfo = document.getElementById("student-info");

    // To display the  ID and name
    studentInfo.innerHTML = `Student ID: ${studentID}<br>Name: ${studentName}`;
});



const url = 'https://youtube-media-downloader.p.rapidapi.com/v2/playlist/videos?playlistId=PLeCdlPO-XhWFzEVynMsmosfdRsIZXhZi0';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'debecbf2a0msh96e493030bfb99fp181843jsn730ae504bf5e',
        'X-RapidAPI-Host': 'youtube-media-downloader.p.rapidapi.com'
    }
};

async function fetchVideos() {
    try {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log(data); 
        if (data && data.items) {
            displayVideos(data.items);
        } else {
            throw new Error('Invalid response format');
        }
    } catch (error) {
        console.error(error);
        document.getElementById('videos-container').innerHTML = '<p>Error fetching or displaying data</p>';
    }
}

function displayVideos(videos) {
    const videosContainer = document.getElementById('videos-container');
    videosContainer.innerHTML = ''; 
    videos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.innerHTML = `
            <h2>${video.title}</h2>
            <p>Channel: ${video.channel.name}</p>
            <p>Length: ${video.lengthText}</p>
            <img src="${video.thumbnails[0].url}" alt="${video.title}">
        `;
        videosContainer.appendChild(videoElement);
    });
}

// Calling fetchVideos function when the page loads
window.onload = fetchVideos;
