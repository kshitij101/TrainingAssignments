import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {getUserAction} from '../redux/actions';
import {getUserAuth} from '../redux/actions';
import { Redirect } from 'react-router-dom';

const Login = () => {

    let userData = {};

    const dispatch = useDispatch(); 

    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    // const[loggedinuser,setUser] = useState()


    function getData(){
        let user = {email,password};
        dispatch((getUserAction(user)));
    }

    // useEffect(()=>{
    //     console.log(userData);
    //     if(userData.userAuth){
    //        return <Redirect to="/Home" />
    //     }
    // },[userData.userAuth]);

    userData = useSelector((state)=> {
                                        if(state.userLoggedIn !== undefined){
                                            if(state.userAuth){
                                                return {userData:state.user,userToken:state.token,userAuth:state.userAuth};
                                            }
                                            else{
                                                return {userData:state.user,userToken:state.token};
                                            }
                                        }
                                        else{
                                            return false;
                                        }
                                    });
    console.log(userData);

    if(userData.userAuth){
        return <Redirect to="/UserHome" />
    }

    return (
        <div className="container">
            <form className="form-control">
                <label for="email">EMAIL:</label>
                <input onChange={(e) => {setEmail(e.target.value)}} type="text" id="email"></input>
                <label for="password">PASSWORD:</label>
                <input onChange={(e) => {setPassword(e.target.value)}} type="password" id="password"></input>
                <button onClick={(e) => {e.preventDefault(); getData()}} type="submit">LOGIN USER</button>
            </form>
            {userData && (<button onClick={()=>dispatch(getUserAuth(userData.userToken))}>GET LOGIN STATUS</button>)}
        </div>
    )
}

export default Login;
