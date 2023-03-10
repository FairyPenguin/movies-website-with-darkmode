const arrows = document.querySelectorAll(".arrow");

const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const itemNumber = movieLists[i].querySelectorAll("img").length;

  let clickCounter = 0;

  arrow.addEventListener("click", () => {
    //for diffrent screen sizes (slider)
    const ratio = Math.floor(innerWidth / 270);

    clickCounter++;

    if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
      movieLists[i].style.transform = `translateX(${
        movieLists[i].computedStyleMap().get("transform")[0].x.value - 300
      }px)`;
    } else {
      movieLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

// Dark Mode Functionality //

const themeSwitcher = document.querySelector(".toggle-btn");

const itemsToChange = document.querySelectorAll(
  ".container,.movie-list-title,.navbar-container,.sidebar,.side-bar-icon,.toggle"
);

themeSwitcher.addEventListener("click", () => {
  itemsToChange.forEach((item) => {
    item.classList.toggle("active");
  });
  themeSwitcher.classList.toggle("active");
});
