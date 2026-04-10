function toggleClass(main, sub1, sub2) {
  const mainElement = document.querySelector(main);

  const sub1Element = document.querySelector(sub1);
  const sub2Element = document.querySelector(sub2);
  
  if (mainElement.classList.contains('is-toggled')) {
      mainElement.classList.remove('is-toggled');
    } else {
      mainElement.classList.add('is-toggled');
      sub1Element.classList.remove('is-toggled');
      sub2Element.classList.remove('is-toggled');
  }
}