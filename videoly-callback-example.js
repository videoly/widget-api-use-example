// create callback to process videos
function processVideosCallback(err, data) {
  // if smth goes wrong, we send you an error as a first argument
  if (err) {
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
  // get element that will be an anchor to our videos
  // REPLACE '.social' with id/class/whatever of YUOR ANCHOR ELEMENT!
  const anchor = document.querySelector('.social');

  // calculate some dimensions
  const videoCount = videos.length;
  const videoElemHeight = 67;
  const videoElemWidth = 120;
  const paddings = 4;
  // max-width will be 120px * 3;
  const width = videoCount > 3 ? (3 * videoElemWidth) : (videoCount * videoElemWidth);
  const minHeight = videoElemHeight + paddings;

  // wrap videos with some html/css
  const videoTape = document.createElement('ul');

  videoTape.style.cssText = `
    position: relative;
    width: 600px;
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(3, ${videoElemWidth}px);
    width: ${width}px;
    min-height: ${minHeight}px;
    padding: ${paddings}px;
  `;

  videos.forEach(video => {
    const videoElement = createVideoElement(video);

    // add destroyable events
    videoElement.addEventListener('click', () => startPlayer(video));
    videoTape.append(videoElement);
  });

  // append some global styles for videos
  appendGlobalVideoStyles();

  // append videos to the page
  anchor.append(videoTape);
}

// some auxiliary function to wrap video with markup
function createVideoElement(video) {
  const videoItem = document.createElement('div');
  videoItem.classList.add('videoly_video_item');

  const videoItemTile = document.createElement('div');
  videoItemTile.classList.add('videoly_video_item_tile');

  const videoCover = document.createElement('div');
  videoCover.classList.add('videoly_video_cover');
  const playButton = document.createElement('div');
  playButton.classList.add('videoly_video_play_button');
  const duration = document.createElement('div');
  duration.classList.add('videoly_video_duration');
  const genre = document.createElement('div');
  genre.classList.add('videoly_video_genre');

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
    .videoly_video_item {
      position: relative;
      width: 146px;
      height: 68px;
      background-repeat: no-repeat;
    }

    .videoly_video_item_tile {
      position: relative;
      display: block;
      width: 120px;
      height: 67px;
      border-radius: 2px;
      background-color: white;
      /* while bg picture is not loaded we need to hide what's behind (.btn-more) */
      background-repeat: no-repeat;
      cursor: pointer;
      background-position: 0 -12px;
      background-clip: border-box;
    }

    .videoly_video_item_tile:hover {
      border-color: rgba(209, 210, 210, .98);
    }

    .videoly_video_cover {
      display: inline-block;
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background-position: 50%;
      background-size: cover;
      transition: background-color .2s;
    }

    .videoly_video_cover::before {
      position: absolute;
      top: 0;
      display: block;
      content: '';
      width: 100%;
      height: 100%;
      background-color: rgba(48, 48, 48, .30);
      z-index: 1;
    }

    .videoly_video_item_tile:hover .videoly_video_cover::before {
      background-color: rgba(48, 48, 48, .1);
    }

    .videoly_video_play_button {
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

    .videoly_video_duration {
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

    .videoly_video_item_tile:hover .videoly_video_duration {
      opacity: 1;
    }
  
  `;
  const style = document.createElement('style');

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  document.getElementsByTagName('head')[0].appendChild(style);
}

// Register callback(s) for Videoly Widget!
window.videolyInitCallbacks = {
  onVideoDataLoaded: [processVideosCallback]
};
