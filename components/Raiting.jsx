const React = require('react');

module.exports = function Raiting({ user, route, children }) {
  return (
    <div className="ratingStar">
      <div className="rating_body">
        <div className="rating_active"></div>
        <div className="rating_items">
          <input type="radio" className="rating_item" value="1" />
          <label title="Оценка «1»"></label>
          <input type="radio" className="rating_item" value="2" />
          <label title="Оценка «2»"></label>
          <input type="radio" className="rating_item" value="3" />
          <label title="Оценка «3»"></label>
          <input type="radio" className="rating_item" value="4" />
          <label title="Оценка «4»"></label>
          <input type="radio" className="rating_item" value="5" />
          <label title="Оценка «5»"></label>
        </div>
      </div>
      <div className="rating_value">{route.rating}</div>
      <div>{children}</div>
    </div>
  );
};
