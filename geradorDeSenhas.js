const crypto = require('crypto');

// Função para gerar uma senha aleatória
function gerarSenhaAleatoria(tamanho = 16) {
    return crypto.randomBytes(tamanho).toString('hex').slice(0, tamanho);
}

// Função para criptografar a senha usando SHA-256
function criptografarSenha(senha) {
    return crypto.createHash('sha256').update(senha).digest('hex');
}

// Uso das funções
const senha = gerarSenhaAleatoria(12); // Gera uma senha com 12 caracteres
const senhaCriptografada = criptografarSenha(senha);

console.log("Senha Gerada:", senha);
console.log("Senha Criptografada (SHA-256):", senhaCriptografada);
