import { Request } from 'express';
import { StatusCodes } from 'http-status-codes';
import { HttpError } from '../libs/rest/index.js';

export interface TokenPayload {
  id: string;
  email: string;
  name: string;
}

export function getAuthenticatedUserId(req: Request): string {
  const tokenPayload = req.tokenPayload as TokenPayload | undefined;
  if (!tokenPayload?.id) {
    throw new HttpError(
      StatusCodes.UNAUTHORIZED,
      'User not authenticated',
      'AuthHelper'
    );
  }
  return tokenPayload.id;
}

export function getAuthenticatedUser(req: Request): TokenPayload {
  const tokenPayload = req.tokenPayload as TokenPayload | undefined;
  if (!tokenPayload) {
    throw new HttpError(
      StatusCodes.UNAUTHORIZED,
      'User not authenticated',
      'AuthHelper'
    );
  }
  return tokenPayload;
}

export function getOptionalUserId(req: Request): string | undefined {
  return req.tokenPayload?.id;
}
