import styles from "./FightingPage.module.css";
import { ViewModelsProvider } from "../../providers";
import {
  ConnectionWidget,
  GameModeWidget,
  ActionsWidget,
  CreateActorWidget,
  StatsWidget,
  RetryWidget,
  WaitingWidget,
} from "../../widgets";
import { RoundCounterWidget } from "../../widgets/RoundCounterWidget";
import {AIWidget} from "../../widgets/AIWidget";
export const FightingPage = () => (
  <ViewModelsProvider>
    <div id="fightingPage" className={styles.pageWrapper}>
      <div className={styles.page}>
        <div className={styles.info}>
          <ConnectionWidget />
        </div>
        <div className={styles.content}>
          <StatsWidget>
            <RoundCounterWidget />
          </StatsWidget>
          <CreateActorWidget />
        </div>
        <div className={styles.actions}>
          <div></div>
          <div>
            <AIWidget />
            <GameModeWidget />
            <ActionsWidget />
            <WaitingWidget />
          </div>
          <div></div>
        </div>
      </div>
    </div>

    <RetryWidget />
  </ViewModelsProvider>
);
