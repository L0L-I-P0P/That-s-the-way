// делегирование событие
const routesContainer = document.querySelector('.js-card ');

routesContainer.addEventListener('click', async (e) => {
  // вешаем слушатель событий на весь контейнер, но внутри проверяем:
  // на чем кликнули? если по кнопке "Удалить" - только тогда делай удаление
  if (e.target.classList.contains('js-btn-remove')) {
    const deleteBtn = e.target;

    // находим контейнер родителя
    const parentContainer = deleteBtn.closest('.js-card');

    // из дата-атрибутов забрали id факта, который будет удалятся
    const { id } = parentContainer.dataset;

    // 1. отправить запрос на сервер, чтобы удалилось из бд
    try {
      const response = await fetch(`/api/routes/${id}`, {
        method: 'DELETE',
      });

      // если успешный статус 200-299
      if (response.ok) {
        // 2. удалить карточку из дом-дерева
        parentContainer.remove();
        window.location.assign('/')
      } else {
        // если плохой статус, тогда парсим сообщение от сервера
        const data = await response.json();
        // и выводим ошибку
        alert(data.error);
      }
    } catch (error) {}
  }
});
