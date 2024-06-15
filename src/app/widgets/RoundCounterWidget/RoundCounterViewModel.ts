import { FightingModel } from "../../../domain";

export class RoundCounterViewModel {
  constructor(private fightingModel: FightingModel) {}

  get isShow(): boolean {
    return (
      ["run", "end"].includes(this.fightingModel.state || "") &&
      Boolean(this.round || this.action)
    );
  }

  get isMatchResult(): boolean {
    return this.fightingModel.state === "end";
  }

  get gameResult(): string {
    return this.fightingModel.gameResult;
  }

  get round(): number {
    return this.fightingModel.counters.round;
  }

  get action(): number {
    return this.fightingModel.counters.action;
  }
}
