const QRCode = require('qrcode');

const generateQRCode = async (text) => {
  try {
    const url = await QRCode.toDataURL(text);
    console.log('QR Code gerado com sucesso!');
    console.log(url); // Imprime a URL base64 do QR Code
  } catch (err) {
    console.error('Erro ao gerar QR Code:', err);
  }
};

// Chame a função passando o texto que deseja codificar
generateQRCode('https://seusite.com');
