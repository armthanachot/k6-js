/*
 * Copyright (C) 2021 Depwhite Software
 *
 * This file is part of the Depwhite Software project.
 *
 * Depwhite Software project can not be copied and/or distributed without the express
 */

"use strict";
import { getReasonPhrase, StatusCodes } from "http-status-codes";

/**
 * REPOSITORY
 */
import { MailRepository } from "../../repositories/mail/mail.repository";
const mailRepo = new MailRepository();

/**
 *
 * UTILS
 */
import { responseMessages } from "../../utils/app";

/**
 *
 * SCHEMA
 */
import {sendmail} from "../../schema/validator/mail/mail.validator"

const sendMail = async (req, res) => {
  try {
    const mail_content = req.body;
    const validated = await sendmail(mail_content)
    if (validated.message) return res.status(StatusCodes.BAD_REQUEST).json(await responseMessages(StatusCodes.BAD_REQUEST, validated.message))
    const sent = await mailRepo.sendMail(mail_content);
    if (!sent.status)
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json(responseMessages(StatusCodes.BAD_REQUEST, sent.message));
    return res
      .status(StatusCodes.OK)
      .json(responseMessages(StatusCodes.OK, getReasonPhrase(StatusCodes.OK)));
  } catch (error) {
    console.log(error);
  }
};
export { sendMail };
