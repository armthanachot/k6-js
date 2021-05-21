/*
 * Copyright (C) 2020 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */
import * as bcrypt from "bcrypt"
const responseMessages = (code, message, data?: any) => {
    return { code, message, data }
  }
const internalResponse = (status, message, data?: any) => {
  return { status, message, data }
}
const findOne = async (object) => {
  return await object[0] || {};
}

const passwodEncrypt = async(password)=>{
  const encrypted = await bcrypt.hash(password,10)
  return encrypted
}

const schemaValidator = async (data, schema) => {
  try {
    const validated = await schema.validateAsync(data)
    return validated
  } catch (error) {
    return error
  }
}
export {responseMessages,internalResponse,findOne,passwodEncrypt,schemaValidator}