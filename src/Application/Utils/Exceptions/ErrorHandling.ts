import { Request, response, Response } from "express";
import status from "http-status-codes";

class ErrorHandling {
    public static HandleError(error: any, req: Request, res: Response, _: any): void {
        console.log('erro', error);
        response.status(status.INTERNAL_SERVER_ERROR).send(error);
    }
}

export { ErrorHandling };