const ratings = document.querySelectorAll('.ratingStar');
if (ratings.length > 0) {
  initRatings();
}

function initRatings() {
  let ratingActive;
  let ratingValue;

  for (let index = 0; index < ratings.length; index++) {
    const rating = ratings[index];
    initRating(rating);
  }
  function initRating(rating) {
    initRatingVars(rating);
    setRatingActiveWidht();
  }
  function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating_active');
    ratingValue = rating.querySelector('.rating_value');
  }

  function setRatingActiveWidht(index = ratingValue.innerHTML) {
    const ratingActiveWidht = index / 0.05;
    ratingActive.style.width = `${ratingActiveWidht}%`;
  }
}
