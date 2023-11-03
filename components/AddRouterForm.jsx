const React = require('react');

module.exports = function AddRouteForm() {
  return (
    <>
      <h3>Добавь новый маршрут 🚲</h3>
      <form className="js-add-form" action="/api/routes/" method="POST">
        <div className="mb-3">
          <label className="form-label">
            Название маршрута:
            <input type="text" className="form-control" name="title" />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Описание:
            <input type="text" className="form-control" name="description" />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Населеный пункт:
            <input type="text" className="form-control" name="place" />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Начало маршрута:
            <input type="text" className="form-control" name="route_from" />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Конечный адрес маршрута:
            <input type="text" className="form-control" name="route_to" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Добавить ✅
        </button>
      </form>
    </>
  );
};
