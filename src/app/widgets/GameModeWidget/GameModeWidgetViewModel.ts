import { makeAutoObservable } from "mobx";
import { INIT } from "../../../core";
import { FightingModel } from "../../../domain";

type GameMode = {
  title: string;
  callback: () => void;
};

export class GameModeWidgetViewModel {
  constructor(private fightingModel: FightingModel) {
    makeAutoObservable(this);
  }

  get isShown(): boolean {
    return this.fightingModel.currentEventType === "chooseGameMode";
  }

  get modes(): GameMode[] {
    const modes = this.fightingModel.gameModes;

    if (!modes) {
      return [];
    }

    return Object.keys(modes).map((key) => ({
      title: key,
      callback: () => this.chooseGameMode(modes[key]),
    }));
  }

  private chooseGameMode(value: number): void {
    this.fightingModel.chooseGameMode(value);
  }

  [INIT]() {}
}
