export default class Popovers {
  constructor(host) {
    this.host = host;
  }

  show() {
    this.host.addEventListener('click', (e) => {
      if (e.target.closest('.button') === null) {
        return;
      }
      e.target.closest('.button').querySelector('.card').classList.toggle('showCard');
    });
  }
}
