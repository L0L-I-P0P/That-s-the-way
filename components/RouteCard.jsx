const React = require('react');
const Raiting = require('./Raiting');

function RouteCard({ route, user }) {
  let middlerating;
  if (!route.Ratings || route.Ratings.length === 0) {
    middlerating = 0;
  } else {
    middlerating =
      route.Ratings.reduce((a, b) => a + b.rating, 0) / route.Ratings.length;
  }
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
        data-id={route.id}
        className="ya-map"
      ></div>
      <div className="card-body">
        <h5 className="card-title">{route.title}</h5>
        <p className="card-text">{`${route.description.slice(0, 100)}...`}</p>
        <p className="card-text">
          Длина маршрута:{' '}
          <span id={`length${route.id}`}>{route.route_length}</span>
        </p>
        <p className="card-text">{`Автор: ${route.User.name}`}</p>
        <Raiting route={route} middlerating={middlerating} />

        <a href={`/routes/${route.id}`} className="btn btn-primary">
          Подробнее
        </a>
      </div>
    </div>
  );
}

module.exports = RouteCard;
