import { fork, takeEvery, put, all } from "redux-saga/effects"
import {ON_DELETE_OFFICE} from "../actionTypes"
import { fetchOfficeById } from "../actions"

function* _deleteOffice({payload}){
    yield put(fetchOfficeById(payload.id_company))
}

export function* onDeleteOffice(){
    yield takeEvery(ON_DELETE_OFFICE, _deleteOffice)
}

export default function* rootSaga(){
    yield all([
        fork(onDeleteOffice),
    ])
}