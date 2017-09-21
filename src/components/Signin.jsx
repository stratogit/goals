import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {firebaseApp} from '../Firebase';

class Signin extends Component {
constructor(props){
    super(props);
    this.state = {
        email:'',
        password:'',
        error:{
            message:''
        }
    }
}

signIn(){
    console.log('signin state',this.state);
    const{email,password} = this.state;
    firebaseApp.auth().signInWithEmailAndPassword(email,password)
        .catch(error=>{
            this.setState({error})
        }

        )

}

    render(){
        return (
            <div className="form-inline" style={{margin: '5%'}}>
                 <h2> Sign In</h2>
                 <div className="form-group">
                     <input
                         className="form-control"
                         type="text"
                         style={{marginRight: '5px'}}
                         placeholder="email"
                         onChange={event =>this.setState({email:event.target.value})}
                     />
                      <input
                         className="form-control"
                         type="password"
                         style={{marginRight: '5px'}}
                         placeholder="password"  
                         onChange={event =>this.setState({password:event.target.value})}
                     />
                     <button className="btn btn-primary"
                             type="button"
                             onClick={() => this.signIn()}
                      >
                         Sign In
                     </button>
                 </div>
                 <div>{this.state.error.messsage}</div>
                 <div><Link  to={'/Signup'}> Please sign up Instead </Link> </div>
            </div>
            
         )
     }
}

export default Signin;