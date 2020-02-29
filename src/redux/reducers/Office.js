import { FETCH_OFFICE_COMPANY, ON_ADD_OFFICE, ON_DELETE_OFFICE } from "../actionTypes"
import {OfficeList} from '../officeDummy';

const INIT_STATE = {
    id:3,
    listOfficeById:[],
    allOffice:OfficeList,
    isUpdate:false,
}

export default(state=INIT_STATE, action)=>{
    switch(action.type){
        case FETCH_OFFICE_COMPANY:
            var listByCompany =  state.allOffice.filter((item, key)=>item.company_id==action.payload)

            return {
                ...state,
                listOfficeById:[...listByCompany]
            }
        case ON_ADD_OFFICE:
            let  newList  = state.allOffice.map((offc)=>{
                return offc
            });

            newList.push(action.payload)
            return{
                ...state,
                allOffice:newList
            }
        
        case ON_DELETE_OFFICE:
            var removeComp = state.allOffice.map(item=>(item.id)).indexOf(action.payload.id_office)

            var newLIstComp = state.allOffice

            if(removeComp>=0){
                newLIstComp.splice(removeComp, 1);
            }

            return {
                ...state,
                allOffice:newLIstComp,
                isUpdate:!state.isUpdate
            }

        default:
            return state;
    }
}