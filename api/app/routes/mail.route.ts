/*
 * Copyright (C) 2021 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

"use strict"

import {sendMail} from "../controllers/mail/mail.controller"
import {validateBearer} from "../middlewares/authentication"

export default (prefix,app)=>{
    app.route(`${prefix}`).post([validateBearer],sendMail)
}