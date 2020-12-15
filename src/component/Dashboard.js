import React, { Component } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const URI = "https://bpcourse.herokuapp.com"
export default class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
            course: []
        };
        this.deletehandler = this.deletehandler.bind(this);
    }

    componentDidMount() {
        axios.get(`${URI}/course`)
            .then(result => {
                console.log('data', result);
                console.log('output', result.data);
                this.setState({
                    course: result.data
                })
            })
            .catch(err => console.log(err.msg));

    }
    deletehandler (id) {
        const status = window.confirm("Are yo sure to Delete ?");
        if(status){
            axios.delete(`${URI}/course/${id}`)
            .then(result => {
                alert("Successfuly Deleted");
                window.location = '/';

            }).catch(err=> console.log(err.message));
        } else{
            alert("Unable to Delete");
            return false;
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12  jumbotron">
                        <h3 className="text-center">Dashbord</h3>

                    </div>

                    <div className="row">
                        {
                            this.state.course.map((item, key) => {

                                return (
                                    <div className="col-md-4" key={key}>
                                        <div className="card">
                                            <div className="card-header">
                                                <h3 className="card-title">
                                                    {item.title}
                                                </h3>
                                            </div>

                                            <div className="card-body">
                                                <ul className="list-group">
                                                    <li className="list-group-item">CourseId<span className="float-right">{item.cId}</span></li>
                                                    <li className="list-group-item">
                                                        Fee <span className="float-right"> &#8377; {item.fee}</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        Duration <span className="float-right">  {item.duration}</span>
                                                    </li>
                                                    <li className="list-group-item">
                                                        Description <span className="float-right">  {item.desc}</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="card-footer">
                                                <div className="btn-group">
                                                    <Link to={"/update/"+item._id} className="btn btn-outline-primary btn-sm"> Update</Link>
                                                    <button className="btn btn-sm btn-outline-danger" onClick={this.deletehandler.bind(this, item._id)}>Delete</button>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

