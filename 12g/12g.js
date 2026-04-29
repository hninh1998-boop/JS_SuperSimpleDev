    setInterval(function() {
      if (document.title === 'New messages') {
        document.title = 'App';
      } else if (document.title === 'App') {
        document.title = 'New messages';
      }
    }, 1000);