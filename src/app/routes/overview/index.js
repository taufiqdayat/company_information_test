import React, { Component } from 'react';
import CreateCompany from './createCompany';
import CreateOffice from './createOffice';
import ListCompany from './listCompany';

class OverviewPage extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:"40px"}}>
                <div className="row">
                    <div className="col-sm-6">
                        <CreateCompany />
                    </div>
                    <div style={{borderLeft:"1px solid #0000001a"}} className="col-sm-6">
                        <CreateOffice />
                    </div>
                    <div className="col-sm-12">
                        <ListCompany />
                    </div>
                </div>
            </div>
        );
    }
}

export default OverviewPage;