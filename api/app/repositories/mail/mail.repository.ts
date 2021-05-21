/*
 * Copyright (C) 2020 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

"use strict";

/** INTERFACE */
import { MailRepositoryInterface } from "../interfaces/mail.interface";

/** CONSTANTS|UTILS */
import { ERRMSG, FILE_PATH, MAIL_SERVICE,ADMIN_EMAIL,SUBJECT } from "../../constants/config";
import { internalResponse } from "../../utils/app";
import { MAILER } from "../../../config/env/development";

/** LIBS */
import { createTransport, Transporter } from "nodemailer";

export class MailRepository implements MailRepositoryInterface {
  public async sendMail(mail_content) {
    const { fullname,email,phone,clinic_name,description } = mail_content;
    const content = `
    fullname : ${fullname}
    email : ${email}
    phone : ${phone}
    clinic name : ${clinic_name}
    description : ${description}
    `
    const transporter = createTransport({
      service: MAIL_SERVICE,
      auth: MAILER.auth,
    });

    const option:any = {
      from: MAILER.from,
      to:ADMIN_EMAIL,
      subject:SUBJECT,
      text: content
    };
    const sent = await transporter.sendMail(option);
    if(!sent) return await internalResponse(false, ERRMSG.MAIL.SENDING);
    return await internalResponse(true, "OK");
  }
}
