import React, { Component } from 'react';
import './App.css';
import Modal from 'react-awesome-modal'
export default class Tabledata extends Component {
    state={
        visible : false,
       data:{Name:'',customerId:''},
       data1:{Name:'',customerId:''}
    }
    openModal() {
        this.setState({
            visible : true,data:this.props.history.location.state
        });
    }

    closeModal() {
        this.setState({
            visible : false,data1:this.state.data
        });
    }
    inputData=(event)=>{
       this.setState({data:{[event.target.name]:event.target.value}})
    }
     save=(event)=>{
        this.setState({data1:this.state.data,visible : false,[event.target.name]:event.target.value});
     }
     inputData1=(event)=>{
        this.setState({data1:{[event.target.name]:event.target.value}})
     }
     
    render() {
        return (
            <div>
                <section>
                <input type="button" value="Open" onClick={() => this.openModal()} />
                <Modal visible={this.state.visible} width="400" height="300" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <div>
                        {this.state.data1.Name?<input type="text" value={this.state.data1.Name} onChange={this.inputData1} name="Name"/>:<input type="text" value={this.state.data.Name} onChange={this.inputData} name="Name"/>}
                            <div>
                            <input type="text" value={this.state.data.customerId} onChange={this.inputData} name="customerId"/>
                            </div>
                        </div>
                        <button onClick={this.save}>Save</button>
                        <button onClick={() => this.closeModal()}>Close</button>
                    </div>
                </Modal>
            </section>
                <div className="header container">
                    <div className="row">
                        <div className="col-md-12 top" >
                            <div className="col-md-1"></div>
                            <div className="col-md-10">
                                <div className="panel panel-body header-body" >
                                    <i className="fa fa-search font-icon" aria-hidden="true" ></i>
                                </div>
                                <div>
                                    <div className="panel panel-body table-row" >
                                        <table className="table table-striped" >
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Customer id</th>
                                                    <th>Email</th>
                                                    <th>Phone</th>
                                                    <th>Gender</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    {this.state.data1.Name?<td>{this.state.data1.Name}</td>:<td>{this.props.history.location.state.Name}</td>}
                                                    <td>{this.props.history.location.state.Name}</td>
                                                    <td>{this.props.history.location.state.customerId}</td>
                                                    <td>{this.props.history.location.state.Email}</td>
                                                    <td>{this.props.history.location.state.Number}</td>
                                                    <td>{this.props.history.location.state.gender}</td>
                                                    <td><button className="btn btn-danger" onClick={()=>this.openModal(this.props.history.location.state)}><i className="fa fa-pencil" aria-hidden="true"></i></button></td>
                                                </tr>
                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
