import { fork, takeEvery, put, all } from "redux-saga/effects"
import { ON_DELETE_COMPANY } from "../actionTypes"
import { onDeleteCompanySuccess } from "../actions"

function* _loadListCompany(){
    yield put({type:'fetch_company_success', payload:{}})
}

function* _deleteComp(){
    // yield put(onDeleteCompanySuccess())
}

export function* loadListCompany(){
    yield takeEvery('fetch_all_company', _loadListCompany)
}

export function* onDeleteComp(){
    yield takeEvery(ON_DELETE_COMPANY, _deleteComp)
}

export default function* rootSaga() {
    yield all([
        fork(loadListCompany),
        fork(onDeleteComp)
    ])
}