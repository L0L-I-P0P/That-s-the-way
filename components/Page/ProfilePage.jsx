// Во всех компонентах должен быть подключен React
const React = require('react');

const Layout = require('../Layout');
// const AddRouteForm = require('../AddRouteForm');
const RoutesContainer = require('../RoutesContainer');

// Реакт-компонент =  фунция с большой буквы, возвращает JSX-верстку, принимает
// параметром объект props

function ProfilePage({ title, user, routes }) {
  return (
    <Layout title={title} user={user}>
      {/* <AddRouteForm /> */}
      <RoutesContainer routes={routes} user={user} />
      <script defer src="/js/add.js" />
    </Layout>
  );
}

module.exports = ProfilePage;
