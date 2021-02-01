const initState = [];

export default (state=initState,action) => {
    switch(action.type){
        case "GET_REVIEWS":
            return {...state};
        case "GET_REVIEWS_SUCCESS":
            return {...state, reviews: action.payload};
        case "ADD_USER":
            return {...state};
        case "ADD_USER_SUCCESS":
            return {...state, userAdded:action.payload};
        case "GET_USER":
            return {...state};
        case "GET_USER_SUCCESS":
            return {...state, user: action.payload};
        case "GET_LOGIN":
            return {...state};
        case "GET_LOGIN_SUCCESS":
            return {...state,userLoggedIn:true ,user: action.payload.data,token: action.payload.token};
        case "GET_LOGIN_FAILURE":
            return {...state,userLoggedIn:false};
        case "GET_AUTH":
            return {...state};
        case "GET_AUTH_SUCCESS":
            return {...state, userAuth: true};
        case "GET_AUTH_FAILURE":
            return {...state, userAuth: false};
        case "ADD_REVIEW":
            return {...state};
        case "ADD_REVIEW_SUCCESS":
            return {...state, reviewAdded:action.payload,userId:action.payload.author};
        default :
            return {...state};
    }
}