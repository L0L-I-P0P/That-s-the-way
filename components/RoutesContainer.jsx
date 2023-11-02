// Во всех компонентах должен быть подключен React
const React = require('react');

const RouteCard = require('./RouteCard');

// Реакт-компонент =  фунция с большой буквы, возвращает JSX-верстку, принимает
// параметром объект props

function RoutesContainer({ routes, user }) {
  return (
    <div className="js-facts-container facts-container">
      {routes.map((route) => (
        <RouteCard route={route} user={user} />
      ))}
    </div>
  );
}

module.exports = RoutesContainer;
