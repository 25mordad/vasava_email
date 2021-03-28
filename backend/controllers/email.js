
import sgMail from '@sendgrid/mail';

///get list
export const sendEmail = async (req,res) => {
  const { firstname, lastname , email , phone , salary , interests  } = req.body;

  console.log(firstname, lastname , email , phone , salary , interests);

  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: '25mordad@gmail.com', // Change to your recipient
      from: 'aalinoosh@gmail.com', // Change to your verified sender
      subject: 'Nueva Solicitud:  ' + firstname + ' ' + lastname,
      html:
      '<strong>Nombre:</strong> '+  firstname + '<br/> '  +
      '<strong>Apellidos:</strong> '+  lastname + '<br/> '  +
      '<strong>Email:</strong> '+  email + '<br/> '  +
      '<strong>Teléfono:</strong> '+ phone + '<br/> ' +
      '<strong>Rango Salarial:</strong> '+ salary + '<br/> ' +
      '<strong>Su interés y experiencia profesionales en:</strong> ' + interests,
    }
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent');
        res.status(200).json({"send":"true"});
      })
      .catch((error) => {
        console.error(error);
        res.status(404).json({ message: error.message });
      })


  } catch (e) {
    res.status(404).json({ message: error.message });
  }
}
