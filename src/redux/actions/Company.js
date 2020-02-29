import { ON_ADD_COMPANY, ON_SELECT_COMPANY, ON_DELETE_COMPANY, ON_DELETE_COMPANY_SUCCESS } from "../actionTypes";

export const onAddCompany = (data) => ({type:ON_ADD_COMPANY, payload:data})
export const onSelectCompany = (data) =>({type:ON_SELECT_COMPANY, payload:data})
export const onDeleteCompany = (data) =>({type:ON_DELETE_COMPANY, payload:data})
export const onDeleteCompanySuccess = () =>({type:ON_DELETE_COMPANY_SUCCESS, payload:{}})