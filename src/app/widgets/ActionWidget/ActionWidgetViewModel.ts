import { makeAutoObservable } from "mobx";
import { INIT } from "../../../core";
import { FightingModel } from "../../../domain";

type Action = {
  title: string;
  callback: () => void;
};

export class ActionWidgetViewModel {
  constructor(private fightingModel: FightingModel) {
    makeAutoObservable(this);
  }

  get isShown(): boolean {
    return (
      this.fightingModel.currentEventType === "chooseAction" &&
      !this.fightingModel.isWaitForOpponent
    );
  }

  get actions(): Action[] {
    const actionsSet = this.fightingModel.actions;

    if (!actionsSet) {
      return [];
    }

    return actionsSet?.map((key) => ({
      title: key,
      callback: () => this.chooseAction(key),
    }));
  }

  private chooseAction(value: string): void {
    this.fightingModel.chooseAction(value);
  }

  [INIT]() {}
}
