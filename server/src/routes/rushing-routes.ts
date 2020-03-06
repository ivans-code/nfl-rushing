import { NextFunction, Response, Request, Router } from 'express';
import { Query } from 'mongoose';
import { PlayerRushStats } from '../models/player-rush-stats';
import { rushingValidator } from '../middlewares/query_validation/rushing-validator';
import { RushingQueryBuilder } from '../requests/rushing-request';


export class RushingRouter {

  private static rushingRouter: RushingRouter;

  public static create(router: Router) {
    if (!RushingRouter.rushingRouter) {
      RushingRouter.rushingRouter = new RushingRouter(router);
    }
  }

  private constructor(router: Router) {

    router.get('/rushing', rushingValidator, (req: Request, res: Response, next: NextFunction) => {
      this.getPlayerRushingStats(req, res, next);
    });

    router.get('/rushing/:id([0-9a-f]{24})', (req: Request, res: Response, next: NextFunction) => {
      this.getPlayerRushingStatsById(req, res, next);
    });

    // Ideally, Autocomplete would be a different service in another container
    router.get('/autocomplete', (req: Request, res: Response, next: NextFunction) => {
      this.getPlayerNameAutocomplete(req, res, next);
    });

  }

  public getPlayerRushingStats(req: Request, res: Response, next: NextFunction) {
    const rushingQuery = new RushingQueryBuilder()
      .setSort(req.query.sort).setFilter(req.query.filter).build();

    PlayerRushStats.find(rushingQuery.filter, null, rushingQuery.options, (err, players) => {
      if (err) {
        next(err);
      } else {
        res.send(players);
      }
    });
  }

  public getPlayerRushingStatsById(req: Request, res: Response, next: NextFunction) {
    const id = req.params.id;

    PlayerRushStats.findById(id, (err, player) => {
      if (err) {
        next(err);
      } else {
        res.send(player);
      }
    });
  }

  public getPlayerNameAutocomplete(req: Request, res: Response, next: NextFunction) {
    const rushingQuery = new RushingQueryBuilder().setFilter(req.query.filter).build();

    PlayerRushStats.find(rushingQuery.filter, 'Player Team', rushingQuery.options, (err, players) => {
      if (err) {
        next(err);
      } else {
        res.send(players);
      }
    });
  }

}
