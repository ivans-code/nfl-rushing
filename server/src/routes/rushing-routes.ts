import { NextFunction, Response, Request, Router } from 'express';
import { PlayerRushStats } from '../models/player-rush-stats';
import { rushingvalidator } from '../middlewares/query_validation/rushing-validator';
import { Query } from 'mongoose';

export class RushingRouter {

  private static rushingRouter: RushingRouter;

  public static create(router: Router) {
    if (!RushingRouter.rushingRouter) {
      RushingRouter.rushingRouter = new RushingRouter(router);
    }
  }

  private constructor(router: Router) {

    router.get('/rushing', rushingvalidator, (req: Request, res: Response, next: NextFunction) => {
      this.getPlayerRushingStats(req, res, next);
    });

    router.get('/rushing/:id([0-9a-f]{24})', (req: Request, res: Response, next: NextFunction) => {
      this.getPlayerRushingStatsById(req, res, next);
    });

  }

  public getPlayerRushingStats(req: Request, res: Response, next: NextFunction) {
    const sort: string = req.query.sort || 'Yds';
    const filter: string = req.query.filter;

    const query: Query = PlayerRushStats.find();
    query.sort({ [sort]: 'desc' });

    if (filter) {
      const filterRegex = new RegExp('\\b' + filter, 'i');
      query.where({ Player: filterRegex });
    }

    query.exec((err, players) => {
      res.send(players);
    });

  }

  public getPlayerRushingStatsById(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;

    PlayerRushStats.findById(id, (err, player) => {
      res.send(player);
    });

  }

}
