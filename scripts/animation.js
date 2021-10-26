'use strict';

const _AR = {
    contentElement: document.getElementById('content'),
    markerElement: document.getElementById('marker'),
    buttonElement: document.querySelector('.button'),
};

_AR.markerElement.addEventListener('markerFound', startAnimation);
_AR.buttonElement.addEventListener('click', () => {
  window.open('https://uralmusicnight.ru/', '_blank');
});

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

    requestAnimationFrame(rotate);
}

function rotate() {
  const rotationSpeed = 0.5;
  const contentRotation = _AR.contentElement.getAttribute('rotation');
  _AR.contentElement.setAttribute('rotation',
    `${contentRotation.x} ${contentRotation.y} ${contentRotation.z + rotationSpeed}`);
  
    [..._AR.contentElement.children].forEach(el => {
      const elementRotation = el.getAttribute('rotation');
      el.setAttribute('rotation', 
        `${elementRotation.x} ${elementRotation.y} ${elementRotation.z - rotationSpeed}`);
    });
  
    requestAnimationFrame(rotate);
}
