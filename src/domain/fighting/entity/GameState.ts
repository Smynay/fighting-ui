import { makeAutoObservable } from "mobx";

export type GameMode = Record<string, number>;
export type Actions = string[];
export type ActorInfo = {
  id: string;
  health: number;
  stamina: number;
  executedAction: string;
  selectedAction: string;
};
export type Results = {
  action: number;
  round: number;
  player: ActorInfo;
  opponent: ActorInfo;
  winnerId: string;
  state: string;
};
export interface GameStateData {
  id?: string;
  modes?: GameMode;
  actions?: Actions;
  results?: Results;
}

export class GameState {
  constructor() {
    makeAutoObservable(this);
  }

  public get data(): GameStateData | undefined {
    return this._data;
  }

  private _data: GameStateData | undefined = undefined;

  private setData(state: GameStateData): void {
    this._data = { ...this._data, ...state };
  }

  public update(state: GameStateData): void {
    this.setData(state);
  }
}
