const INIT_STATE = {
    listCompany:[]
}

export default (state=INIT_STATE, action)=>{
    switch(action.type){
        case 'add_company':
            return {
                ...state,
                listCompany:[]
            }
        default:
            return state;
    }
}