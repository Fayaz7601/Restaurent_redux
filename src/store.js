import { createStore,combineReducers,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { restaurantListReducer } from "./reducers/restaurantreducer";


// reducer
const reducers=combineReducers({

    restaurentReducer:restaurantListReducer

})

// middleware
const middleware=[thunk]

// create store
//  ... is spread operator to convert object to array
const store=createStore(reducers,applyMiddleware(...middleware))


export default store