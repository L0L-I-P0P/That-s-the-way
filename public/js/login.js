const form = document.querySelector('#login-form');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      if (data.success) {
        window.location.assign('/');
      } else {
        const error = document.querySelector('.js-error');
        if (error) {
          error.remove();
        }
        form.insertAdjacentHTML('afterbegin', data.errorHtml);
      }
    } catch (error) {
      console.log(error);
    }
  });
}
