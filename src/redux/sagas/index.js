import {all} from 'redux-saga/effects';
import companySagas from './Company';
import officeSagas from './Office';

export default function* rootSaga(){
    yield all([
        companySagas(),
        officeSagas()
    ])
}