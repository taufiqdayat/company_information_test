import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onSelectCompany, fetchOfficeById } from '../../../redux/actions';
import {FaTimes} from 'react-icons/fa';
import {Link} from 'react-router-dom';

class OfficePage extends Component {
    constructor(props){
        super(props);

        this.props.onSelectCompany(this.props.match.params.id)
        this.props.fetchOfficeById(this.props.match.params.id)
    }

    render() {
        const {selectedCompany, listOfficeById} = this.props;
        return (
            <div className="container" style={{marginTop:"40px", display:"flex", justifyContent:"center"}} >
                <div className="card" style={{padding:"15px 30px"}}>
                    <div className="row">
                        <div className="col-12">
                            <h3>{selectedCompany.name}</h3>
                            <hr/>
                            <div className="row">
                                <div className="col-12">
                                    <b>Address</b>
                                    <p>{selectedCompany.address}</p>
                                </div>
                                <div className="col-12">
                                    <b>Revenue</b>
                                    <p>{selectedCompany.revenue}</p>
                                </div>
                                <div className="col-12" style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                                    <div>
                                        <b>Phone No</b>
                                        <p>{selectedCompany.phone}</p>
                                    </div>
                                    <Link to="/overview">
                                        <button className="btn btn-primary">
                                            Back to Overview
                                        </button>
                                    </Link>
                                </div>
                            </div>
                            <hr />
                            <h3>Offices</h3>
                            <div className="row" style={{marginTop:"30px"}}>
                                {
                                    listOfficeById.length>0
                                    &&
                                    listOfficeById.map((row,id)=>(
                                        <div className="col-6" key={id}>
                                            <div className="card">
                                                <div className="card-header" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                                                    {row.name}
                                                    <button className="btn btn-icon">
                                                        <FaTimes />
                                                    </button>
                                                </div>
                                                <div className="card-body">
                                                    <b>Location :</b>
                                                    <p>{row.location}</p>
                                                    <b>Office Start Date :</b>
                                                    <p>{row.startDate}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mtp = ({company, office}) => {
    const {selectedCompany} = company;
    const {listOfficeById} = office;
    return {selectedCompany, listOfficeById}
}

export default connect(mtp,{onSelectCompany, fetchOfficeById}) (OfficePage);