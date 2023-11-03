const React = require('react');
const Layout = require('../Layout');
const Raiting = require('../Raiting');

function RoutePage({ route, title, user, middlerating }) {
  return (
    <Layout title={title} user={user}>
      <div className="card route-page js-card" data-id={route.id}>
        <div
          id="map"
          data-from={route.route_from}
          data-to={route.route_to}
          data-city={route.place}
          className="ya-map"
        ></div>
        <div className="card-body">
          <h5 className="card-title">{route.title}</h5>
          <p className="card-text">{route.description}</p>
          <p className="card-text">{`Автор: ${route.User.name}`}</p>
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
          <Raiting route={route} user={user} middlerating={middlerating}>
            {user && user.id !== route.user_ID ? (
              <button
                type="submit"
                className="btn btn-danger js-btn-rating"
                style={{ marginLeft: '10px' }}
              >
                Оставить оценку
              </button>
            ) : (
              ''
            )}
          </Raiting>
        </div>
      </div>
    </Layout>
  );
}

module.exports = RoutePage;
