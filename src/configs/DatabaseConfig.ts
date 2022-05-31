import { config } from "mssql";

require("dotenv").config();

export class DatabaseConfig {
  private static _instance: DatabaseConfig;

  private static _user: string;
  private static _password: string;
  private static _server: string;
  private static _database: string;
  private static _trustServerCertificate: boolean;

  private constructor() {
    DatabaseConfig._instance = this;
    DatabaseConfig._user = this.convertToString(process.env.DATABASE_USER);
    DatabaseConfig._password = this.convertToString(
      process.env.DATABASE_PASSWORD
    );
    DatabaseConfig._server = this.convertToString(process.env.DATABASE_SERVER);
    DatabaseConfig._database = this.convertToString(process.env.DATABASE_NAME);
    DatabaseConfig._trustServerCertificate = true;
  }

  public static getInstance(): DatabaseConfig {
    if (!DatabaseConfig._instance) {
      DatabaseConfig._instance = new DatabaseConfig();
    }

    return DatabaseConfig._instance;
  }

  public getSqlConfig(): config {
    return {
      user: DatabaseConfig._user,
      password: DatabaseConfig._password,
      server: DatabaseConfig._server,
      database: DatabaseConfig._database,
      options: {
        trustServerCertificate: DatabaseConfig._trustServerCertificate,
      },
    };
  }

  private convertToString(text: string | undefined) {
    return typeof text === "string" ? text : "";
  }

  //#region Getters && Setters
  public get user(): string {
    return DatabaseConfig._user;
  }
  public set user(value: string) {
    DatabaseConfig._user = value;
  }

  public get password(): string {
    return DatabaseConfig._password;
  }
  public set password(value: string) {
    DatabaseConfig._password = value;
  }

  public get server(): string {
    return DatabaseConfig._server;
  }
  public set server(value: string) {
    DatabaseConfig._server = value;
  }

  public get database(): string {
    return DatabaseConfig._database;
  }
  public set database(value: string) {
    DatabaseConfig._database = value;
  }

  public get trustServerCertificate(): boolean {
    return DatabaseConfig._trustServerCertificate;
  }
  public set trustServerCertificate(value: boolean) {
    DatabaseConfig._trustServerCertificate = value;
  }
  //#endregion
}
