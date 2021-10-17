import { Request, Response } from "express";
import { Server } from "./Application/Config/Server/Server";
import { SystemController } from "./Application/Controllers/SystemController";
import { ApplicationRouter, asyncHandler } from "./Application/Routes/ApplicationRouter";
import { ErrorHandling } from "./Application/Utils/Exceptions/ErrorHandling";

class Application {

    //#region Propriedades
    private instanciaServidor: Server;
    private app: any;
    private ApplicationRouter: ApplicationRouter;
    //#endregion

    //#region Construtor
    public constructor(servidor: Server) {
        this.instanciaServidor = servidor;
        this.app = this.instanciaServidor.createApp();
        this.app.use(this.instanciaServidor.configureJsonRequestsAndResponses());
        this.app.use(this.instanciaServidor.configureCorsPolicy());
        
        this.ApplicationRouter = new ApplicationRouter(
            new SystemController()
        );
            
        this.app.use('/', asyncHandler(this.ApplicationRouter.getSystemControllerRoutes()));

        this.app.use(ErrorHandling.HandleError);
    };
    //#endregion

    //#region Inicializacao
    public iniciarAplicacao() {
        let porta = process.env.PORT || 8080;
        this.app.listen(porta, () => {
            console.log("Servidor iniciado em: http://localhost:" + porta);
        });
    }
    //#endregion
}

//Instancia a aplicação
new Application(new Server()).iniciarAplicacao();