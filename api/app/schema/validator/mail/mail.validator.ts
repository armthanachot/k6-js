import {schemaValidator} from "../../../utils/app"
import {SENDMAIL} from "../../structure/mail/mail.structure"
const sendmail = async(sendmail_content)=>{
    const validated = await schemaValidator(sendmail_content,SENDMAIL)
    if(validated.message) return validated
    return validated
}

export {
    sendmail
}