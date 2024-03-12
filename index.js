document.addEventListener("DOMContentLoaded", function () {
  // Selecciona el botón de descarga
  const downloadButton = document.querySelector('.download-button');

  // Agrega un evento de clic al botón
  downloadButton.addEventListener('click', function () {
      // Crea un enlace temporal
      const link = document.createElement('a');

      // Establece la URL del archivo a descargar
      link.href = 'CV.pdf'; // Ajusta el nombre del archivo según sea necesario
      link.download = 'CV Carlos López Martínez.pdf'; // Ajusta el nombre del archivo de descarga

      // Simula un clic en el enlace
      link.click();
  });

  // Selecciona el botón de descarga
  const downloadPrintButton = document.querySelector('.download-print-button');

  // Agrega un evento de clic al botón
  downloadPrintButton.addEventListener('click', function () {
      // Crea un enlace temporal
      const link = document.createElement('a');

      // Establece la URL del archivo a descargar
      link.href = 'CV_Print.pdf'; // Ajusta el nombre del archivo según sea necesario
      link.download = 'CV Impresión Carlos López Martínez.pdf'; // Ajusta el nombre del archivo de descarga

      // Simula un clic en el enlace
      link.click();
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const downloadButton = document.querySelector('.view-button');

  downloadButton.addEventListener('click', function () {
      const link = document.createElement('a');
      link.href = 'CV.pdf';
      link.target = '_blank'; // Abre en una nueva ventana/tabla
      link.click();
  });
});