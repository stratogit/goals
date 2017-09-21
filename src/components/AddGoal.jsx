import React, { Component } from 'react';
import {connect} from 'react-redux';
import {goalRef} from '../Firebase';


class AddGoal extends Component {
    constructor(props){
        super(props);
        this.state = {
            title:''
        }
    }

    addGoal(){
        console.log('this.state',this);
        const {title} = this.state;
        const {email} = this.props.user;
        goalRef.push({email,title});

    }
 
    render() {
        return (
            <div className="form-inline">
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Add your goal"
                        className="form-control"
                        style={{ marginRight: '5px' }}
                        onChange = {event => this.setState({title: event.target.value})}
                    />
                    <button
                        className="btn btn-sicess"
                        type="button"
                        onClick = { () => this.addGoal() }
                    > Submit
                </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps (state){
    const {user} = state;
   // console.log('state in addgoal jsx',state)
    return{

        user
    }

}

export default connect(mapStateToProps,null) (AddGoal);