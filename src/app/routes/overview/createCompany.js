import React, { Component } from 'react';
import {connect} from 'react-redux';
import { onAddCompany } from '../../../redux/actions';

class CreateCompany extends Component {
    constructor(){
        super();
        this.state = {
            id:1,
            name:"",
            address:"",
            revenue:"",
            phoneCode:"",
            phone:"",
        }
    }

    sendRequest(){
        const payload = {
            id:this.state.id+1,
            name:this.state.name,
            address:this.state.address,
            revenue:this.state.revenue,
            phone:`(${this.state.phoneCode}) ${this.state.phone}`
        }

        this.props.onAddCompany(payload)
        this.setState({id:this.state.id+1})
    }

    render() {
        return (
            <div>
                <h3>Create Company</h3>
                <div style={{margin:"0% 3%"}}>
                    <div className="form-group">
                        <label className="control-label">Name :</label>
                        <input className="form-control" type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Address :</label>
                        <input className="form-control" type="text" value={this.state.address} onChange={(e)=>this.setState({address:e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Revenue :</label>
                        <input className="form-control" type="number" value={this.state.revenue} onChange={(e)=>this.setState({revenue:e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Phone No :</label>
                        <div className="row">
                            <div className="col-3">
                                <input className="form-control" type="number" value={this.state.phoneCode} onChange={(e)=>this.setState({phoneCode:e.target.value})} />
                            </div>
                            <div className="col-9">
                                <input className="form-control" type="number" value={this.state.phone} onChange={(e)=>this.setState({phone:e.target.value})} />
                            </div>
                        </div>
                    </div>
                    <div style={{marginTop:"30px"}} className="form-group">
                        <button className="btn btn-secondary btn-block" onClick={()=>this.sendRequest()}>Create</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mtp = ({company}) => {
    const {listCompany} = company
    return {listCompany}
}

export default connect(mtp, {onAddCompany}) (CreateCompany);