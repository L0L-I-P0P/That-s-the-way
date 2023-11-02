const React = require('react');
const Layout = require('../Layout');

module.exports = function LoginForm({ user, title, registered }) {
  return (
    <Layout title={title} user={user}>
      <form style={{ marginTop: '30px' }} id="login-form">
        {registered ? (
          <>Пользователь {registered} успешно зарегистрирован</>
        ) : (
          ''
        )}
        <h2>Вход</h2>
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
          Войти
        </button>
      </form>
      <script defer src="/js/login.js" />
    </Layout>
  );
};
