export class AppConfig {

    //#region ParseServer Configurations
    public static parseServerUrl: string = 'https://parseapi.back4app.com/';
    public static parseDatabaseName: string = 'db_corevent';
    public static parseMasterKey: string = 'gcUpmMRYBYiOi4wGF5cjSg6U2n8w4EAxmCXE5kBD';
    public static javascriptKey: string = "83mSrg2jFxjvaLM75CTPnYKiRyksCVGuKzcpW0am";
    public static appId: string = "5iYSSSp9usCDDA8okyAB7dVRe7j5DvzM9V6i9yz0";
    //#endregion

    //#region Sql config for Sequelize
    public static mySqlHost: string = 'localhost';
    public static mySqlDialetic: any = 'mysql';
    public static mySqlPort: number = 3306;
    public static mySqlDatabase: string = 'sample_database';
    public static mySqlUsername: string = 'fagner';
    public static mySqlPassword: string = 'nve7a3ez';
    public static mySqlLogging: boolean = true;
    //#endregion
}