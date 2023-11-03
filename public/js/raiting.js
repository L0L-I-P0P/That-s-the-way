const ratings = document.querySelectorAll('.ratingStar');
if (ratings.length > 0) {
  initRatings();
}

function initRatings() {
  let ratingActive;
  let ratingValue;

  ratings.forEach((el) => {
    const rating = el;
    initRating(rating);
  });

  function initRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidht();

    if (rating.classList.contains('rating-set')) {
      setRating(rating);
    }
  }
  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating_active');
    ratingValue = rating.querySelector('.rating_value');
  }

  function setRatingActiveWidht(index = ratingValue.innerHTML) {
    const ratingActiveWidht = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidht}%`;
  }

  function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating_item');
    for (let index = 0; index < ratingItems.length; index++) {
      const ratingItem = ratingItems[index];
      ratingItem.addEventListener('mouseenter', function (e) {
        initRatingVars(rating);
        setRatingActiveWidht(ratingItem.value);
      });
      ratingItem.addEventListener('mouseleave', function (e) {
        setRatingActiveWidht();
      });
      ratingItem.addEventListener('click', function (e) {
        initRatingVars(rating);
        setRatingActiveWidht(ratingItem.value);
        if (rating.dataset.ajax) {
          setRatingValue(ratingItem.value, rating);
        } else {
          ratingValue.innerHTML = index + 1;
        }
      });
    }
  }
}

async function setRatingValue(value, rating){
  
}
