import { AppConfig } from "../../../Config/AppConfig/AppConfig";

export abstract class SqlBaseRepository {

    protected database: any;

    constructor() {
        this.database = {
            host: AppConfig.mySqlHost,
            database: AppConfig.mySqlDatabase,
            port: AppConfig.mySqlPort,
            dialect: AppConfig.mySqlDialetic,
            username: AppConfig.mySqlUsername,
            password: AppConfig.mySqlPassword,
            logging: AppConfig.mySqlLogging,
        };
    }

    public async HeathCkech(): Promise<string> {
        await this.database.authenticate();
        return "Alive";
    }

    public async closeConection() : Promise<string>
    {
        await this.database.close();
        return "Disconected";
    }
}