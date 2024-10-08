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

function filterEvent(category) {
  var items = document.getElementsByClassName('menu-itemz');
  
  for (var i = 0; i < items.length; i++) {
          if (items[i].classList.contains(category)) {
              items[i].style.display = 'block'; // Show matching category
          } else {
              items[i].style.display = 'none'; // Hide other categories
          }
      }
  }

  function filterEventz(category) {
    var items = document.getElementsByClassName('menu-itemzz');
    
    for (var i = 0; i < items.length; i++) {
            if (items[i].classList.contains(category)) {
                items[i].style.display = 'flex'; // Show matching category
            } else {
                items[i].style.display = 'none'; // Hide other categories
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