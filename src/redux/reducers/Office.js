import { FETCH_OFFICE_COMPANY } from "../actionTypes"
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

        default:
            return state;
    }
}