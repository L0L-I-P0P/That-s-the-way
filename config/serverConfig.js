const express = require('express');
const path = require('path');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');


const ssr = require('../middleware/ssr');

const serverConfig = (app) => {
  //Чтобы у объекта req и res появился метод coo
  app.use(cookieParser());
  //нужен для парсинга форм
  app.use(express.urlencoded({ extended: true }));
  //парсим JSON
  app.use(express.json());
  // подключаем статические файлы
  app.use(express.static(path.join(`${__dirname}`, '../public')));
  // Подключаем middleware morgan с режимом логирования "dev", чтобы для каждого HTTP-запроса на
  // сервер в консоль выводилась информация об этом запросе.
  app.use(morgan('dev'));
  //подключение ssr
  app.use(ssr);
};

module.exports = serverConfig;
