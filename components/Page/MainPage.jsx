const React = require('react');
const Layout = require('../Layout');
const RoutesContainer = require('../RoutesContainer');
const { Rating } = require('../../db/models');

module.exports = function MainPage({ title, user, routes }) {

  return (
    <Layout title={title} user={user}>
      <RoutesContainer
        routes={routes}
        user={user}
      />
    </Layout>
  );
};
