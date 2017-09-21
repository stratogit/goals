import React, {Component} from 'react';
import {connect} from 'react-redux';
import {firebaseApp} from '../Firebase';
import AddGoal from './AddGoal';
import GoalList from './GoalList';
import DeleteGoalList from './DeleteGoalList'

class App extends Component {

    signOut(){
        firebaseApp.auth().signOut();
    }

    render(){
        return (
            <div style={{margin:'5px'}}>
                <div> 
                    <h3> All items List </h3> 
                    <AddGoal />
                    <hr />
                    <h4> List of items</h4>
                    <GoalList />              
                    <hr />
                    <h4>List of deleted Items </h4>
                    <DeleteGoalList />
                    <hr />

                </div>

                    <button 
                    className="btn btn-danger"
                    onClick = {() => this.signOut()}
                    >
                    Sign Out
                    </button>
            </div>
        )
    }
}

function mapStateToProps (state){
   // console.log('state in apps',state);
    return {}
}

export default connect(mapStateToProps,null)(App);