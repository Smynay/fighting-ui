import styles from "./FightingPage.module.css";
import { ViewModelsProvider } from "../../providers";
import {
  ConnectionWidget,
  GameModeWidget,
  ActionsWidget,
  CreateActorWidget,
  StatsWidget,
  RetryWidget,
} from "../../widgets";
export const FightingPage = () => (
  <ViewModelsProvider>
    <div className={styles.pageWrapper}>
      <div className={styles.page}>
        <div className={styles.info}>
          <ConnectionWidget />
        </div>
        <div className={styles.content}>
          <StatsWidget />
          <CreateActorWidget />
        </div>
        <div className={styles.actions}>
          <div></div>
          <div>
            <GameModeWidget />
            <ActionsWidget />
          </div>
          <div></div>
        </div>
      </div>
    </div>

    <RetryWidget />
  </ViewModelsProvider>
);
