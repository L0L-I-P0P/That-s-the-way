const React = require('react');
const Layout = require('../Layout');

module.exports = function MainPage({ title, user, route }) {
  return (
    <Layout title={title} user={user}>
      <p>здесь будут карточки</p>
    </Layout>
  );
};
