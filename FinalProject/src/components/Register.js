import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {addUserAction} from '../redux/actions';
import { Redirect } from 'react-router-dom';


const Register = () => {

    const dispatch = useDispatch(); 

    const[username,setUsername] = useState('');
    const[firstname,setFirstName] = useState('');
    const[lastname,setLastName] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPassword] = useState('');
    const[bio,setBio] = useState('');
    const[country,setCountry] = useState('');


    function addData(){
        let user = {username,firstname,lastname,email,password,country,bio};
        dispatch((addUserAction(user)));
    }

    const userAdd = useSelector((state) => {
                        if(state.userAdded){
                            return state.userAdded;
                        }
                    })

    console.log(userAdd);

    if(userAdd){
        return <Redirect to="/Login" />
    }


    return (
        <div className="container">
            <form className="form-control">
                <label for="username">USERNAME:</label>
                <input onChange={(e) => {setUsername(e.target.value)}} type="text" id="username"></input>
                <label for="first_name">FIRST NAME:</label>
                <input onChange={(e) => {setFirstName(e.target.value)}} type="text" id="first_name"></input>
                <label for="last_name">LAST NAME:</label>
                <input onChange={(e) => {setLastName(e.target.value)}} type="text" id="last_name"></input>
                <label for="bio">BIO:</label>
                <input onChange={(e) => {setBio(e.target.value)}} type="textarea" id="bio"></input>
                <label for="country">COUNTRY:</label>
                <select id="country" onChange={(e) =>{setCountry(e.target.value)}}>
                    <option selected></option>
                    <option value="Australia">AUSTRALIA</option>
                    <option value="India">INDIA</option>
                    <option value="Singapore">SINGAPORE</option>
                    <option value="Belgium">BELGIUM</option>
                </select>
                <label for="email">EMAIL:</label>
                <input onChange={(e) => {setEmail(e.target.value)}} type="text" id="email"></input>
                <label for="password">PASSWORD:</label>
                <input onChange={(e) => {setPassword(e.target.value)}} type="password" id="password"></input>
                <button onClick={(e) => {e.preventDefault(); addData()}} type="submit">CREATE USER</button>
            </form>
        </div>
    )
}

export default Register;
