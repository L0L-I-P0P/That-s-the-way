// Во всех компонентах должен быть подключен React
const React = require('react');

const Layout = require('../Layout');
const AddRouteForm = require('../AddRouterForm');
const RoutesContainer = require('../RoutesContainer');

// Реакт-компонент =  фунция с большой буквы, возвращает JSX-верстку, принимает
// параметром объект props

function ProfilePage({ title, user, routes }) {
  return (
    <Layout title={title} user={user}>
      <div className="container-profile">
        <div className="route-container">
          <RoutesContainer routes={routes} user={user} />
        </div>
        <div className="update-container">
          <AddRouteForm />
        </div>
        <script defer src="/js/add.js" />
      </div>
    </Layout>
  );
}

module.exports = ProfilePage;
