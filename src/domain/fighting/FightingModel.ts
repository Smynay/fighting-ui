import {
  Actions,
  ActorInfo,
  GameMode,
  GameState,
  GameStateData,
} from "./entity";
import { makeAutoObservable } from "mobx";
import { Action, Connection } from "../../plugins";

export type FightingAction = Action<GameStateData>;
export class FightingModel {
  constructor(private readonly connection: Connection) {
    this.connection.subscribe<FightingAction>(
      this.domain,
      this.resolveDomainMessage.bind(this),
    );

    makeAutoObservable(this);
  }

  private domain = "fighting";
  private _currentEventType: string | undefined = undefined;
  private _gameState: GameState = new GameState();
  private _isWaitForOpponent = false;

  get currentEventType(): string | undefined {
    return this._currentEventType;
  }

  get gameModes(): GameMode | undefined {
    return this._gameState?.data?.modes;
  }

  get actions(): Actions | undefined {
    return this._gameState?.data?.actions;
  }

  get gameResult(): string {
    if (!this._gameState.data?.results?.winnerId) {
      return "draw";
    }

    if (this.currentOpponent?.id === this._gameState.data?.results?.winnerId) {
      return "looser";
    }

    if (this.currentPlayer?.id === this._gameState.data?.results?.winnerId) {
      return "winner";
    }

    return "draw";
  }

  get counters() {
    return {
      round: this._gameState.data?.results?.round || 0,
      action: this._gameState.data?.results?.action || 0,
    };
  }

  get isWaitForOpponent(): boolean {
    return this._isWaitForOpponent;
  }

  private get currentPlayerId(): string | undefined {
    return this._gameState.data?.id;
  }

  get currentPlayer(): ActorInfo | undefined {
    return this._gameState?.data?.results?.player?.id === this.currentPlayerId
      ? this._gameState?.data?.results?.player
      : this._gameState?.data?.results?.opponent;
  }

  get currentOpponent(): ActorInfo | undefined {
    return this._gameState?.data?.results?.player?.id === this.currentPlayerId
      ? this._gameState?.data?.results?.opponent
      : this._gameState?.data?.results?.player;
  }

  get state(): string | undefined {
    return this._gameState?.data?.results?.state;
  }

  private resolveDomainMessage(action?: FightingAction): void {
    this._isWaitForOpponent = false;

    if (action) {
      this._currentEventType = this.resolveDomainEvent(action.type);
    }

    if (action?.payload) {
      this._gameState.update(action.payload);
    }
  }

  private getDomainEventType(type: string): string {
    return [this.domain, type].join("/");
  }

  private resolveDomainEvent(type: string): string {
    const [, event] = type.split("/");

    return event;
  }

  private setGameMode(mode: GameMode): void {
    // TODO: add dynamic change
  }

  public chooseGameMode(value: number): void {
    return this.connection.send(
      this.getDomainEventType("chooseGameMode"),
      value,
    );
  }

  public chooseAction(value: string): void {
    this._isWaitForOpponent = true;

    return this.connection.send(this.getDomainEventType("chooseAction"), value);
  }

  public createActor(health: number, stamina: number): void {
    this._isWaitForOpponent = true;

    return this.connection.send(this.getDomainEventType("createActor"), {
      health,
      stamina,
    });
  }

  public confirmRetry(value: boolean): void {
    this.destroy();

    return this.connection.send(this.getDomainEventType("confirmRetry"), value);
  }

  public destroy(): void {
    this._gameState = new GameState();
    this._currentEventType = undefined;
  }
}
