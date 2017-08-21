import React, {Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';
/*import {connect} from 'react-redux';
import {goalRefTwo} from '../firebase';*/

class SignIn extends Component {
  constructor(props){
    super(props)
    this.state = {
      email: '',
      password: '',
      error:{
        message:''
      }
    }
  }

  signIn() {
    console.log('this.state', this.state);
    const {email, password} = this.state;
    console.log('this.state roundtwo', this.state);
    firebaseApp.auth().signInWithEmailAndPassword(email, password)
      .catch(error =>{
        this.setState({error})
      })
    /*goalRefTwo.push({email:this.state.email, password:this.state.password});*/
  }
  render(){
    return(
      <div className="form-inline">
        <h2>Sign In</h2>
        <div className="form-group">
          <input
            className="form-control"
            type="text"
            placeholder="email"
            onChange={event => this.setState({email:event.target.value})}
          />
          <input
            className="form-control"
            type="password"
            placeholder="password"
            onChange={event => this.setState({password:event.target.value})}
          />
        <button
          className="btn btn-primary"
          type="button"
          onClick={()=>this.signIn()}
          >
          Sign In
        </button>
        </div>
        <div>{this.state.error.message}</div>
        <div><Link to={'/signup'}>Need to Sign Up</Link></div>
      </div>
    )
  }
}
/*function mapStateToProps(state){
  const {email} = state;
  const {password} = state;
  return{
    email,
    password
  }
}
export default connect(mapStateToProps, null)(SignIn);*/
export default SignIn;
