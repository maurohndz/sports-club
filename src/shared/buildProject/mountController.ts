import {
  type cFunction,
  type controller
} from '@Shared/interfaces/controller.interfaces';

function mountC(controller: controller): cFunction {
  return controller.run;
}

export default mountC;
