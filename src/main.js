const notemuChromeext = {
  changeBackground() {
    document
      .querySelector('html[ng-app=noteApp] main:not([hidden])')
      .classList.add('notemu-chromeext', 'enhanced-background');
  }
}

document.body.addEventListener('transitionend', () => {
  const path = location.pathname;
  if (/^\/[\w\-]+\/n\/\w+$/.test(path) || /^\/n\/\w+$/.test(path))
    notemuChromeext.changeBackground();
});

notemuChromeext.changeBackground();
