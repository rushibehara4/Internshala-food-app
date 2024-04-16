const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const Registeruser = require("./model");
const middleware = require("./middleware")

const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use(cors({origin : "*"}))

mongoose
  .connect(
    "mongodb+srv://rushibehara:rushibehara@cluster0.jphfeiu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log(`DB Connected`));

app.post("/register", async (request, response) => {
  const {username, email, password, confirmpassword } = request.body;

  try {
    let exist = await Registeruser.findOne({ email });
    if (exist) {
      return response.status(400).send("User Already Exist");
    }

    if (password !== confirmpassword) {
      return response.status(500).send("Passwords do not match!");
    }

    const user = new Registeruser({ username, email, password, confirmpassword });
    await user.save();
    response.status(200).send("Registration Successfull");
  } catch (error) {
    return response.status(500).send({ error: error.message });
  }
});

app.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;

    let exist = await Registeruser.findOne({ email });
    if (!exist) {
      return response.status(400).send("User Not Found");
    }
    if (exist.password !== password) {
      return response.status(400).send("Invalid Credential");
    }

    let payload = {
      user: {
        id: exist.id,
      },
    };

    jwt.sign(payload, "jwtSecret", { expiresIn: 360000 }, (err, token) => {
      if (err) throw err;
      response.json({ token });
    });
  } catch (error) {
    return response.status(500).send(error);
  }
});

app.get("/",middleware, async(request, response) => {
    try {
        let exist = await Registeruser.findById(request.user.id)
        if (!exist) {
            return response.status(400).send("User not found")
        }
        response.json(exist)
    }catch(error) {
        console.log(error)
        return response.status(500).send({error: error.message})
    }
})

app.listen(PORT, 'localhost', () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
