import {combineReducers} from "redux"
import {connectRouter} from "connected-react-router"
import CompanyReducer from './Company';
import OfficeReducers from './Office';

export default (history) => combineReducers({
    router:connectRouter(history),
    company:CompanyReducer,
    office:OfficeReducers
})