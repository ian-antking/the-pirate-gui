function handleInfoClick() {
  const info = document.getElementById('instructions');
  if (info.style.left === '0vw') {
    info.style.left = '-80vw';
  } else {
    info.style.left = '0vw';
  }
}

function handleLogClick() {
  const log = document.getElementById('output');
  if (log.style.right === '0vw') {
    log.style.right = '-80vw';
  } else {
    log.style.right = '0vw';
  }
}

document.body.ontouchend = (e) => {
  e.preventDefault();
};

window.handleInfoClick = handleInfoClick;
window.handleLogClick = handleLogClick;
