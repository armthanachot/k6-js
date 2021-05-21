/*
 * Copyright (C) 2020 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

"use strict"

/**
 * Load app configurations
 */

import mailRoute from "./mail.route"
import userRoute from "./user.route"

import { APIURL } from "../constants/config"
export default (app) => {
  mailRoute(`${APIURL}/mail`, app)
  userRoute(`${APIURL}/users`, app)
}
