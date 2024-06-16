import { makeAutoObservable } from "mobx";
import { INIT } from "../../../core";
import { FightingModel } from "../../../domain";

type StatParam = {
  title: string;
  callback: () => void;
  selected: boolean;
};

export class CreateActorWidgetViewModel {
  constructor(private fightingModel: FightingModel) {
    makeAutoObservable(this);
  }

  private getArr(): number[] {
    return Array.from(Array(5).keys()).map((val) => val + 1);
  }

  private setHp(value: number): void {
    this._hp = value;
  }

  private setSp(value: number): void {
    this._sp = value;
  }

  get isShown(): boolean {
    return (
      this.fightingModel.currentEventType === "createActor" &&
      !this.fightingModel.isWaitForOpponent
    );
  }

  get healthParams(): StatParam[] {
    const values = this.getArr();

    return values.map((val) => ({
      title: String(val),
      callback: () => this.setHp(val),
      selected: this._hp === val,
    }));
  }

  get staminaParams(): StatParam[] {
    const values = this.getArr();

    return values.map((val) => ({
      title: String(val),
      callback: () => this.setSp(val),
      selected: this._sp === val,
    }));
  }

  private _hp = 3;
  private _sp = 3;

  createActor(): void {
    this.fightingModel.createActor(this._hp, this._sp);
  }

  [INIT]() {}
}
