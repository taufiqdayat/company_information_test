import React, { Component } from 'react';
import {connect} from 'react-redux';
import {FaTimes} from 'react-icons/fa';

class ListCompany extends Component {
    render() {
        const {listCompany} = this.props;
        return (
            <div style={{marginBottom:"50px"}}>
                <hr />
                <h2>Companies</h2>
                <div className="row">
                {
                    listCompany.length>0
                    &&
                    listCompany.map((row, index)=>(
                        <div className="col-6" key={index} style={{marginBottom:"20px"}}>
                            <div className="card">
                                <div className="card-header" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                                    {row.name}
                                    <button className="btn btn-icon">
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
                }
                </div>
            </div>
        );
    }
}

const mtp = ({company}) => {
    const {listCompany} = company
    return {listCompany}
}

export default connect(mtp, {}) (ListCompany);