<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];
  
  // Aquí puedes realizar las acciones necesarias con los datos del formulario,
  // como enviar un correo electrónico, guardar los datos en una base de datos, etc.
  
  // Por ejemplo, simplemente mostraremos los datos en pantalla:
  echo "Nombre: $name <br>";
  echo "Email: $email <br>";
  echo "Mensaje: $message <br>";
}
?>