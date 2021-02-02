import { takeLatest,put,call } from 'redux-saga/effects';
import axios from 'axios';

const url = "http://localhost:4200";

axios.defaults.withCredentials = true;

function allReviews(){
    let resp = axios.get(url+"/api/reviews")
                .then(res=>{
                    return res.data.response;
                })
                .catch(error =>{
                    console.log(error);
                });
    return resp;
}

function userReviews(user){
    let resp = axios.get(url+"/api/reviews/"+user.id)
                .then(res=>{
                    return res.data.response;
                })
                .catch(error =>{
                    console.log(error);
                });
    return resp;
}


function userSession(){
    let resp = axios.get(url+"/api/login")
                .then(res=>{
                    if(res.data.isLoggedIn){
                        return res.data.response;
                    }
                    else{
                        return res.data.isLoggedIn;
                    }
                })
                .catch(error =>{
                    console.log(error);
                });
    return resp;
}

function userAdd(user){
    
    let resp = axios.post(url+"/api/register",user)
                .then(res=>{
                    return res.data.response;
                })
                .catch(error =>{
                    console.log(error);
                });
    return resp;
}
function reviewAdd(user){
    // console.log(user);
    let resp = axios.post(url+"/api/review",user)
                .then(res=>{
                    return res.data.response;
                })
                .catch(error =>{
                    console.log(error);
                });
    return resp;
}

function userGet(user){
    let resp = axios.post(url+"/api/login",user)
                .then(res=>{
                    return {data:res.data.response,token:res.data.token};
                })
                .catch(error =>{
                    console.log(error);
                });
    return resp;
}

function userAuth(user){
    let resp = axios.get(url+"/api/userAuth",{
                headers:{
                    "x-access-token":user
                },
             })
                .then(res => {
                    if(res.data.auth){
                        return res.data.response;
                    }
                    else{
                        return res.data.auth;
                    }
                })
                .catch(error =>{
                    console.log(error);
                });
    return resp;
}

function reviewUpdate(data){
    let resp = axios.put(url+"/api/review",data)
                .then(res=>{
                    return res.data.response;
                })
                .catch(error =>{
                    console.log(error);
                });
    return resp;
}

function reviewDelete(data){
    // console.log(data)
    let resp = axios.delete(url+"/api/review/"+data.id)
                .then(res=>{
                    return res.data.response;
                })
                .catch(error =>{
                    console.log(error);
                });
    return resp;
}


function* getReviews(){
    const resp = yield call(allReviews);
    console.log("HANDLER RESPONSE");
    yield put({type:"GET_REVIEWS_SUCCESS",payload:resp})
}

function* getReviewsUser(action){
    const resp = yield call(userReviews,action.payload);
    console.log("HANDLER RESPONSE");
    yield put({type:"GET_REVIEWS_SUCCESS",payload:resp})
}

function* getUserSession(action){
    const resp = yield call(userSession);
    console.log("HANDLER RESPONSE");
    if(resp){
        let respData = [];
        respData["token"] = action.payload.token;
        respData["data"] = resp;
        yield put({type:"GET_LOGIN_SUCCESS",payload:respData});
    }
    else{
        yield put({type:"GET_LOGIN_FAILURE"});
    }
}

function* addUser(action){
    const resp = yield call(userAdd,action.payload);
    console.log("HANDLER ADDED USER");
    yield put({type:"ADD_USER_SUCCESS",payload:resp})
}


function* getUser(action){
    const resp = yield call(userGet,action.payload);
    console.log("HANDLER GET USER");
    yield put({type:"GET_LOGIN",payload:resp})
}

function* getAuthUser(action){
    const resp = yield call(userAuth,action.payload);
    console.log("HANDLER USER AUTH");
    if(resp){
        yield put({type:"GET_AUTH_SUCCESS",payload:resp});
    }
    else{
        yield put({type:"GET_AUTH_FAILURE"});
    }
}

function* addMovieReview(action){
    // console.log(action.payload);
    const resp = yield call(reviewAdd,action.payload);
    console.log("HANDLER ADDED REVIEW");
    yield put({type:"ADD_REVIEW_SUCCESS",payload:resp})
}

function* updateMovieReview(action){
    // console.log(action.payload);
    const resp = yield call(reviewUpdate,action.payload);
    console.log("HANDLER UPDATED REVIEW");
    yield put({type:"UPDATE_REVIEW_SUCCESS",payload:resp})
}

function* revertReviewUpdate(){
    // console.log(action.payload);
    console.log("HANDLER REVERTED UPDATE");
    yield put({type:"DELETE_UPDATE_REVIEW_COUNT_SUCCESS",payload:-1})
}

function* deleteMovieReview(action){
    // console.log(action.payload);
    const resp = yield call(reviewDelete,action.payload);
    console.log("HANDLER DELETED REVIEW");
    yield put({type:"DELETE_REVIEW_SUCCESS",payload:resp})
}

export function* watcherSaga(){
    yield takeLatest('GET_REVIEWS',getReviews);
    yield takeLatest('ADD_USER',addUser);
    yield takeLatest('GET_USER',getUser);
    yield takeLatest('GET_LOGIN',getUserSession);
    yield takeLatest('GET_AUTH',getAuthUser);
    yield takeLatest('GET_USER_REVIEWS',getReviewsUser);
    yield takeLatest('ADD_REVIEW',addMovieReview);
    yield takeLatest('UPDATE_REVIEW',updateMovieReview);
    yield takeLatest('DELETE_REVIEW',deleteMovieReview);
    yield takeLatest('DELETE_UPDATE_REVIEW_COUNT',revertReviewUpdate);
}