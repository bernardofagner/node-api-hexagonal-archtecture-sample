import { clear } from 'console';
import { Request, Response } from 'express';
import status from "http-status-codes";
import { UsecaseRequest } from '../Application/Ports/Base/IUseCaseBase';
import { GetSystemInformationUseCase } from '../Application/UseCases/System/GetSystemInformationUseCase';

export class SystemController {

    //#region UseCases
    //#endregion
    
    //#region Constructor
    //Implementar injecao de dependencia aqui depois
    // constructor(getSystemInformationUseCase: IGetSystemInformationUseCase) {
    //     this.GetSystemInformationUseCase = getSystemInformationUseCase;
    // }
    constructor() { }
    //#endregion

    //#region Métodos públicos
    public async GetSystemInformation(request: Request, response: Response): Promise<any> {

        const useCaseRequest = new UsecaseRequest({
            Data: request
        });

        try {
            const result = await new GetSystemInformationUseCase().ExecuteAsync(useCaseRequest);
            return response.status(status.OK).json(result);
        }
        catch (Exception) {clear
            response.status(status.INTERNAL_SERVER_ERROR).json(Exception);
        }
    }
    //#endregion
}