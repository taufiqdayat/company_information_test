import {combineReducers} from "redux"
import {connectRouter} from "connected-react-router"
import CompanyReducer from './Company';

export default (history) => combineReducers({
    router:connectRouter(history),
    company:CompanyReducer
})