
///send email
export const sendEmail = async (req,res) => {


  try {

    console.log("email sent")

  } catch (e) {
    res.status(404).json({ message: error.message });
  }
}
