export const GET_DATA = "GET_DATA"; 
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS";

export const ADD_DATA = "ADD_DATA"; 
export const ADD_DATA_SUCCESS = "ADD_DATA_SUCCESS";

export const UPDATE_DATA = "UPDATE_DATA"; 
export const UPDATE_DATA_SUCCESS = "UPDATE_DATA_SUCCESS";

export const DELETE_DATA = "DELETE_DATA"; 
export const DELETE_DATA_SUCCESS = "DELETE_DATA_SUCCESS";


export const getUserAuth = (userToken) =>{
    console.log('get auth accessed');
    return {
        type: 'GET_AUTH',
        payload: userToken
    }
}


export const getUserReviews=(user)=>{
    console.log('get user reviews accesseds');
    return {
        type: 'GET_USER_REVIEWS',
        payload: user
    };
};

export const getReviews=()=>{
    console.log('get reviews accesseds');
    return {
        type: 'GET_REVIEWS'
    };
};

export const getLogin=()=>{
    console.log('get login user');
    return {
        type: 'GET_LOGIN'
    };
};

export const addUserAction = (user)=>{
    console.log("user add called");
    return{
        type: 'ADD_USER',
        payload:user
    };
};

export const addUserReview = (review)=>{
    console.log("review add called");
    return{
        type: 'ADD_REVIEW',
        payload:review
    };
};

export const getUserAction = (user)=>{
    console.log("user get called");
    return{
        type: 'GET_USER',
        payload:user
    };
};


export const getData = (data) => ({
    type:GET_DATA,
    payload: data
});

export const addData = (data) => ({
    type:ADD_DATA,
    payload: data
});

export const uodateData = (data) => ({
    type:UPDATE_DATA,
    payload: data
});

export const deleteData = (data) => ({
    type:DELETE_DATA,
    payload: data
});

