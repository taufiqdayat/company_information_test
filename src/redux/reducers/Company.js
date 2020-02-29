import {CompanyList} from '../companyDummy';
import { ON_ADD_COMPANY, ON_SELECT_COMPANY, ON_DELETE_COMPANY, ON_DELETE_COMPANY_SUCCESS } from '../actionTypes';

const INIT_STATE = {
    id:1,
    listCompany:CompanyList,
    selectedCompany:{},
    isUpdate:false,
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
                listCompany:companyList,
                id:action.payload.id
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
        
        case ON_DELETE_COMPANY:
            var removeComp = state.listCompany.map(item=>(item.id)).indexOf(action.payload)

            var newLIstComp = state.listCompany

            if(removeComp>=0){
                newLIstComp.splice(removeComp, 1);
            }
            return {
                ...state,
                listCompany:newLIstComp,
                isUpdate:!state.isUpdate
            }

        case ON_DELETE_COMPANY_SUCCESS:
            const afterDeleteList = state.listCompany;
            afterDeleteList.push({});
            return {
                ...state,
                listCompany:afterDeleteList
            }
        default:
            return state;
    }
}