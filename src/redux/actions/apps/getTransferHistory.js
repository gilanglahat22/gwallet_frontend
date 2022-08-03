import axios from "axios";

export const GetTransferHistoryRequest = () => {
    return {
      type: "GET_TRANSFER_HISTORY_REQUEST"
    };
};
export const GetTransferHistorySuccess = (data) => {
    return {
        type: "GET_TRANSFER_HISTORY_SUCCESS",
        payload: data
    };
};
export const GetTransferHistoryFailed = (error) => {
    return {
        type: "GET_TRANSFER_HISTORY_FAILED",
        payload: error
    };
};

export const GetTransferHistory = () => {
    const token = JSON.parse(localStorage.getItem("token"));
    return (dispatch) => {
        dispatch(GetTransferHistoryRequest());
        return axios
            .get(`${process.env.REACT_APP_GWALLET_API}/transaction/history?limit=1000`, {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then((res) => {
                const result = res.data.data;
                dispatch(GetTransferHistorySuccess(result));
            })
            .catch((err) => {
                const message = err.response;
                dispatch(GetTransferHistoryFailed(message));
            });
    };
};