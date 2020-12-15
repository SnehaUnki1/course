import React, { useState } from 'react';
import { useInput } from '../helper/input-hooks'
import axios from 'axios';


const URI = "https://bpcourse.herokuapp.com"

export const Create = () => {

    const { value : cId ,bind: bindCid ,reset:resetCid } =  useInput("");
    const { value : title ,bind: bindTitle,reset:reseTitle } =  useInput("");
    const { value : fee ,bind: bindFee ,reset:resetFee } =  useInput(0);
    const { value : duration ,bind: bindDuration ,reset:resetDuration } =  useInput(0);
    const { value : desc ,bind: bindDesc ,reset:resetDesc } =  useInput("");
    
    const submitHandler = (e) => {
        e.preventDefault();
        const data = {
            cId: cId,
            title: title,
            fee: Number(fee),
            duration: Number(duration),
            desc: desc
        };

         axios.post(`${URI}/course`,data)
        .then(result => {
            alert("Successfully Created")
            window.location = "/";
        })
        .catch(err => console.log(err.message));
    }

    const resetAll = () =>{
        resetCid();
        reseTitle();
        resetFee();
        resetDuration();
        resetDesc();
    }

    return (


        <div className="container">
            <div className="row">
                <div className="col-md-12 col-sm-12 col-xs-12  jumbotron">
                    <h3 className="text-center">Create</h3>

                </div>
            </div>

            <div className="row">
                <div className="col-md-6 offset-3 card">
                    <div className="card-body">
                        <form method="POST" onSubmit={submitHandler} onReset={resetAll}>
                            <div className="form-gorup">
                                <label htmlFor="cId">Course ID</label>
                                <input type="text" {...bindCid} name="cId" id="cId" className="form-control" required/>
                            </div>

                            <div className="from-group">
                                <label htmlFor="title">Title</label>
                                <input type="text" {...bindTitle} className="form-control" required/>
                            </div>
                            <div className="from-group">
                                <label htmlFor="fee">Fee</label>
                                <input type="number" {...bindFee} className="form-control" required/>
                            </div>

                            <div className="from-group">
                                <label htmlFor="duration">Duration</label>
                                <input type="number"  {...bindDuration}className="form-control" required/>
                            </div>

                            <div className="from-group">
                                <label htmlFor="desc">Description</label>
                                <input type="text" {...bindDesc} className="form-control" required/>
                            </div>
                            <br/>

                            <div className="from-group">
                                <input type="submit" value="Create" className="btn btn-outline-success"/>
                                <input type="submit" value="Reset" className="btn btn-outline-danger"/>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create;
