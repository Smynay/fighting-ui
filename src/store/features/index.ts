import authSlice from "./auth";
import connectionSlice from "./connection";
import fightingSlice from "./fighting";

const rootReducer = {
  auth: authSlice,
  connection: connectionSlice,
  fighting: fightingSlice,
};

export default rootReducer;
