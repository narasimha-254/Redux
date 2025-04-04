// import { createStore } from 'redux'

import { combineReducers, createStore } from 'redux'

// const initialState = {
//     balance: 0,
//     fullName: '',
//     mobile: null,
// }

// function accountReducer(state = initialState, action) {
//     switch (action.type) {
//         case 'deposite':
//             return { ...state, balance: state.balance + +action.payload }
//         case 'withdraw':
//             return { ...state, balance: state.balance - +action.payload }
//         case 'mobileUpdate':
//             return { ...state, mobile: action.payload }
//         case 'nameUpdate':
//             return { ...state, fullName: action.payload }
//             case 'reset':
//                 return initialState;
//         default:
//             return state
//     }
// }


// let store = createStore(accountReducer);



// export default store;


const initialState = {
    balance: 0,
    fullName: '',
    mobile: null
}

function accountReducer(state = initialState, action) {
    switch (action.type) {
        case "deposite":
            return { ...state, balance: state.balance + +action.payload }
        case 'withdraw':
            return { ...state, balance: state.balance - +action.payload }
        case 'updateName':
            return { ...state, fullName: action.payload }
        case 'updateNumber':
            return { ...state, mobile: action.payload }
        case 'reset':
            return initialState

        default:
            return state;
    }
}

function transactionReducer(state =[], action) {
    switch (action.type) {
        case 'ADD TRANSACTION':
            return [...state, { id:action.payload.id,amount: action.payload.amount, type: action.payload.type, date:action.payload.date }]

        default :
        return state;
    }
}

let rootReducer = combineReducers({
    account: accountReducer,
    transaction: transactionReducer
})



let store = createStore(rootReducer);

export default store;