import { get } from 'axios';
// const API_KEY = "AIzaSyBRGYvye6sQplKvvUAGKQDahAJ0wbdYqE4"
const API_KEY = "AIzaSyAPuQ-QoNzk42mssvQBwWZ0nlFzne4oV5E"

const normalizeSearchResults = (items) => {
  return items.map((item) => ({
    title: item.snippet.title,
    srcLink: "https://www.youtube.com/embed/" + item.id.videoId,
    thumbUrl: item.snippet.thumbnails.default.url,
  }))
}

export const searchVideos = async (keyword) => {
  const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${keyword}&type=video&key=${API_KEY}`

  try {
    const { data } = await get(url);
    const normalizedResult = normalizeSearchResults(data.items);

    return normalizedResult;
  } catch (e) {
    console.error(e)
  }
}
