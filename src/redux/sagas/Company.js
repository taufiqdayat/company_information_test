import { fork, takeEvery, put, all } from "redux-saga/effects"

function* _loadListCompany(){
    yield put({type:'fetch_company_success', payload:{}})
}

export function* loadListCompany(){
    yield takeEvery('fetch_all_company', _loadListCompany)
}

export default function* rootSaga() {
    yield all([
        fork(loadListCompany),
    ])
}