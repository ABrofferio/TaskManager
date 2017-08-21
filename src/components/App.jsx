import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firebaseApp} from '../firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import CompleteGoalList from './CompleteGoalList';

class App extends Component {
  render(){
    return(
      <div style={{margin: '5px'}}>
        <h3>Goal Coach</h3>
        <AddGoal />
        <hr />
        <GoalList />
        <hr />
        <h4>Complete Goals</h4>
        <CompleteGoalList />
        <button
          className="btn"
          onClick={()=>firebaseApp.auth().signOut()}
          >
          Sign Out
        </button>
      </div>
    )
  }
}

function mapStateToProps(state){
  //console.log('state', state);
  return{}
}

export default connect(mapStateToProps, null)(App);
