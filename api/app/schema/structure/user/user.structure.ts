import * as joi from "joi"
import {TYPE} from "../../../constants/user"
const CREATE = joi.object({
    username:joi.string().required(),
    password:joi.string().min(8).required(),
    email:joi.string().required(),
    fullName:joi.string().required(),
    type:joi.string().valid(...Object.values(TYPE)).required()
})

export {
    CREATE
}