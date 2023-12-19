const nodemailer = require("nodemailer");

export default function sendEmail(req, res) {
  if (!req.body) {
    res.status(404).json({ name: "404 Página não existe." });
  } else {
    let transporter = nodemailer.createTransport({
      name: "no-reply@clinicakarencampos.com.br",
      host: "mail.clinicakarencampos.com.br",
      service: "mail.clinicakarencampos.com.br",
      port: 465,
      secure: true,
      auth: {
        user: "contato@clinicakarencampos.com.br",
        pass: "Contato2022##@#",
      },
    });
    transporter
      .sendMail({
        from: `"Formulário Contato Site" <contato@clinicakarencampos.com.br>`,
        to: "contato@clinicakarencampos.com.br",
        replyTo: req.body.email,
        subject: `${req.body.nome} entrou em contato pelo site`,
        text: req.body.mensagem,
        html: `
        	<p>De: ${req.body.nome}</p>
        	<p>Telefone: ${req.body.telefone}</p>
        	<p>E-mail: ${req.body.email}</p>
          <p>Assunto: ${req.body.assunto}</p>
          <p>Mensagem: </p>
			    <p>${req.body.mensagem}</p>
        	<br>
          Contato enviado via clinicakarencampos.com.br
        `,
      })
      .then((response) => {
        res.send(response);
      })
      .catch((error) => {
        res.send(error);
      });
  }
}
