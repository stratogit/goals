import React, {Component} from 'react';
import {firebaseApp} from '../Firebase'

class Signup extends Component {
   constructor(props){
       super(props);
       this.state = {
           email:'',
           password:'',
           error:{
               messsage:''
           }
       }
   }

   signUp(){
       console.log('state',this.state);
       const {email,password} = this.state;
       firebaseApp.auth().createUserWithEmailAndPassword(email,password)
       .catch(error=>{
           //console.log('error',error)
           this.setState({error})
       })
   }
   
   
   
   
    render(){
        return (
           <div className="form-inline" style={{margin: '5%'}}>
                <h2> Sign up</h2>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="email"
                        onChange={event =>this.setState({email:event.target.value})}
                    />
                     <input
                        className="form-control"
                        type="password"
                        placeholder="password"  
                        onChange={event =>this.setState({password:event.target.value})}
                    />
                    <button className="btn btn-primary"
                            type="button"
                            onClick={() => this.signUp()}
                    
                    >
                        Signup
                    </button>
                </div>
                <div>{this.state.error.messsage}</div>
           </div>
           
        )
    }
}

export default Signup;