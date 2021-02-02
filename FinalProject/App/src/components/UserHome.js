import { getUserReviews } from '../redux/actions';
import { updateReview } from '../redux/actions';
import { deleteReview } from '../redux/actions';
import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {loadState,saveState} from '../redux/localStorage';



const UserHome = (props) => {

    // let btnStyle = -1;
    // if(props){
    //     console.log(props);
    // }

    const [createReviewLink,createButtonClick] = useState(false);
    const [btnStyle,setBtnStyle] = useState(-1);
    const [updatedReview,setUpdateReview] = useState('');

    const dispatch = useDispatch();

    const loggedInUser = useSelector((state) => state.user);
    console.log(loggedInUser);

    useEffect(()=>{
        saveState(loggedInUser.id);
        dispatch(getUserReviews(loggedInUser));
    },[dispatch]);

    let reviews = useSelector((state) => state.reviews);
    console.log(reviews);

    const showCreateForm = () =>{
        createButtonClick(true);
    }

    const updateUserReview = (reviewId) => {
        let updateData = {id:reviewId,data:updatedReview};
        dispatch(updateReview(updateData));
    }

    const deleteUserReview = (reviewId) =>{
        let sureDelete = window.confirm("DO YOU WANT TO DELETE THIS REVIEW ?");
        if(sureDelete == true){
            let sendData = {id:reviewId}
            dispatch(deleteReview(sendData));
        }
    }
    
    let deletedReviewId = useSelector((state) => state.reviewDeleted);
    console.log(deletedReviewId);

    let updatedReviewId = useSelector((state) => state.reviewUpdated);
    console.log(updatedReviewId);

    
    if(deletedReviewId){
        if(deletedReviewId !== -1){
            console.log(deletedReviewId);
            return <Redirect to={{
                pathname:'/Home',
            }} />
        }
    }

    if(updatedReviewId){
        if(updatedReviewId !== -1){
            console.log(updatedReviewId);
            return <Redirect to={{
                pathname:'/Home',
            }} />
        }
    }

    return (
        <div className="container">
            <div>
                <h2>WELCOME {loggedInUser.first_name}</h2>
            </div>

            {createReviewLink ? <Redirect to="/CreateReview"/> : (
                <div className="row">
                    <button onClick={showCreateForm}>CREATE REVIEW</button>
                </div>
                )
            }
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
                                </div>
                                <div className="card-footer">
                                    <button value={movie.id} onClick={(e) => setBtnStyle(e.target.value)}>CHANGE</button>
                                    <button value={movie.id} onClick={(e) => deleteUserReview(e.target.value)}>DELETE</button>
                                    {   
                                        btnStyle == movie.id ? 
                                            (<div>
                                                <form className="form-control" >
                                                    <label for="review">NEW REVIEW:</label>
                                                    <input type="textarea" id="review" onChange={(e) => setUpdateReview(e.target.value)} ></input>
                                                    <button type="submit" value={movie.id} onClick={(e) => (e.preventDefault(),updateUserReview(e.target.value))}>UPDATE</button>
                                                </form>
                                            </div>) : <span />
                                    }
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