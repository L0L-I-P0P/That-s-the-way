const React = require('react');
const Raiting = require('./Raiting');

function RouteCard({ route, user }) {
  return (
    <div
      className="card mt-5 js-card"
      style={{ width: '20rem;' }}
      data-id={route.id}
    >
      <div
        id="map"
        data-from={route.route_from}
        data-to={route.route_to}
        data-city={route.place}
        className="ya-map"
      ></div>
      <div className="card-body">
        <h5 className="card-title">{route.title}</h5>
        <p className="card-text">{`${route.description.slice(0, 100)}...`}</p>
        <Raiting />
        <a href={`/routes/${route.id}`} className="btn btn-primary">
          Подробнее
        </a>
      </div>
    </div>
  );
}

module.exports = RouteCard;
