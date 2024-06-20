import { type Request, type Response } from 'express';
import { type cFunction } from '@Shared/interfaces/controller.interfaces';
import { CommonResponse } from './CommonResponse';
import { SUCCESS } from '@Shared/constant/enums/messageHttp';
import { CommonError } from './CommonError';

export class CommonController {
  mount = (controller: cFunction) => async (req: Request, res: Response) => {
    // Run the controller (callback)
    await controller(req, res)
      .then((payload: { data: unknown; messageKey: string }) => {
        // Build response
        const rObject = new CommonResponse(
          payload?.data,
          payload?.messageKey ?? SUCCESS
        );

        // Send response
        res.status(rObject.code).send(rObject.build());
      })
      .catch((error) => {
        // Build response
        const rObject = new CommonError(error);

        // Send response
        res.status(rObject.code).send(rObject.build());
      });
  };
}
