const React = require('react');

module.exports = function AddRouteForm() {
  return (
    <>
      <h3>Добавь новый маршрут👇</h3>
      <form className="js-add-form" action="/route" method="POST">
        <div className="mb-3">
          <label className="form-label">
            Название маршрута:
            <input type="text" className="form-control" name="animal" />
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
            Точка начала пути:
            <input type="text" className="form-control" name="img" />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Точка б:
            <input type="text" className="form-control" name="description" />
          </label>
        </div>
        <div className="mb-3">
          <label className="form-label">
            Населеный пункт:
            <input type="text" className="form-control" name="description" />
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Отправить 👌
        </button>
      </form>
    </>
  );
};
