import { makeAutoObservable } from "mobx";
import { INIT } from "../../../core";
import { FightingModel } from "../../../domain";

type Option = {
    title: string;
    callback: () => void;
};

export class AIWidgetViewModel {
    constructor(private fightingModel: FightingModel) {
        makeAutoObservable(this);
    }

    get isShown(): boolean {
        return (
            this.fightingModel.currentEventType === "chooseAi"
        );
    }

    get options(): Option[] {
        const optionsSet = this.fightingModel.options;

        if (!optionsSet) {
            return [];
        }

        return optionsSet?.map((key) => ({
            title: key,
            callback: () => this.chooseAi(key),
        }));
    }

    private chooseAi(value: string): void {
        this.fightingModel.chooseAi(value);
    }

    [INIT]() {}
}
