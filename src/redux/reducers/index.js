import {combineReducers} from "redux"
import {connectRouter} from "connected-react-router"
import CompanyReducer from './Company';
import OfficeReducers from './Office';
import ProcessReducer from './Process';

export default (history) => combineReducers({
    router:connectRouter(history),
    company:CompanyReducer,
    office:OfficeReducers,
    pcs:ProcessReducer,
})