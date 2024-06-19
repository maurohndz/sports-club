import { type Request, type Response } from 'express';
import { type cFunction } from '@Shared/interfaces/controller.interfaces';
import { CommonResponse } from './CommonResponse';
import { SUCCESS } from '@Shared/constant/enums/messageHttp';

export class CommonController {
  mount = (controller: cFunction) => async (req: Request, res: Response) => {
    await controller(req, res)
      .then((payload: { data: unknown; messageKey: string }) => {
        const rObject = new CommonResponse(
          payload?.data,
          payload?.messageKey ?? SUCCESS
        );

        res.status(rObject.code).send(rObject.build());
      })
      .catch((error) => {
        res.send(error);
      });
  };
}
