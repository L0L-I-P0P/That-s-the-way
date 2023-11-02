const React = require('react');

module.exports = function Raiting({ user }) {
  let 
  return (
    <div className="ratingStar">
      <input type="radio" className="rating" value="1" />
      <label for="star-1" title="Оценка «1»"></label>
      <input type="radio" className="rating" value="2" />
      <label for="star-2" title="Оценка «2»"></label>
      <input type="radio" className="rating" value="3" />
      <label for="star-3" title="Оценка «3»"></label>
      <input type="radio" className="rating" value="4" />
      <label for="star-4" title="Оценка «4»"></label>
      <input type="radio" className="rating" value="5" />
      <label for="star-5" title="Оценка «5»"></label>
      <script defer src="/js/raiting.js" />
    </div>
  );
};
