function filterCategory(category) {
  var items = document.getElementsByClassName('menu-items');
  
  for (var i = 0; i < items.length; i++) {
      if (category === 'all') {
          items[i].style.display = 'flex'; // Show all items
      } else {
          if (items[i].classList.contains(category)) {
              items[i].style.display = 'flex'; // Show matching category
          } else {
              items[i].style.display = 'none'; // Hide other categories
          }
      }
  }
}
const buttonRight = document.getElementById('slideRight');
  const buttonLeft = document.getElementById('slideLeft');

  buttonRight.onclick = function () {
    document.getElementById('categories').scrollLeft += 120;
  };
  buttonLeft.onclick = function () {
    document.getElementById('categories').scrollLeft -= 120;
  };

    function scrollToNextSection() {
      var nextSection = document.querySelector("#menu-section");
      nextSection.scrollIntoView({ behavior: "smooth" });
  }