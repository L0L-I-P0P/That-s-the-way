const React = require('react');
const Layout = require('../Layout');
const RoutesContainer = require('../RoutesContainer');

module.exports = function MainPage({ title, user, routes }) {
  return (
    <Layout title={title}>
      <RoutesContainer routes={routes} user={user} />
      <p>здесь будут карточки</p>
    </Layout>
  );
};
