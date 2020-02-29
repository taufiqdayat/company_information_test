import React, { Component } from 'react';
import {connect} from 'react-redux';
import {FaTimes} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { onDeleteCompany, showMessage } from '../../../redux/actions';
import { Modal, Button } from 'react-bootstrap';

class ListCompany extends Component {
    constructor(){
        super();
        this.state={
            delModal:false,
            id:null
        }
    }

    handleDelete(id){
        this.props.onDeleteCompany(id);
        this.setState({id:null, delModal:false})
        this.props.showMessage("Success Delete Company", "Info")
    }

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
                                    <button className="btn btn-icon" onClick={()=>this.setState({delModal:true, id:row.id})}>
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
                            <h5 style={{textAlign:"center"}}>There is no Company created yet</h5>
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
                        <Button onClick={()=>this.handleDelete(this.state.id)}>Delete</Button>
                    </Modal.Footer>
                </Modal>
                </div>
            </div>
        );
    }
}

const mtp = ({company}) => {
    const {listCompany, isUpdate} = company
    return {listCompany, isUpdate}
}

export default connect(mtp, {onDeleteCompany, showMessage}) (ListCompany);