import { EntityManager, IDatabaseDriver, Connection } from "@mikro-orm/core";
import { Request, Response } from "express";
// import session from "express-session";

export type MyContext = {
  em: EntityManager & EntityManager<IDatabaseDriver<Connection>>;
  req: Request;
  res: Response;
};

declare module "express-session" {
  export interface SessionData {
    userId: number;
  }
}
