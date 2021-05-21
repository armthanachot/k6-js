/*
 * Copyright (C) 2021 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

import { StatusCodes,getReasonPhrase } from "http-status-codes"
/**
 *
 * UTILS|CONSTANTS
 */
import {responseMessages } from "../../app/utils/app"
import {ERRMSG,BEARER_TOKEN} from '../constants/config'

const validateBearer = async (req, res, next) => {
  try {
    const authorization = req.headers.authorization
    if(!authorization){
      return res.status(StatusCodes.BAD_REQUEST).json(responseMessages(StatusCodes.BAD_REQUEST, getReasonPhrase(StatusCodes.BAD_REQUEST)))
    }
    const bearer = authorization.split(" ")[1]
    if(bearer !== BEARER_TOKEN){
        return res.status(StatusCodes.BAD_REQUEST).json(responseMessages(StatusCodes.BAD_REQUEST,ERRMSG.AUTH.INVALID_TOKEN))
    }
    return next()
  } catch (error) {
    console.log(error)
    return res.status(StatusCodes.FORBIDDEN)
  }
}

export {  validateBearer }
