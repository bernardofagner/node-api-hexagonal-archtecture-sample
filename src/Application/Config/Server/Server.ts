import express from 'express';
import cors from 'cors';

export class Server {

    private app = express();
    
    private corsConfig = {
        origin: '*',
        optionsSuccessStatus: 200,
    }

    public createApp() {
        return this.app;
    }

    //Define que as requests e responses usarão o formato json
    public configureJsonRequestsAndResponses() {
        return express.json();
    }

    //Lidando com politica CORS
    public configureCorsPolicy() {
        return cors(this.corsConfig);
    }
}