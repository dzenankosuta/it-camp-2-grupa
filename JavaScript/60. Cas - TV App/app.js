function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
}

const getVideos = () => {
  const videosElements = document.getElementsByClassName("videos");
  const videosElement = videosElements[0];

  axios
    .get("https://services.brid.tv/services/get/latest/26456/0/1/25/0.json")
    .then((response) => {
      const videos = response.data.Video;
      const playerId = response.data.Player.id;
      let player = null;

      function playVideo(videoId) {
        const parentDiv = document.getElementById("video");

        const myDiv = document.createElement("div");
        myDiv.setAttribute("id", "myDiv");
        myDiv.classList.add("brid");

        parentDiv.appendChild(myDiv);

        player = $bp("myDiv", {
          id: `${playerId}`,
          width: "480",
          height: "360",
          video: `${videoId}`,
          mobileWidth: "100%",
          mobileHeight: "300",
          closeButton: {
            position: "top-right",
            show_on: "start",
            hide_when_sticky: true,
          },
        });
      }

      const playVideoHandler = (video) => {
        if (player) player.destroy();
        playVideo(video.id);
        window.scrollTo({
          left: 0,
          top: 0,
          behavior: "smooth",
        });
      };

      videos.forEach((video) => {
        const videoElement = document.createElement("div");
        const img = document.createElement("img");

        videoElement.classList.add("video");
        img.setAttribute("alt", "video-img");
        img.setAttribute("src", `${video.snapshots.sd}`);

        const divContent = document.createElement("div");
        const h4 = document.createElement("h4");

        divContent.classList.add("content");
        h4.classList.add("title");
        h4.textContent = video.name;

        const p = document.createElement("p");
        const duration = formatTime(video.duration);

        p.classList.add("time");
        p.textContent = duration;

        divContent.appendChild(h4);
        divContent.appendChild(p);

        videoElement.appendChild(img);
        videoElement.appendChild(divContent);
        videosElement.appendChild(videoElement);

        img.addEventListener("click", () => playVideoHandler(video));
        h4.addEventListener("click", () => playVideoHandler(video));
      });
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      setTimeout(() => {
        while (videosElement.firstChild) {
          videosElement.removeChild(videosElement.firstChild);
        }
        getVideos();
      }, 1000 * 60 * 5);
    });
};

getVideos();
