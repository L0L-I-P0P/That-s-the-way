const React = require('react');

function RouteCard({ route, user }) {
  return (
    <div
      className="card js-card"
      style={{ width: '12rem;' }}
      // data-id={route.id}
    >
      <div id="map" className="ya-map"></div>
{/*       <div className="card-body">
        <h5 className="card-title">{route.title}</h5>
        <p className="card-text">{`${route.description.slice(0, 100)}...`}</p>
        <a href={`/routes/${route.id}`} className="btn btn-primary">
          Подробнее
        </a>
        {user && user.id === route.user_ID ? (
          <>
            <button
              type="button"
              className="btn btn-danger js-btn-remove"
              style={{ marginLeft: '10px' }}
            >
              Удалить
            </button>
            <button
              type="button"
              className="btn btn-warning js-btn-remove"
              style={{ marginLeft: '10px' }}
            >
              <a href={`/routes/update/${route.id}`}>Изменить</a>
            </button>
          </>
        ) : (
          ''
        )}
      </div> */}
    </div>
  );
}

module.exports = RouteCard;
