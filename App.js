import React, { Component } from 'react'
import maincontext from './maincontext';
import './App.css';
import {Route} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import { yieldExpression } from '@babel/types';
import Header from './Header Component/Header';
import Main from './Main Body Component/Main';
import ProgressBar from 'progressbar.js';
import Report from './Report'
 class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      leads: 3,
      calls: 4,
      emails:5,
      screens: {
        passed : 2,
        failed : 5,
      },
      sourcedCandidates : 0,
      PSS:0,
      Offer:2,

    }
  }
  addLead=()=>{
    let number =this.state.leads
   
    this.setState({
      leads:number+1
    })
  }
  addCall=()=>{
    let number =this.state.calls
    
    this.setState({
      calls:number+1
    })
  }
  addScreenp=()=>{
    this.setState({
      screens:{
      passed:this.state.screens.passed+1,
      failed: this.state.screens.failed
      }
    })
    console.log(this.state)
  }
  addScreenf=()=>{
    this.setState({
      screens:{
        passed:this.state.screens.passed,
        failed: this.state.screens.failed+1
      }
    })
  }
  addSourced(){
   
  }
  addEmail=()=>{
    let number =this.state.emails
   
    this.setState({
      emails:number+1
    })
  }
  subLead=()=>{
    let number =this.state.leads
   
    this.setState({
      leads:number-1
    })
  }
  subCall=()=>{
    let number =this.state.calls
   
    this.setState({
      calls:number-1
    })
  }
  subScreenp=()=>{
  
    this.setState({
      screens:{
      passed:this.state.screens.passed-1,
      failed:this.state.screens.failed
      }
    })
  }
  subScreenf=()=>{
    this.setState({
      screens:{
        passed:this.state.screens.passed,
        failed:this.state.screens.failed-1
      }
    })
  }
  subSourced(){
    
  }
  subEmail=()=>{
    let number =this.state.emails
   
    this.setState({
      emails:number-1
    })
  }
  addPSS=()=>{
    this.setState({
      PSS:this.state.PSS+1
    })
  }
  subPSS=()=>{
    this.setState({
      PSS:this.state.PSS-1
    })
  }
  addOffer=()=>{
    this.setState({
      Offer:this.state.Offer+1
    })
  }
  subOffer=()=>{
    this.setState({
      Offer:this.state.Offer-1
    })
  }

  render() {
    const contextValue = {
      database:this.state,
      addLead: this.addLead,
      addCall:this.addCall,
      addScreenp:this.addScreenp,
      addScreenf:this.addScreenf,
      addSourced:this.addSourced,
      addEmail:this.addEmail,
      subLead:this.subLead,
      subCall: this.subCall,
      subScreenp:this.subScreenp,
      subScreenf:this.subScreenf,
      subSourced:this.subSourced,
      subEmail:this.subEmail,
      addPSS:this.addPSS,
      subPSS:this.subPSS,
      addOffer:this.addOffer,
      subOffer:this.subOffer,
    }
    
    return (
      <>
      
      <maincontext.Provider value = {contextValue}>
      <Header />
        <Route exact path = '/' 
          render = {()=>{
            return(
            <Main />
            )
          }} />

        <Route path ={`/Report/:reportType`} 
          render = {() =>{
            return(
              <Report />
            )
          }}
        />
      </maincontext.Provider>
      </>
    )
  }
}

export default withRouter(App)