// Во всех компонентах должен быть подключен React
const React = require('react');

const RouteCard = require('./RouteCard');
const Raiting = require('./Raiting');

// Реакт-компонент =  фунция с большой буквы, возвращает JSX-верстку, принимает
// параметром объект props

function RoutesContainer({ routes, user }) {
  return (
    <div className="js-route-container route-container">
      {routes.map((route) => (
        <RouteCard route={route} user={user} />
      ))}
    </div>
  );
}

module.exports = RoutesContainer;
