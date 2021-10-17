import { SystemController } from "../Controllers/SystemController"
import { Router } from "express";
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