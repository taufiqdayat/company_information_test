import { FETCH_OFFICE_COMPANY, ON_ADD_OFFICE } from "../actionTypes"
import {OfficeList} from '../officeDummy';

const INIT_STATE = {
    listOfficeById:[],
    allOffice:OfficeList
}

export default(state=INIT_STATE, action)=>{
    switch(action.type){
        case FETCH_OFFICE_COMPANY:
            var listByCompany =  OfficeList.filter((item, key)=>item.company_id==action.payload)

            return {
                ...state,
                listOfficeById:[...listByCompany]
            }
        case ON_ADD_OFFICE:
            let  newList  = state.allOffice.push(action.payload);
            return{
                ...state,
                allOffice:newList
            }

        default:
            return state;
    }
}