import { getUserReviews } from '../redux/actions';
import { addUserReview } from '../redux/actions';
import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {loadState,saveState} from '../redux/localStorage';

const CreateReview = () => {
    
    const [moviename,setMovieName] = useState('');
    const [review,setMovieReview] = useState('');
    const [genre,setMovieGenre] = useState('');

    const dispatch = useDispatch();
    
    const createReview = (e) =>{

        e.preventDefault();

        let loggedInUser = -1;
        if(loadState()){
            loggedInUser = loadState();
        }

        let reviewData = {moviename,review,genre,author:loggedInUser.state};

        if(reviewData.moviename !== "" || reviewData.genre !== "" || reviewData.review !== "")
            dispatch(addUserReview(reviewData)); 
    }
    let reviewAdded = useSelector((state) => {if(state.reviewAdded){
                                                return state.reviewAdded;
                                            }}
                    );

    if(reviewAdded){
        if(reviewAdded.moviename === moviename){
            return <Redirect to="/UserHome" />
        }
    }

    return (
        <div className="container">
            <form className="form-control">
                    <label for="moviename">MOVIE NAME:</label>
                    <input id="moviename" type="text" onChange={(e) => setMovieName(e.target.value)}></input>
                    <label for="review">REVIEW</label>
                    <input id="review" type="textarea" onChange={(e) => setMovieReview(e.target.value)}></input>
                    <label for="genre">GENRE</label>
                    <select id="genre" onChange={(e) => setMovieGenre(e.target.value)}>
                        <option selected></option>
                        <option value="SCI-FI">SCI-FI</option>
                        <option value="ROMEDY">ROMEDY</option>
                        <option value="THRILLER">THRILLER</option>
                    </select>
                    <button type="submit" onClick={(e) => createReview(e)}>SUBMIT</button>
                </form>
        </div>
    )
}

export default CreateReview;