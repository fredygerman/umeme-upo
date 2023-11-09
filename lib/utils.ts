import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

import { responseMessages } from '@/config/messages';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getResponseMessage(data: any) {
  // check if data is an object and if  data.errors[0].extensions.code exists in data object, if it does
  // then return the message from responseMessages object, if not return the default message
  if (
    typeof data === 'object' &&
    data.errors &&
    data.errors[0].message ===
      `Value for field "email" in collection "directus_users" has to be unique.`
  ) {
    return data.errors[0].message ===
      `Value for field "email" in collection "directus_users" has to be unique.`
      ? 'An account with this email \nalready exists, please log in \nor use a different email'
      : data.errors[0].message;
  }

  if (
    typeof data === 'object' &&
    data.errors &&
    data.errors[0].extensions.code
  ) {
    // console.log(
    //   "data.errors[0].extensions.code is : ",
    //   data.errors[0].extensions.code
    // )

    if (data.errors[0].extensions.code === 'TOKEN_EXPIRED') {
      // console.log("token expired")
    }

    const errorMessage =
      responseMessages[
        data.errors[0].extensions.code as keyof typeof responseMessages
      ] || responseMessages.UNKNOWN_ERROR;
    // console.log("errorMessage is : ", errorMessage)
    return errorMessage;
  }

  // check if data. message exists in data object, if it does return it otherwise return the default message
  if (data.message) {
    // console.log("data.message is : ", data.message)
    return data.message;
  }

  return responseMessages.UNKNOWN_ERROR;
}

export function timeSince(date: Date) {
  var seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

  var interval = seconds / 31536000;

  if (interval > 1) {
    return Math.floor(interval) + ' years';
  }
  interval = seconds / 2592000;
  if (interval > 1) {
    return Math.floor(interval) + ' months';
  }
  interval = seconds / 86400;
  if (interval > 1) {
    return Math.floor(interval) + ' days';
  }
  interval = seconds / 3600;
  if (interval > 1) {
    return Math.floor(interval) + ' hours';
  }
  interval = seconds / 60;
  if (interval > 1) {
    return Math.floor(interval) + ' minutes';
  }
  return Math.floor(seconds) + ' seconds';
}
