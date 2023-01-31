import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";


// reducer
const reducers=combineReducers({

})

// middleware
const middleware=[thunk]

// create store
//  ... is spread operator to convert object to array
const store=createStore(reducers,applyMiddleware(...middleware))


export default store