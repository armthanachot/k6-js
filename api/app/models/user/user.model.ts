import db from "../../../config/db_connection"

const findAll = async()=>{
    const result = await db.query('SELECT username,email,fullName,type FROM user')
    return result
}

const create = async (users) => {
    const result = await db.query(`INSERT INTO user(username,password,email,fullName,type) VALUES ?`,[users])
    return result
}

const logging=async(payload,uAgent)=>{
    const result = await db.query(`INSERT INTO user_log(payload,ip,endpoint,headers,user_agent) VALUES (?,?,?,?,?)`,[payload, uAgent.ip, uAgent.endpoint, uAgent.headers, uAgent.user_agent])
    return result
}

export {
    findAll,
    create,
    logging
}