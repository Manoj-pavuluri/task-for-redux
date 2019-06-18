import React, { PureComponent } from 'react';
import { connect } from 'react-redux'
import { getPosts } from './Actions';



class Login extends PureComponent {
    state = {
        customerId:'',
        Number:'',
       gender:''
     };
    getData = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    submit=(e)=>{
        e.preventDefault()
        this.props.Getpostsdata(this.state)
        this.props.history.push('/table',this.state)
    }
    gender=(event)=>{
        this.setState({gender:event.target.value})
    }
    
    render() {
        return (
            <div>
                <div className="container">
                    <form>
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" className="form-control" placeholder="Enter email" name="Name" onChange={this.getData} />
                        </div>
                        <div className="form-group">
                            <label>Customer id:</label>
                            <input type="text" className="form-control"  placeholder="Enter password" name="customerId" onChange={this.getData} />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" className="form-control"  placeholder="Enter password" name="Email" onChange={this.getData}/>
                        </div>
                        <div className="form-group">
                            <label>Phone Number:</label>
                            <input type="number" className="form-control"  placeholder="Enter password" name="Number" onChange={this.getData} />
                        </div>
                        <select className="dropdown form-control" onChange={this.gender}>
                          <option>select gender</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <div className="checkbox">
                            <label><input type="checkbox" name="remember" /> Remember me</label>
                        </div>
                        <button className="btn btn-success" onClick={this.submit}>Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps =state=>({
    data:state
})

const mapDispatchToProps = dispatch => ({
    Getpostsdata: (e) => dispatch(getPosts(e))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);