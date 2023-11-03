const React = require('react');
const Header = require('./Header');
const Footer = require('./Footer');

module.exports = function Layout({ children, title, user }) {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <script
          defer
          src="https://api-maps.yandex.ru/2.1/?apikey=151e3c4e-5b24-4ff4-b3dd-ee46a27a6498&lang=ru_RU"
          type="text/javascript"
        />
        <script defer src="/js/yandexMap.js" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
        <script defer src="/js/raiting.js" />
        <script defer src="/js/remove.js" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <Header user={user} />
      <body>{children}</body>
      <Footer />
    </html>
  );
};
