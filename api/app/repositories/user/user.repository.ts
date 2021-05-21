/*
 * Copyright (C) 2020 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

"use strict";

/** INTERFACE */
import { UserRepositoryInterface } from "../interfaces/user.interface";

/** CONSTANTS|UTILS */
import { passwodEncrypt,internalResponse } from "../../utils/app";

import * as model from "../../models/user/user.model"

export class UserRepository implements UserRepositoryInterface {
  public async findAll(){
    const users = await model.findAll()
    return users
  }
  public async create(users){
    const data = []
    await Promise.all(
      users.map(async (item)=>{
        item.password = await passwodEncrypt(item.password)
        return data.push(Object.values(item))
      })
    )
    const created = await model.create(data)
    if(!created.affectedRows) return internalResponse(false,"FAILED TO CREATE")
    return internalResponse(true,"OK")
  }
  public async logging(payload, uAgent) {
    const logged =  await  model.logging(payload, uAgent)
    return internalResponse(true, "OK")
  }
}
