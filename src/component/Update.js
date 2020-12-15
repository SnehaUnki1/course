import React, { Component } from 'react'
import axios from 'axios';

const URI = "https://bpcourse.herokuapp.com"

export default class Update extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            cId: '',
            title: '',
            fee: 0,
            duration: '',
            desc: ''
        }
        this.submitHandler = this.submitHandler.bind(this);
    }
    componentDidMount() {
        axios.get(`${URI}/course/${this.state.id}`)
            .then(
                result => {
                    console.log("Update: ", result.data);
                    this.setState({
                        cId: result.data.cId,
                        title: result.data.title,
                        fee: result.data.fee,
                        duration: result.data.duration,
                        desc: result.data.desc
                    })
                }
            ).catch(err => console.log(err.message));

    }

    submitHandler(e) {
        e.preventDefault();
        const data = {
            cId: this.state.cId,
            title: this.state.title,
            fee: this.state.fee,
            duration: this.state.duration,
            desc: this.state.desc
        };

        console.log("before update =", data);

        axios.patch(`${URI}/course/${this.state.id}`, data)
        .then(result => {
            alert("Successfully Updated.");
            window.location = '/';
        }).catch(err => console.log(err.message));
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12  jumbotron">
                        <h3 className="text-center">Update {this.state.id}</h3>

                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 offset-3 card">
                        <div className="card-body">
                            <form method="POST" onSubmit={this.submitHandler}>
                                <div className="form-gorup">
                                    <label htmlFor="cId">Course ID</label>
                                    <input type="text" name="cId" id="cId" value={this.state.cId} onChange={(e) =>
                                    this.setState({cId:e.target.value})} className="form-control" readOnly required />
                                </div>

                                <div className="from-group">
                                    <label htmlFor="title">Title</label>
                                    <input type="text" value={this.state.title} onChange={(e) =>
                                    this.setState({title: e.target.value})} className="form-control" required />
                                </div>
                                <div className="from-group">
                                    <label htmlFor="fee">Fee</label>
                                    <input type="number" value={this.state.fee} onChange={(e) =>
                                    this.setState({fee:e.target.value})} className="form-control" required />
                                </div>

                                <div className="from-group">
                                    <label htmlFor="duration">Duration</label>
                                    <input type="number" value={this.state.duration} onChange={(e) =>
                                    this.setState({duration:e.target.value})} className="form-control" required />
                                </div>

                                <div className="from-group">
                                    <label htmlFor="desc">Description</label>
                                    <input type="text" value={this.state.desc} onChange={(e) =>
                                    this.setState({desc:e.target.value})} className="form-control" required />
                                </div>
                                <br />

                                <div className="from-group">
                                    <input type="submit" value="Update" className="btn btn-outline-success" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

