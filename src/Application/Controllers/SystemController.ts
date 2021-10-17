import { clear } from 'console';
import { Request, Response } from 'express';
import status from "http-status-codes";
import { UsecaseRequest } from '../Ports/Base/IUseCaseBase';
import { GetSystemInformationUseCase } from '../UseCases/System/GetSystemInformationUseCase';

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

    public async GetSystemInformation(request: Request, response: Response): Promise<any> {
    
        const result = await new GetSystemInformationUseCase().ExecuteAsync();
        return response.status(status.OK).json(result);
    }
}