import {CompanyList} from '../companyDummy';
import { ON_ADD_COMPANY, ON_SELECT_COMPANY } from '../actionTypes';

const INIT_STATE = {
    listCompany:CompanyList,
    selectedCompany:{}
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
        case ON_SELECT_COMPANY:
            let myList = state.listCompany.find(x=>x.id==action.payload)
            if(!myList){
                myList={}
            }
            return {
                ...state,
                selectedCompany:myList
            }
        default:
            return state;
    }
}