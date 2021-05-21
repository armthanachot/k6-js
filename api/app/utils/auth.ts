/*
 * Copyright (C) 2020 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

"use strict"

import * as jwt from 'jsonwebtoken'
import {SECRET_KEY} from '../constants/config'

const genToken = async(username)=>{
    const token = await jwt.sign({user:username},SECRET_KEY)
    return token
}

export {
    genToken
}