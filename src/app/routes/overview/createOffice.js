import React, { Component } from 'react';

class CreateOffice extends Component {
    render() {
        return (
            <div>
                <h3>Create Office</h3>
                <div style={{margin:"0% 3%"}}>
                    <div className="form-group">
                        <label className="control-label">Name :</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Location :</label>
                        <div className="row">
                            <div className="col-6">
                                <input className="form-control" type="number" />
                            </div>
                            <div className="col-6">
                                <input className="form-control" type="number" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label className="control-label">Office Start Date :</label>
                        <input className="form-control" type="text" />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Company :</label>
                        <select className="custom-select">
                            <option>example 1</option>
                            <option>example 2</option>
                            <option>example 3</option>
                        </select>
                    </div>
                    <div style={{marginTop:"30px"}} className="form-group">
                        <button className="btn btn-secondary btn-block">Create</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreateOffice;