// Во всех компонентах должен быть подключен React
const React = require('react');
const Layout = require('../Layout');

function UpdateRoutePage({ title, user, route }) {
  return (
    <Layout title={title} user={user}>
      <h3>Изменить маршрут</h3>
      <form className="js-update-form" data-id={route.id}>
        <div className="mb-3">
          <label className="form-label">
            Название маршрута:
            <input
              type="text"
              className="form-control"
              name="title"
              value={route.title}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Описание:
            <input
              type="text"
              className="form-control"
              name="description"
              value={route.description}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Населенный пункт:
            <input
              type="text"
              className="form-control"
              name="place"
              value={route.place}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Начало маршрута:
            <input
              type="text"
              className="form-control"
              name="route_from"
              value={route.route_from}
            />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Конечный адрес маршрута:
            <input
              type="text"
              className="form-control"
              name="route_to"
              value={route.route_to}
            />
          </label>
        </div>

        <button type="submit" className="btn btn-primary">
          Сохранить
        </button>
      </form>
      <script defer src="/js/update.js" />
    </Layout>
  );
}

module.exports = UpdateRoutePage;
