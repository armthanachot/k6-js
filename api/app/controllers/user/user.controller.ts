import { UserRepository } from "../../repositories/user/user.repository"
const userRepo = new UserRepository()
import * as schema from "../../schema/validator/user/user.validator"
const findAll = async(req,res)=>{
    try {
        const users = await userRepo.findAll()
        return res.status(200).json({
            data:users
        })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "INTERNAL SERVER ERROR" })

    }
}
const create = async (req, res) => {
    try {
        const { data: users } = req.body
        const uAgent = {
            ip: req.ip,
            headers: JSON.stringify(req.headers),
            user_agent: req.get("user-agent"),
            endpoint: req.path
        }
        await userRepo.logging(JSON.stringify(users), uAgent)
        const validated = await schema.createUser(users)
        if (validated.message) return res.status(422).json({ message: validated.message })
        const created = await userRepo.create(users)
        if (!created.status) return res.status(400).json({ message: created.message })
        return res.status(200).json({ message: "OK" })
    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "INTERNAL SERVER ERROR" })
    }
}

export {
    findAll,
    create
}