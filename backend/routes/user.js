var express = require('express');
var app = express.Router();

const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/signup', async (req, res) => {
    const userData = req.body;
    bcrypt.hash(userData.password, 10, async (err, hash) => {
        if (err) {
            return res.status(500).send("Error hashing password");
        }
        userData.password = hash;
        try {
            const user = new users(userData);
            const result = await user.save();
            res.send({ message: "signup success" ,success:true});
        } catch (error) {
            res.status(500).send({message: "Error saving user" , success:false});
        }
    });
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await users.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: 'User not found', success: false });
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (err) {
                return res.status(500).json({ message: 'Password comparison error', success: false });
            }
            if (result) {
                res.json({ message: 'Login successful', success: true });
            } else {
                res.status(401).json({ message: 'Invalid password', success: false });
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error finding the user', success: false });
    }
});

module.exports = app;