const  linkDeslizante= (elem) => {
    event.preventDefault();
    window.scroll({       // 1
        top: document
      .querySelector( elem )
        .offsetTop - 110,       // 2
        left: 0,
        behavior: 'smooth'// 3
     });
  }