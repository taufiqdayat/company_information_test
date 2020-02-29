import { FETCH_OFFICE_COMPANY, ON_ADD_OFFICE } from "../actionTypes";

export const fetchOfficeById = (data) =>({type:FETCH_OFFICE_COMPANY, payload:data})
export const onAddOffice = (data) =>({type:ON_ADD_OFFICE, payload:data})