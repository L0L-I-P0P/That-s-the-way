const React = require('react');
const Layout = require('../Layout');

module.exports = function RegisterForm({ user, title }) {
  return (
    <Layout title={title} user={user}>
      <form style={{ marginTop: '30px' }} id="register-form">
        <h2>Регистрация</h2>
        <div className="mb-1">
          <label className="form-label">
            Имя
            <input type="text" className="form-control" name="name" />
          </label>
        </div>
        <div className="mb-1">
          <label className="form-label">
            Email
            <input type="email" className="form-control" name="email" />
          </label>
        </div>
        <div className="mb-1">
          <label className="form-label">
            Пароль
            <input type="password" className="form-control" name="password" />
          </label>
        </div>
        <div id="error-message" />
        <button type="submit" className="btn btn-outline-warning">
          Зарегистрироваться
        </button>
      </form>
      <script defer src="/js/register.js" />
    </Layout>
  );
};
