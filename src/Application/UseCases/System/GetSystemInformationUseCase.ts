import { SystemInformation } from "../../Entities/System/SystemInformationEntity";
import { UsecaseRequest, UsecaseResponse } from "../../Ports/Base/IUseCaseBase";
import IGetSystemInformationUseCase from "../../Ports/IGetSystemInformationUseCase";

class GetSystemInformationUseCase implements IGetSystemInformationUseCase {

    public async ExecuteAsync(request: UsecaseRequest): Promise<UsecaseResponse> {

        const systemInfo = this.createSysteminformation();
        
        systemInfo.Validate();
        if (!systemInfo.IsValid) {
            console.log('Invalid entity, throw new service exception');
        }

        return new UsecaseResponse({
            Data: systemInfo
        });
    }

    private createSysteminformation(): SystemInformation {
        return new SystemInformation({
            Version: '0.0.1',
            Description: 'Web API made to be a micro service using the hexagonal archtecture'
        });
    }
}

export { GetSystemInformationUseCase };