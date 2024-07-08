window.videolyInitCallbacks = {
  onVideoDataLoaded: [handleVideoLoaded]
};

function handleVideoLoaded(err, data) {
  if (err) {
    console.log(err);
    return;
  }

  const { videos, actions } = data;

  if (videos.length) {
    removeOriginalVideos(['.origin-video-item-external_video', '.origin-video-item-video', '.origin-video-item-model']);
  }

  const [exampleThumb, latestThumb, width, height] = getOriginalThumbDetails('.product__thumb-item');
  let placeAfterNode = latestThumb;

  videos.forEach(video => {
    const videolyThumb = createThumb(video, width, height, actions);

    const originThumbClone = exampleThumb.cloneNode(true);
    const currentAnchor = originThumbClone.querySelector('a');
    currentAnchor.replaceWith(videolyThumb);

    placeAfterNode.after(originThumbClone);
    placeAfterNode = originThumbClone;
  });
}

function getOriginalThumbDetails(selector) {
  const allOriginThumbs = document.querySelectorAll(selector);
  const exampleThumb = allOriginThumbs[1] || allOriginThumbs[0];
  let latestThumb = allOriginThumbs[allOriginThumbs.length - 1];
  const width = exampleThumb.offsetWidth || 76;
  const height = exampleThumb.offsetHeight || 50;

  return [exampleThumb, latestThumb, width, height];
}

function removeOriginalVideos(selectors) {
  selectors.forEach(selector => {
    const originalVideos = document.querySelectorAll(selector);
    originalVideos.forEach(originVideo => {
      originVideo.parentElement.removeChild(originVideo);
    });
  })
}

function createThumb(video, width, height, actions) {
  const { startPlayer } = actions;

  const thumbWrapper = document.createElement('div');
  thumbWrapper.classList.add('videoly-video-item-tile');
  thumbWrapper.style.width = width + 'px';
  thumbWrapper.style.height = height + 'px';

  const videoCover = document.createElement('div');
  videoCover.classList.add('videoly-video-cover');
  videoCover.style.backgroundImage = 'url(' + video.thumbs.default.url + ')';
  thumbWrapper.append(videoCover);

  const playBtn = document.createElement('div');
  playBtn.classList.add('videoly-play-button');
  playBtn.classList.add('videoly-play-button--youtube');

  videoCover.append(playBtn);

  const genre = document.createElement('div');
  genre.classList.add('videoly-genre');
  genre.textContent = video.genre;
  thumbWrapper.append(genre);

  const duration = document.createElement('div');
  duration.classList.add('videoly-video-duration');
  duration.textContent = video.duration;
  thumbWrapper.append(duration);

  thumbWrapper.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopImmediatePropagation();
    startPlayer(video);
  });

  return thumbWrapper;
}
