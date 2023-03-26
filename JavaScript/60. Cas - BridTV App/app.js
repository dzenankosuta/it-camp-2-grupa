const getVideos = async () => {
  const response = await fetch(
    "https://services.brid.tv/services/get/latest/26456/0/1/25/0.json"
  );
  const data = await response.json();
  console.log(data);
  const playerId = data.Player.id;
  console.log(playerId);
  const videos = data.Video;
  console.log(videos);
};

getVideos();
