let login = prompt('Please, enter in system:', 'login');
let message = 'Вход отменён';

if (login == null)
{
  alert(message);
} 
else if (login == 'Админ') 
{
  pass = prompt('Enter the password:', 'passwd');
  if (pass == null)
  {
    alert(message);
  }
  else if (pass == 'Чёрный Властелин')
  {
    alert('Добро пожаловать!');
  }
    else
    {
      alert('Пароль неверен');
    }
}
  else
  {
    alert('Я вас не знаю');
  }
