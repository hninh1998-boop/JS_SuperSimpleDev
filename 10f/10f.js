    function toggleClass(classAttributes) {
      const gameBtnElement = document.querySelector(classAttributes);

      if (gameBtnElement.classList.contains('is-toggled')) {
        gameBtnElement.classList.remove('is-toggled');
      } else {
        gameBtnElement.classList.add('is-toggled');
      }
    }