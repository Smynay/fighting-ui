import { Connection } from "../plugins";
import {
  ConnectionWidgetViewModel,
  GameModeWidgetViewModel,
  RetryWidgetViewModel,
  ActionWidgetViewModel,
  CreateActorWidgetViewModel,
  StatsWidgetViewModel,
} from "../app/widgets";
import { INIT } from "./constants";
import { FightingModel } from "../domain";
import { RoundCounterViewModel } from "../app/widgets/RoundCounterWidget";

type LifeCycleMethods = {
  [INIT]?: CallableFunction;
};
type ConstructorType<T> = new (...args: any[]) => WithLifeCycle<T>;

type WithLifeCycle<T> = T & LifeCycleMethods;
const createInstance = <T>(Class: ConstructorType<T>, ...args: any[]): T => {
  const output = new Class(...args);

  if (output[INIT]) {
    output[INIT]();
  }

  return output;
};

export const plugins = {
  connection: createInstance(Connection, "ws://91.108.25.189:3000"),
};

export const models = {
  fighting: createInstance(FightingModel, plugins.connection),
};

export const viewModels = {
  connectionWidgetViewModel: createInstance(
    ConnectionWidgetViewModel,
    plugins.connection,
  ),
  gameModeWidgetViewModel: createInstance(
    GameModeWidgetViewModel,
    models.fighting,
  ),
  actionsWidgetViewModel: createInstance(
    ActionWidgetViewModel,
    models.fighting,
  ),
  createActorWidgetViewModel: createInstance(
    CreateActorWidgetViewModel,
    models.fighting,
  ),
  statsWidgetViewModel: createInstance(StatsWidgetViewModel, models.fighting),
  retryWidgetViewModel: createInstance(RetryWidgetViewModel, models.fighting),
  roundCounterViewModel: createInstance(RoundCounterViewModel, models.fighting),
};
