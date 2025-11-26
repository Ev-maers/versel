// Arquivo: api/hello.js

export default function handler(req, res) {
  // 1. Pegamos a data atual do servidor para provar que é dinâmico
  const dataServidor = new Date().toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
  });

  // 2. Respondemos com status 200 (OK) e um JSON
  return res.status(200).json({
    projeto: "Origens\n",
    status: "Online 🟢\n",
    mensagem: "Esta resposta veio do servidor da Vercel!",
    horario_brasil: dataServidor,
  });
}
