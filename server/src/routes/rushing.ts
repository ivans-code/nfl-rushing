import { NextFunction, Response, Request, Router } from "express";

export class RushingRouter {

  private static rushingRouter: RushingRouter;

  public static create(router: Router) {
    if (!RushingRouter.rushingRouter) {
      RushingRouter.rushingRouter = new RushingRouter(router);
    }
  }

  private constructor(router) {
    // TODO define endpoints
  }

  // TODO define functionality

}
