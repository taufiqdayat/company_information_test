import { FETCH_OFFICE_COMPANY, ON_ADD_OFFICE, ON_DELETE_OFFICE } from "../actionTypes";

export const fetchOfficeById = (data) =>({type:FETCH_OFFICE_COMPANY, payload:data})
export const onAddOffice = (data) =>({type:ON_ADD_OFFICE, payload:data})
export const onDeleteOffice = (id_office, id_company) =>({type:ON_DELETE_OFFICE, payload:{id_office, id_company}})