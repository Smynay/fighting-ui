import { Connection } from "../../../plugins";
import { INIT } from "../../../core";
import { makeAutoObservable } from "mobx";

export class ConnectionWidgetViewModel {
  constructor(private connection: Connection) {
    makeAutoObservable(this, {}, { autoBind: true });
  }
  public get isLoading(): boolean {
    return this.connection.isLoading;
  }
  public get isConnected(): boolean {
    return this.connection.isConnected;
  }

  public connect(): void {
    this.connection.connect();
  }

  public disconnect(): void {
    this.connection.disconnect();
  }
  [INIT]() {}
}
