import { getUserReviews } from '../redux/actions';
import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';


const UserHome = () => {

    const dispatch = useDispatch();

    const loggedInUser = useSelector((state) => state.user);

    useEffect(()=>{
        dispatch(getUserReviews(loggedInUser));
    },[dispatch]);

    let reviews = useSelector((state) => state.reviews);

    const showCreateForm = () =>{
        console.log("hi");
        <Redirect to="/CreateReview" />
    }

    return (
        <div className="container">
            <div className="row">
                <button onClick={showCreateForm}>CREATE REVIEW</button>
            </div>
            <div className="card-deck">
                <div className="row">   
                {
                    reviews && reviews.map((movie=>(
                        <div className="col-md-4 d-flex align-items-stretch">
                            <div key={movie.id} className="card ">
                                <img className="card-img-top" src={movie.movie_img}></img>
                                <div className="card-body">
                                    <h5 className="card-title">{movie.moviename}</h5>
                                    <p className="card-text">{movie.review}</p>
                                    <p className="card-text"><small className="text-mutes">Genre: {movie.genre}</small></p>
                                    {/* <p class="card-text"><small class="text-mutes"><b>By:{users[movie.author]}</b> </small></p> */}
                                </div>
                            </div>
                        </div>
                        
                    )))
                }
                </div>
            </div>
        </div>
    )
}
export default UserHome;