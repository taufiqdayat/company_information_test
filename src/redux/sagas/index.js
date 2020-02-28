import {all} from 'redux-saga/effects';
import companySagas from './Company';

export default function* rootSaga(){
    yield all([
        companySagas(),
    ])
}