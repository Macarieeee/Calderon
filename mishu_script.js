const buttonRight = document.getElementById('slideRight');
    const buttonLeft = document.getElementById('slideLeft');

    buttonRight.onclick = function () {
      document.getElementById('container').scrollLeft += 120;
    };
    buttonLeft.onclick = function () {
      document.getElementById('container').scrollLeft -= 120;
    };

    document.querySelector('.preparate-porc').addEventListener('click', () => {
      document.querySelector('.menu-category-05').classList.add('myClass');
      document.querySelector('.menu-all').classList.add('myClass2');
    });