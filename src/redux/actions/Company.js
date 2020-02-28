import { ON_ADD_COMPANY, ON_SELECT_COMPANY } from "../actionTypes";

export const onAddCompany = (data) => ({type:ON_ADD_COMPANY, payload:data})
export const onSelectCompany = (data) =>({type:ON_SELECT_COMPANY, payload:data})