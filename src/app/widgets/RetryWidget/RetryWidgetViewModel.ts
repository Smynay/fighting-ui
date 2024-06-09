import { FightingModel } from "../../../domain";
import { makeAutoObservable } from "mobx";
import { INIT } from "../../../core";

export class RetryWidgetViewModel {
  constructor(private fightingModel: FightingModel) {
    makeAutoObservable(this);
  }

  get isShow(): boolean {
    return this.fightingModel.currentEventType === "confirmRetry";
  }

  confirm() {
    this.fightingModel.confirmRetry(true);
  }

  decline() {
    this.fightingModel.confirmRetry(false);
  }

  [INIT]() {}
}
