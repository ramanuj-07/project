console.log('Welcome to Spotify');

let songIndex = 0;
let audioElement = new Audio('Sunset Dream - Cheel.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songs = [
    { songName: "Sunset Dream", filePath: "project/Spotify clone/Sunset Dream - Cheel" },
    { songName: "Sunset Dream", filePath: "project/Spotify clone/Sunset Dream - Cheel" },
    { songName: "Sunset Dream", filePath: "project/Spotify clone/Sunset Dream - Cheel" },
    { songName: "Sunset Dream", filePath: "project/Spotify clone/Sunset Dream - Cheel" },
    { songName: "Sunset Dream", filePath: "project/Spotify clone/Sunset Dream - Cheel" },
    { songName: "Sunset Dream", filePath: "project/Spotify clone/Sunset Dream - Cheel" },
    { songName: "Sunset Dream", filePath: "project/Spotify clone/Sunset Dream - Cheel" },
]

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('play_circle');
        masterPlay.classList.add('pause_circle');
        gif.style.opacity = 1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('pause_circle');
        masterPlay.classList.add('play_circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

// spotify API 
// document.getElementById("searchButton").addEventListener("click", function() {
//     var searchTerm = document.getElementById("searchInput").value;

//     fetch(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {
//         headers: {
//             'Authorization': 'Bearer YOUR_ACCESS_TOKEN' // Replace with your Spotify access token
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         // Extract relevant information from the response
//         var searchResults = data.tracks.items.map(item => {
//             return `${item.name} - ${item.artists.map(artist => artist.name).join(', ')}`;
//         });

//         displaySearchResults(searchResults);
//     })
//     .catch(error => {
//         console.error('Error:', error);
//     });
// });

// function displaySearchResults(results) {
//     var searchResultsDiv = document.getElementById("searchResults");
//     searchResultsDiv.innerHTML = "";

//     results.forEach(function(result) {
//         var listItem = document.createElement("div");
//         listItem.textContent = result;
//         searchResultsDiv.appendChild(listItem);
//     });
// }
