import { SystemController } from "../Controllers/SystemController"
import { Request, Response, Router } from "express";
export class ApplicationRouter {

    //#region Propriedades
    private systemControllerRouter = Router();
    //#endregion

    //#region Construtor
    constructor(private systemController: SystemController) {
        this.setSystemControllerRoutes();
    }
    //#endregion

    //#region Set routes
    private setSystemControllerRoutes(): void {
        this.systemControllerRouter.get('/', this.systemController.GetSystemInformation);
    }
    //#endregion

    //#region Get Routes
    public getSystemControllerRoutes(): Router {
        return this.systemControllerRouter;
    }
    //#endregion
}

export const asyncHandler = (fn: any) => (req: Request, res: Response, next: any) => {
    return Promise
        .resolve(fn(req, res, next))
        .catch(next);
};