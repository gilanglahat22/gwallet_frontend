const initialState = {
    data: [],
    loading: false,
    error: false
};

const GetTopupHistory = (state = initialState, action = {}) => {
    switch (action.type) {
        case "GET_TOPUP_HISTORY_REQUEST":
            return {
                ...state,
                loading: true
            };
        case "GET_TOPUP_HISTORY_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case "GET_TOPUP_HISTORY_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: []
            };
        default:
            return state;
    }
};

export default GetTopupHistory;