import authModel from "../models/authModel.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
class authController {
    static userRegistration = async (req, resp) => {

        const { username, email, password } = req.body
        try {
            if (username && email && password) {
                const isUser = await authModel.findOne({ email })
                if (!isUser) {
                    const hashedPassword = await bcrypt.hash(password, 10)
                    const newUser = new authModel({ username, email, password: hashedPassword })
                    const result = await newUser.save()
                    
                } else {
                    resp.json("User already exists")
                }
            } else {
                resp.json("all fields required")
            }

        } catch (error) {
            resp.json({ msg: "Error 404" })
        }
    }
    static userLogin = async (req, resp) => {
        try {
            const { email, password } = req.body
            if ( email && password) {
                const isEmail = await authModel.findOne({ email })
                if (isEmail) {
                    if (isEmail.email === email && await bcrypt.compare(password, isEmail.password)) {
                        const token = jwt.sign({ userId: isEmail._id }, "secret")
                        resp.json({ msg: "Logged In successfully", token, name: isEmail.username })

                    }
                } else {
                    resp.json("Email not found")
                }
            } else {
                resp.json("All fields are required")
            }

        } catch (error) {
            resp.json({ msg: "Error 4042" })

        }

    }
}
export default authController