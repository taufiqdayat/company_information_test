import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment'
import { onAddOffice } from '../../../redux/actions/Office';

class CreateOffice extends Component {
    constructor(props){
        super(props);
        this.state = {
            id:3,
            company_id:0,
            name:"",
            location:["",""],
            start_date:""
        }
    }

    sendRequest(){
        // if(this.state.company_id<=0){
        //     alert("error")
        // }
        const payload = {
            id:this.state.id+1,
            name:this.state.name,
            company_id:this.state.company_id,
            location:this.state.location,
            start_date:moment(this.state.start_date).format('DD/MM/YYYY')
        }

        this.props.onAddOffice(payload)
        console.log(payload)
        this.setState({id:this.state.id+1, company_id:0, name:"", location:["",""], start_date:""})
    }

    render() {
        const {listCompany} = this.props;
        let loc = this.state.location.slice()
        return (
            <div>
                <h3>Create Office</h3>
                <div style={{margin:"0% 3%"}}>
                    <div className="form-group">
                        <label className="control-label">Name :</label>
                        <input placeholder="Name" className="form-control" type="text" value={this.state.name} onChange={(e)=>this.setState({name:e.target.value})} />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Location :</label>
                        <div className="row">
                            <div className="col-6">
                                <input placeholder="Latitude" className="form-control" type="number" value={this.state.location[0]} onChange={(e)=>{
                                    loc[0]=parseInt(e.target.value)
                                    this.setState({location:loc})
                                }}/>
                            </div>
                            <div className="col-6">
                                <input placeholder="Longitude" className="form-control" type="number" value={this.state.location[1]} onChange={(e)=>{
                                    loc[1]=parseInt(e.target.value)
                                    this.setState({location:loc})
                                }} />
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label className="control-label">Office Start Date :</label>
                        <input className="form-control" value={this.state.start_date} onChange={(e)=>this.setState({start_date:e.target.value})} type="date" />
                    </div>
                    <div className="form-group">
                        <label className="control-label">Company :</label>
                        <select value={this.state.company_id} onChange={(e)=>this.setState({company_id:parseInt(e.target.value)})} className="custom-select">
                            <option value="">Choose Company</option>
                            {
                                listCompany.length>0
                                &&
                                listCompany.map((row,id)=>(
                                    <option key={id} value={row.id}>{row.name}</option>
                                ))
                            }
                        </select>
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

export default connect(mtp, {onAddOffice}) (CreateOffice);