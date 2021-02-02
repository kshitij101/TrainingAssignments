import { getReviews } from '../redux/actions';
// import { removeUpdateReviewCount} from '../redux/actions';
import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';

const Allreviews = (props) => {

    const dispatch = useDispatch();
    // const url = "http://localhost:4200";

    // const [users,setUserId] = useState([]);
    // const [reviews,setRev] = useState([]);

    // useEffect(() =>{
    //     axios.get(url+"/api/users")
    //         .then(res =>{
    //             let allUsers = [];
    //             res.data.response.map((user=>(
    //                 allUsers[user.id] = [user.username]
    //             )))
    //             // console.log(allUsers);
    //             setUserId(allUsers);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    //     axios.get(url+"/api/reviews")
    //         .then(res=>{
    //             setRev(res.data.response);
    //         })
    //         .catch(error =>{
    //             console.log(error);
    //         });
        
    // },[])

    useEffect(() =>{
        dispatch(getReviews());
    },[dispatch]);

    let reviews = useSelector((state) => state.reviews);
    console.log(reviews);


    return (
        <div className="container">
            <div className="card-deck">
                <div className="row" >   
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

export default Allreviews;