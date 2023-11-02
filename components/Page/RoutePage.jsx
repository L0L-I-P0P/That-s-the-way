const React = require('react');
const Layout = require('../Layout');

function RoutePage({ route, title, user }) {
  return (
    <Layout title={title} user={user}>
      <div
      className="card js-card"
      data-id={route.id}
    >
      <div id="map" className="ya-map"></div>
      <div className="card-body">
        <h5 className="card-title">{route.title}</h5>
        <p className="card-text">{route.description}</p>
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
      </div>
    </div>
    </Layout>
  );
}

module.exports = RoutePage;
