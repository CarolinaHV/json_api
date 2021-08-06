import React, {useState, useEffect} from 'react';

const Card = (data) => {

    return (
        <>
           <div className="card" style={{width: "18 rem" }}>
                            <div className="card-body mark_card">
                                <h5 className="card-title person__name">
                                    {data.name}
                                </h5>
                                <p className="card-text description">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus alias expedita repudiandae?</p>
                                <p className="card-text department">24 days ago in Business</p>
                                <div className="vote_buttons">
                                    <button className="icon-button" aria-label="thumbs up">
                                        <img src="assets/img/thumbs-up.svg" alt="thumbs up"/>
                                    </button>
                                    <button className="icon-button" aria-label="thumbs down">
                                        <img src="assets/img/thumbs-down.svg" alt="thumbs down"/>
                                    </button>
                                    <button className="btn btn-secondary">
                                        Vote Now
                                    </button>
                                </div>
                                <br/>
                                <div className="progress">
                                    <div className="progress-bar bg-success" role="progressbar" style={{width: "74.5%"}} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100">74.5%</div>
                                    <div className="progress-bar bg-warning" role="progressbar" style={{width: "25.5%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">25.5%</div>
                                </div>
                              {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                            </div>
                        </div>
        </>
    )
}

export default Card;
