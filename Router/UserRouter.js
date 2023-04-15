const router=require("express").Router();
const User=require("../Model/UserModel");


router.get("/register", async (req, res) => {
  try {
    const { name, email, phone, dob, codechef, leetcode } = req.body;
    console.log(req.body);

    if (!name || !email || !phone || !dob || !codechef || !leetcode) {
      return res.status(400).json("all detail are required");
    }

    // creating a new user and save it to database
    
   const newUser = new User({
      name,
      email,
      phone,
      dob,
      codechef,
      leetcode,
    });
    const savedUser = await newUser.save();
   return res.status(200).json("done")

  } 
  catch {
    return res.status(404).json("nothing happen");
  }
});
module.exports = router;
















// // register

// router.post("/register", async (req, res) => {
//   try {
//     const { name,email,phoneno , password, passwordVerify } = req.body;
//     // validation
//     if (!name||!email ||!phoneno ||!password || !passwordVerify)
//       return res
//         .status(400)
//         .json({ errorMessage: "Please enter all required fields." });

//     if (password.length < 6)
//       return res.status(400).json({
//         errorMessage: "Please enter a password of at least 6 characters.",
//       });

//     if (password !== passwordVerify)
//       return res.status(400).json({
//         errorMessage: "Please enter the same password twice.",
//       });

//     const existingUser = await User.findOne({ email });
//     if (existingUser)
//       return res.status(400).json({
//         errorMessage: "An account with this email already exists.",
//       });

//     // hash the password

//     const salt = await bcrypt.genSalt();
//     const passwordHash = await bcrypt.hash(password, salt);

//     // save a new user account to the db

//     const newUser = new User({
//       name,
//       email,
//       phoneno,
//       passwordHash,
//     });

//     const savedUser = await newUser.save();

//     // sign the token

//     const token = jwt.sign(
//       {
//         user: savedUser._id,
//       },
//       process.env.JWT_SECRET
//     );

//     // send the token in a HTTP-only cookie

//     res
//       .cookie("token", token, {
//         httpOnly: true,
//         secure: true,
//         sameSite: "none",
//       })
//       .send();
//       var transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'info.xtrimcoder@gmail.com',
//           pass: 'xftqqyoquxloqkkl'
//         }
//       });
//       var mailOptions = {
//         from: 'info.xtrimcoder@gmail.com',
//         to: email,
//         subject: 'XtrimCoder (Unleash your Extrime Programmer) Registration Successfully',
//         text: `Dear ${name},
// Congratulations,Wellcome To Our Family of Extrime's
// Your registration was successful!
// Thanks, For Giving Us this opportunity to play a crucial role in Your Life
// In case of any queries, feel free to contact us at info.xtrimcoder@gmail.com
// Best Regards,
// Team XtrimCoder`
//         // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'
//       };
//       transporter.sendMail(mailOptions, function(error, info){
//         if (error) {
//           console.log(error);
//         } else {
//           // res.send(curotp);
//           // console.log('Email sent: ' + info.response);
//         }
//       });

//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Successfully Registered");
//   }
// });

// // log in

// router.post("/login", async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     // validate
//     if (!email || !password)
//       return res
//         .status(400)
//         .json({ errorMessage: "Please enter all required fields." });

//     const existingUser = await User.findOne({ email });
//     if (!existingUser)
//       return res.status(401).json({ errorMessage: "Wrong email or password." });

//     const passwordCorrect = await bcrypt.compare(
//       password,
//       existingUser.passwordHash
//     );
//     if (!passwordCorrect)
//       return res.status(401).json({ errorMessage: "Wrong email or password." });

//     // sign the token

//     const token = jwt.sign(
//       {
//         user: existingUser._id,
//       },
//       process.env.JWT_SECRET
//     );

//     // send the token in a HTTP-only cookie

//     res
//       .cookie("token", token, {
//         httpOnly: true,
//         secure: true,
//         sameSite: "none",
//       })
//       .send();
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Login Succesfull");
//   }
// });

// router.get("/logout", (req, res) => {
//   res
//     .cookie("token", "", {
//       httpOnly: true,
//       expires: new Date(0),
//       secure: true,
//       sameSite: "none",
//     })
//     .send();
// });

// router.get("/loggedIn", (req, res) => {
//   try {
//     const token = req.cookies.token;
//     if (!token) return res.json(false);
//     jwt.verify(token, process.env.JWT_SECRET);
//     res.send(true);
//   } catch (err) {
//     res.json(false);
//   }
// });

// router.get("/getusername", async(req, res) => {

//   try {
//     const token = req.cookies.token;
//     if (!token) return res.json(false);
//     jwt.verify(token, process.env.JWT_SECRET);
//     var decoded = jwt_decode(token);
//      const usname= await User.findById(decoded.user);
//     // console.log(usname.name);
//      res.send(usname.name);
//   } catch (err) {
//     res.json(false);
//   }
// });

// function generateOTP() {

//   var digits = '0123456789';
//   let OTP = '';
//   for (let i = 0; i < 4; i++ ) {
//       OTP += digits[Math.floor(Math.random() * 10)];
//   }
//   return OTP;
// }

// router.post("/getotp", async(req, res) => {
//   try {
//     const {email} = req.body;
//     var transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'info.xtrimcoder@gmail.com',
//         pass: 'xftqqyoquxloqkkl'
//       }
//     });
//     var curotp=generateOTP();
//     var mailOptions = {
//       from: 'info.xtrimcoder@gmail.com',
//       to: email,
//       subject: 'XtrimCoder (Unleash your Extrime Programmer) One Time Password OTP ',
//       text: `Your verification code for  XtrimCoder (Unleash your Extrime Programmer) is : ${curotp}\n
// In case of any queries, feel free to contact us at info.xtrimcoder@gmail.com\n
// Best Regards,\n
// Team XtrimCoder\n `
//       // html: '<h1>Hi Smartherd</h1><p>Your Messsage</p>'
//     };
//     transporter.sendMail(mailOptions, function(error, info){
//       if (error) {
//         console.log(error);
//       } else {
//         res.send(curotp);
//         // console.log('Email sent: ' + info.response);
//       }
//     });
//   } catch (err) {
//     res.json(false);
//   }
// });

// module.exports = router;
