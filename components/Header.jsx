const React = require('react');

module.exports = function Header({ user }) {
  let contentNavBar;

  if (user) {
    contentNavBar = (
      <>
        <div className="nav-item nav-link">{`Привет, ${user.name}!`}</div>
        <a href="/profile" className="btn btn-info">
          Профиль
        </a>
        <a className="btn btn-outline-secondary" href="/auth/logout">
          Выйти
        </a>
      </>
    );
  } else {
    contentNavBar = (
      <>
        <a className="btn btn-sm btn-outline-primary" href="/auth/register">
          Регистрация
        </a>
        <a className="btn btn-sm btn-outline-primary" href="/auth/login">
          Авторизация
        </a>
      </>
    );
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light  justify-content-between">
        <div className="container">
          <a className="navbar-brand" href="/">
            Таков Путь 🚲
          </a>
          <div className="navbar-nav">{contentNavBar}</div>
        </div>
      </nav>
    </header>
  );
};
