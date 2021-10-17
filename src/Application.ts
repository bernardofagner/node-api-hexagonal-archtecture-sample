import { Server } from "./Config/Server/Server";
import { SystemController } from "./Controllers/SystemController";
import { ApplicationRouter } from "./Routes/ApplicationRouter";

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

        this.app.use('/', this.ApplicationRouter.getSystemControllerRoutes());
    }
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
