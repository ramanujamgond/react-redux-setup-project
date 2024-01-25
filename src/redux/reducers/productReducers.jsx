import { ActionTypes } from "../contants/action-types"

const initaialState = {
    products: [{
        id: 1,
        title: "Dipesh",
        category: "programmer",
    }]
}

export const productReducer = (state = initaialState, { type, payload }) => {
    switch (type) {
        case ActionTypes.SET_PRODUCTS:
            return state

        default:
            return state;
    }
}