'use strict';

const _AR = {
    contentElement: document.getElementById('content'),
    markerElement: document.getElementById('marker'),
};

_AR.markerElement.addEventListener('markerFound', startAnimation);

function startAnimation() {
    let increasingDuration = 400;
    let decreasingDuration = 200;

    _AR.markerElement.removeEventListener('markerFound', startAnimation);

    _AR.contentElement.setAttribute('animation',
      `property: scale; to: 1.5 1.5 1.5; dur: ${increasingDuration}; easing: easeInCubic;`);

    setTimeout(() => {
        _AR.contentElement.setAttribute('animation',
          `property: scale; to: 1 1 1; dur: ${decreasingDuration}; easing: easeOutCubic;`);
    }, increasingDuration);
}
