import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setDeleted} from '../actions';
import {deleteGoalRef} from '../Firebase';

class DeleteGoalList extends Component {
    componentDidMount(){
        deleteGoalRef.on('value',snap => {
            let deleteGoals=[];
            snap.forEach(deleteGoal =>{
                const {email, title} = deleteGoal.val();
                deleteGoals.push({email,title})
                
            })
            console.log('delete', deleteGoals);
            this.props.setDeleted(deleteGoals);
        })
    }

    clearDeleted(){
        deleteGoalRef.set([]);
    }


    render(){
        return(
            <div>
                {
                    this.props.deleteGoals.map((deleteGoal,index) => {
                        const {title,email} = deleteGoal;
                        return (
                            <div key={index}>
                            <strong style={{ marginRight: "5px" }} > {title} </strong> completed by <em> {email} </em>
                            </div>
                        )
                    })
                }
                <button 
                    className="btn btn-primary"
                    onClick = {() => this.clearDeleted()  }
                >

                Clear
                </button>
            </div>
        )
    }
}

function mapStateToProps(state){
    const {deleteGoals} = state;
    return{
        deleteGoals
    }
}

export default connect(mapStateToProps, {setDeleted})(DeleteGoalList);