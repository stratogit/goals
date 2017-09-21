import React, { Component } from 'react';
import { connect } from 'react-redux'
import { deleteGoalRef, goalRef } from '../Firebase';

class Goalitem extends Component {

    deleteGoal() {
        const { email } = this.props.user;
        const { title, serverKey } = this.props.goal;
      //  console.log('props',this.props.goal);
        goalRef.child(serverKey).remove();
        deleteGoalRef.push({ email, title });

    }

    render() {
        const { email, title } = this.props.goal;
        return (
            <div style={{ margin: '5px' }}>
                <strong>
                    {title}
                </strong>
                <span style={{ marginRight: "5px" }}> submitted by <em> {email} </em> </span>
                <button
                    className="btn btn-sm btn-primary"
                    onClick={() => this.deleteGoal()}
                >
                    Delete
                </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps, null)(Goalitem);