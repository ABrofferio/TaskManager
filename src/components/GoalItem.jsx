import React,{Component} from 'react';
import {connect} from 'react-redux';
import {completeGoalRef, goalRef} from '../firebase';

class GoalItem extends Component {
  completeGoal(){
    const{email}=this.props.user;
    const{title, serverKey}=this.props.goal;
    goalRef.child(serverKey).remove();
    completeGoalRef.push({email,title});
  }
  render(){
    const{email, title}=this.props.goal;
    return(
      <div>
        <strong>{title}</strong>
        <span> Submitted by: <em>{email} </em></span>
        <button
          className="btn btn-sm btn-primary"
          onClick={()=>this.completeGoal()}
          >
          Complete
        </button>
      </div>
    )
  }
}
function mapStateToProps(state){
  const{user}=state;
  return{
    user
  }
}
export default connect(mapStateToProps,null)(GoalItem);
