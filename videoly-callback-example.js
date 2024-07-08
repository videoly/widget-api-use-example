// create callback to process videos
function processVideosCallback(err, data) {
  if (err) {
    // Something went wrong, let's log it
    console.error(err);
    return;
  }

  // get videos and basic actions
  const { videos, actions: { startPlayer, closePlayer } } = data;

  // render videos and bind actions to video thumbnails
  renderVideolyVideos(videos, startPlayer, closePlayer);
}

// create function that will render videos as html/css
function renderVideolyVideos(videos, startPlayer, closePlayer) {
  // Customize this selector to put videos in the right place
  const widgetPlacementSelector = '.product-videos';

  // get element that will be an anchor to our videos
  const anchor = document.querySelector(widgetPlacementSelector);

  // wrap videos with some html/css
  const videoListElement = document.createElement('div');

  videoListElement.style.cssText = `
    display: flex;
    gap: 5px;
  `;

  // Customize this number to show only a certain amount of videos
  const showOnlyVideosCount = 3;

  videos
    .slice(0, showOnlyVideosCount)
    .forEach(video => {
      const videoElement = createVideoElement(video);
      // add destroyable events
      videoElement.addEventListener('click', () => startPlayer(video));
      videoListElement.append(videoElement);
    });

  // append some global styles for videos
  appendGlobalVideoStyles();

  // append videos to the page
  anchor.append(videoListElement);
}

// some auxiliary function to wrap video with markup
function createVideoElement(video) {
  const videoItem = document.createElement('div');

  const videoItemTile = document.createElement('div');
  videoItemTile.classList.add('videoly-video-tile');
  videoItemTile.style.width = '120px'; // width of the thumbnail
  videoItemTile.style.height = '67px'; // height of the thumbnail

  const videoCover = document.createElement('div');
  videoCover.classList.add('videoly-video-cover');
  const playButton = document.createElement('div');
  playButton.classList.add('videoly-video-play-button');
  const duration = document.createElement('div');
  duration.classList.add('videoly-video-duration');
  const genre = document.createElement('div');
  genre.classList.add('videoly-video-genre');

  videoItem.append(videoItemTile);
  videoItemTile.append(videoCover);
  videoCover.append(playButton);
  videoItemTile.append(duration);
  videoItemTile.append(genre);

  if (video.genre) {
    genre.style.cssText = `
      position: absolute;
      top: 0;
      right: 0;
      max-width: 110px;
      text-align: left;
      background-color: rgba(255, 255, 255, .8);
      padding: 2px 4px 2px 5px;
      letter-spacing: 0.04em;
      font-size: 10px;
      overflow: hidden;
      margin-right: 0;
      z-index: 2;
    `;
    genre.textContent = video.genre;
  }

  duration.textContent = video.duration;

  // important for us to know if rendering was successful.
  videoItem.dataset.widgetApiVideo = true;

  videoCover.style.backgroundImage = `url(${video.thumbs.default && video.thumbs.default.url})`;
  return videoItem;
}

// some global styles to style video elements
function appendGlobalVideoStyles() {
  const css = `
    .videoly-video-tile {
      position: relative;
      border-radius: 2px;
      cursor: pointer;
    }

    .videoly-video-cover {
      display: inline-block;
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-position: 50%;
      background-size: cover;
      transition: background-color .2s;
    }

    .videoly-video-cover::before {
      position: absolute;
      top: 0;
      display: block;
      content: '';
      width: 100%;
      height: 100%;
      background-color: rgba(48, 48, 48, .30);
      z-index: 1;
    }

    .videoly-video-tile:hover .videoly-video-cover::before {
      background-color: rgba(48, 48, 48, .1);
    }

    .videoly-video-play-button {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;

      background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMjQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTMzLjI5IDMuNzQ3YTQuMjgzIDQuMjgzIDAgMDAtMy4wMDctMy4wM0MyNy42MjUgMCAxNyAwIDE3IDBTNi4zNzUgMCAzLjcxNy43MTZBNC4yNzEgNC4yNzEgMCAwMC43MSAzLjc0N0MwIDYuNDIyIDAgMTIgMCAxMnMwIDUuNTc4LjcxIDguMjUzYTQuMjgzIDQuMjgzIDAgMDAzLjAwNyAzLjAzQzYuMzc1IDI0IDE3IDI0IDE3IDI0czEwLjYyNSAwIDEzLjI4My0uNzE2YTQuMjcxIDQuMjcxIDAgMDAzLjAwNi0zLjAzMUMzNCAxNy41NzggMzQgMTIgMzQgMTJzMC01LjU3OC0uNzEtOC4yNTN6IiBmaWxsPSIjMjgyODI4Ii8+PHBhdGggZD0iTTEzLjUyMyAxNy4wNjVMMjIuNDEgMTJsLTguODg3LTUuMDY1djEwLjEzeiIgZmlsbD0iI2ZmZiIvPjwvc3ZnPg=='), linear-gradient(transparent,transparent);
      background-size: cover;
      width: 34px;
      height: 24px;
    }

    .videoly-video-duration {
      display: inline-block;
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 1px 2px;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.03em;
      background-color: #303030;
      color: #fff;
      opacity: 0;
    }

    .videoly-video-tile:hover .videoly-video-duration {
      opacity: 1;
    }
  
  `;
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(css));
  document.getElementsByTagName('head')[0].appendChild(style);
}

// Register callback(s) for Videoly Widget
window.videolyInitCallbacks = {
  onVideoDataLoaded: [processVideosCallback]
};
