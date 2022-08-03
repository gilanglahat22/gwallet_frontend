import { combineReducers } from "redux";

// import reducers
import AuthLogin from "./auth/authLogin";
import AuthSignUp from "./auth/authSignUp";
import AuthCreatePIN from "./auth/authCreatePIN";
import GetProfile from "./apps/getProfile";
import GetReceivers from "./apps/getReceivers";
import SearchReceiver from "./apps/searchReceiver";
import PINConfirmation from "./apps/PINConfirmation";
import NewPassword from "./apps/changePassword";
import PINConfirm from "./apps/PINConfirm";
import NewPin from "./apps/changePIN";
import NewPhoneNumber from "./apps/addPhoneNumber";
import DeletePhoneNumber from "./apps/deletePhoneNumber";
import NewProfilePicture from "./apps/addProfilePicture";
import GetDetailsReceiver from "./apps/getReceiversById";
import TransferInput from "./apps/transfer";
import TransferConfirmation from "./apps/transferConfirmation";
import TopupMethod from "./apps/topupMethod";
import TopupInput from "./apps/topupInput";
import TopupConfirmation from "./apps/topupConfirmation";
import GetTopupHistory from "./apps/getTopupHistory";
import GetTransferHistory from "./apps/getTransferHistory";

// combine all reducers into rootReducers
const rootReducers = combineReducers({
  AuthLogin,
  AuthSignUp,
  AuthCreatePIN,
  GetProfile,
  GetReceivers,
  SearchReceiver,
  PINConfirmation,
  NewPassword,
  PINConfirm,
  NewPin,
  NewPhoneNumber,
  GetTopupHistory,
  GetTransferHistory,
  DeletePhoneNumber,
  NewProfilePicture,
  GetDetailsReceiver,
  TransferInput,
  TransferConfirmation,
  TopupMethod,
  TopupInput,
  TopupConfirmation
});

export default rootReducers;
