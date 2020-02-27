import React, { Component } from 'react';

class CreateCompany extends Component {
    render() {
        return (
            <div>
                <h3>Create Company</h3>
                <div style={{margin:"0% 3%"}}>
                    <div className="form-group">
                        <label className="control-label">Name :</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Address :</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Revenue :</label>
                        <input className="form-control" type="number" />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Phone No :</label>
                        <div className="row">
                            <div className="col-3">
                                <input className="form-control" type="number" />
                            </div>
                            <div className="col-9">
                                <input className="form-control" type="number" />
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop:"30px"}} className="form-group">
                        <button className="btn btn-secondary btn-block">Create</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateCompany;