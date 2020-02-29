import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onSelectCompany, fetchOfficeById, onDeleteOffice, showMessage } from '../../../redux/actions';
import {FaTimes} from 'react-icons/fa';
import { Modal, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';

class OfficePage extends Component {
    constructor(props){
        super(props);
        this.state={
            delModal:false,
            id:null,
            company_id:null,
        }
        this.props.onSelectCompany(this.props.match.params.id)
        this.props.fetchOfficeById(this.props.match.params.id)
    }

    handleDelete(){
        this.props.onDeleteOffice(this.state.id, this.state.company_id);
        this.setState({id:null, company_id:null, delModal:false})
        this.props.showMessage("Success Delete Office", "Info")
    }

    render() {
        const {selectedCompany, listOfficeById, match} = this.props;
        return (
            <div className="container" style={{marginTop:"40px", display:"flex", justifyContent:"center"}} >
                <div className="card" style={{padding:"15px 30px", width:"70%"}}>
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
                                    ?
                                    listOfficeById.map((row,id)=>(
                                        <div className="col-6" key={id}>
                                            <div className="card" style={{marginBottom:"20px"}}>
                                                <div className="card-header" style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                                                    {row.name}
                                                    <button className="btn btn-icon" onClick={()=>this.setState({delModal:true, id:row.id, company_id:match.params.id})}>
                                                        <FaTimes />
                                                    </button>
                                                </div>
                                                <div className="card-body">
                                                    <b>Location :</b>
                                                    <p>{row.location}</p>
                                                    <b>Office Start Date :</b>
                                                    <p>{row.start_date}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                    :
                                    (
                                        <div className="col-12">
                                            <h3 style={{textAlign:"center"}}>There is no office created yet</h3>
                                        </div>
                                    )
                                }
                                <Modal aria-labelledby="contained-modal-title-vcenter" centered show={this.state.delModal} onHide={()=>this.setState({delModal:false, id:null})}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Alert</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        Are you sure to delete?
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button onClick={()=>this.handleDelete()}>Delete</Button>
                                    </Modal.Footer>
                                </Modal>
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
    const {listOfficeById, isUpdate} = office;
    return {selectedCompany, listOfficeById, isUpdate}
}

export default connect(mtp,{onSelectCompany, fetchOfficeById, onDeleteOffice, showMessage}) (OfficePage);