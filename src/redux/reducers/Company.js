import {CompanyList} from '../companyDummy';
import { ON_ADD_COMPANY } from '../actionTypes';

const INIT_STATE = {
    listCompany:CompanyList
}


export default (state=INIT_STATE, action)=>{
    switch(action.type){
        case ON_ADD_COMPANY:
            const companyList = state.listCompany.map((comp)=>{
                return comp
            })

            companyList.push(action.payload)
            return {
                ...state,
                listCompany:companyList
            }
        default:
            return state;
    }
}