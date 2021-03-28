
///send email
export const sendEmail = async (req,res) => {


  try {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
      to: '25mordad@gmail.com',
      from: 'aalinoosh@gmail.com',
      subject: 'Email : ' ,
      html: 'Hi',
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
