import * as joi from "joi"

const SENDMAIL = joi.object({
    fullname:joi.string().required(),
    email:joi.string().required(),
    phone:joi.string().min(9).max(10).required(),
    clinic_name:joi.string().required(),
    description:joi.string().allow(null,"").required()
})


export {SENDMAIL}