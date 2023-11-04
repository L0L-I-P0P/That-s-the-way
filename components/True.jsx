const React = require('react');

module.exports = function True({ message, ratingRoute }) {
  return (
    <div className="js-true">
      {message} {ratingRoute}
    </div>
  );
};
