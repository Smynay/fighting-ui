import { FightingModel } from "../../../domain";
import { makeAutoObservable } from "mobx";
import { INIT } from "../../../core";
import { ActorInfo } from "../../../domain";

type Stat = Pick<ActorInfo, "health" | "stamina" | "executedAction">;

export class StatsWidgetViewModel {
  constructor(private fightingModel: FightingModel) {
    makeAutoObservable(this);
  }

  get isShow(): boolean {
    return ["run", "end"].includes(this.fightingModel.state || "");
  }

  private get isActionShow(): boolean {
    return this.fightingModel.counters.action > 0;
  }

  get userStats(): Stat {
    return this.statsOf(this.fightingModel.currentPlayer);
  }

  get enemyStats(): Stat {
    return this.statsOf(this.fightingModel.currentOpponent);
  }

  private statsOf(source?: Stat): Stat {
    return {
      health: source?.health || 0,
      stamina: source?.stamina || 0,
      executedAction:
        this.isActionShow && source?.executedAction
          ? source.executedAction
          : "",
    };
  }

  [INIT]() {}
}
