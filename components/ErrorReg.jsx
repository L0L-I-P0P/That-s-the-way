const React = require('react');

module.exports = function ErrorPage({ message }) {
  return <div className="js-error">{message}</div>;
};
