/*
 * Copyright (C) 2020 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

import * as express from "express"
import * as bodyParser from "body-parser"
import { APP } from "./env/production"
/**
 * ROUTER
 */
import router from "../app/routes/index.route"

class App {
  public express: express.Application
  constructor() {
    this.express = express()
    this.express.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Methods','POST, GET, PUT, DELETE')
      res.header('Access-Control-Allow-Headers','Content-Type, Option, Authorization')
      next()
      })
    this.setup()
    this.mountRoutes()
  }

  private mountRoutes(): void {
    router(this.express)
  }

  private setup(): void {
    /**
     * Setting application local variables
     */
    this.express.locals.title = APP.title
    this.express.locals.description = APP.description
    this.express.locals.keywords = APP.keywords

    // let express support JSON bodies
    this.express.use(bodyParser.json())
  }
}

export default new App().express
