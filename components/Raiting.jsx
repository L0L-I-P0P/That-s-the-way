const React = require('react');

module.exports = function Raiting({ user, route, children, middlerating }) {
  return (
    <form
      className="rating-form"
      data-id={route.id}
      action={`/api/routes/${route.id}/rating`}
    >
      <div className="ratingStar rating-set">
        <div className="rating_body">
          <div className="rating_active"></div>
          <div className="rating_items">
            <input
              type="radio"
              className="rating_item"
              name="rating"
              value="1"
            />
            <label title="Оценка «1»"></label>
            <input
              type="radio"
              className="rating_item"
              name="rating"
              value="2"
            />
            <label title="Оценка «2»"></label>
            <input
              type="radio"
              className="rating_item"
              name="rating"
              value="3"
            />
            <label title="Оценка «3»"></label>
            <input
              type="radio"
              className="rating_item"
              name="rating"
              value="4"
            />
            <label title="Оценка «4»"></label>
            <input
              type="radio"
              className="rating_item"
              name="rating"
              value="5"
            />
            <label title="Оценка «5»"></label>
          </div>
        </div>
        <div className="rating_value">{middlerating}</div>
        <div>{children}</div>
      </div>
    </form>
  );
};
