import React, { Component } from 'react';
import {connect} from 'react-redux';
import {FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { onDeleteCompany } from '../../../redux/actions';

class ListCompany extends Component {
    render() {
        const {listCompany, onDeleteCompany} = this.props;
        return (
            <div style={{marginBottom:"50px"}}>
                <hr />
                <h2>Companies</h2>
                <div className="row">
                {
                    listCompany.length>0
                    ?
                    listCompany.map((row, index)=>(
                        <div className="col-6" key={index} style={{marginBottom:"20px"}}>
                            <div className="card">
                                <div className="card-header" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                                    <Link to={`/office/${row.id}`}>{row.name}</Link>
                                    <button className="btn btn-icon" onClick={()=>onDeleteCompany(row.id)}>
                                        <FaTimes />
                                    </button>
                                </div>
                                <div className="card-body">
                                    <b>Address :</b>
                                    <p>{row.address}</p>
                                    <b>Revenue :</b>
                                    <p>{row.revenue}</p>
                                    <b>Phone No :</b>
                                    <p>{row.phone}</p>
                                </div>
                            </div>
                        </div>
                    ))
                    :
                    (
                        <div className="col-sm-12">
                            <h5 style={{textAlign:"center"}}>No Company Found</h5>
                        </div>
                    )
                }
                </div>
            </div>
        );
    }
}

const mtp = ({company}) => {
    const {listCompany, isUpdate} = company
    return {listCompany, isUpdate}
}

export default connect(mtp, {onDeleteCompany}) (ListCompany);