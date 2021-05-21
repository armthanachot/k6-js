/*
 * Copyright (C) 2021 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */



export interface UserRepositoryInterface {
  findAll(): any
  create(users): any
  logging(item: string, uAgent: object): any

}
