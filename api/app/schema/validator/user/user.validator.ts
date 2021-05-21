import { schemaValidator } from "../../../utils/app"
import { CREATE } from "../../structure/user/user.structure"
import { SCHEMA } from "../../../constants/err_msg"
const createUser = async (users) => {
    if (!users || !Array.isArray(users)) return { message: SCHEMA.REQUIRE }
    let validated
    for (const i of users) {
        validated = await schemaValidator(i, CREATE)
        if (validated.message) return validated
    }
    return validated
}

export {
    createUser
}