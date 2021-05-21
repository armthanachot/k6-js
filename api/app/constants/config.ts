/*
 * Copyright (C) 2020 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

const APIURL = "/api/v1"
const SECRET_KEY = "TVQperYbLDxGubO"
const FILE_PATH = "./app/files"
const MAIL_SERVICE = "gmail"
const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWxsa29ub25lIiwiaWF0IjoxNjE1Nzk2ODYwfQ.P-7OKPiXy43fJQewTkL95EuGHplh_O1rdohAbzxn4xw"
const SUBJECT = "MAIL SERVER"
const ADMIN_EMAIL = "armthtj1@gmail.com"
const ERRMSG = {
  AUTH:{
    TOKEN_EXPIRED:"TOKEN EXPIRED",
    INVALID_TOKEN:"INVALID TOKEN"
  },
  MAIL:{
    SENDING:"ERROR SENDING MAIL"
  }
}
export {
    APIURL,
    SECRET_KEY,
    FILE_PATH,
    MAIL_SERVICE,
    BEARER_TOKEN,
    SUBJECT,
    ADMIN_EMAIL,
    ERRMSG
}
