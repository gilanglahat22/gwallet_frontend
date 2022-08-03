import axios from "axios";

export const GetTopupHistoryRequest = () => {
    return {
      type: "GET_TOPUP_HISTORY_REQUEST"
    };
};
export const GetTopupHistorySuccess = (data) => {
    return {
        type: "GET_TOPUP_HISTORY_SUCCESS",
        payload: data
    };
};
export const GetTopupHistoryFailed = (error) => {
    return {
        type: "GET_TOPUP_HISTORY_FAILED",
        payload: error
    };
};

export const GetTopupHistory = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    return (dispatch) => {
        dispatch(GetTopupHistoryRequest());
        return axios
            .get(`${process.env.REACT_APP_GWALLET_API}/wallet/topup/history`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then((res) => {
                const result = res.data.data;
                dispatch(GetTopupHistorySuccess(result));
            })
            .catch((err) => {
                const message = err.response;
                dispatch(GetTopupHistoryFailed(message));
            });
    };
};