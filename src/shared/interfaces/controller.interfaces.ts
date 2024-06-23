// External
import { type Request, type Response } from 'express';

export type cFunction = (req: Request, res: Response) => Promise<unknown>;

export interface controller {
  run: cFunction;
}
