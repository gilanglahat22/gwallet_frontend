const initialState = {
    data: [],
    loading: false,
    error: false
};

const GetTransferHistory = (state = initialState, action = {}) => {
    switch (action.type) {
        case "GET_TRANSFER_HISTORY_REQUEST":
            return {
                ...state,
                loading: true
            };
        case "GET_TRANSFER_HISTORY_SUCCESS":
            return {
                ...state,
                loading: false,
                data: action.payload
            };
        case "GET_TRANSFER_HISTORY_FAILED":
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

export default GetTransferHistory;