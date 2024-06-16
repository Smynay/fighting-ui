import { FightingModel } from "../../../domain";
import { makeAutoObservable } from "mobx";
import { INIT } from "../../../core";

export class WaitingWidgetViewModel {
  constructor(private fightingModel: FightingModel) {
    makeAutoObservable(this);
  }

  get isShow(): boolean {
    return this.fightingModel.isWaitForOpponent;
  }

  [INIT]() {}
}
