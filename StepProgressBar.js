import React, { Component } from 'react'
import maincontext from '../maincontext'

import 'react-circular-progressbar/dist/styles.css';
import {CircularProgressbar} from 'react-circular-progressbar'


export default class StepProgressBar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value:'',
    }
  }
  componentDidMount(){
    this.setState({
      value:this.props.barType
    })
  }
  createProgressBar(context){
    
    const value = context.database


    if (this.props.barType === 'Call'){
      
    return(
    
      <CircularProgressbar value={
        
        value.calls} maxValue={30} text={`${Math.ceil((value.calls/30)*100 )}%`}         className='circle circle_calls'/>  
    )
    }
    else if (this.props.barType === 'Email'){
      return(
        <CircularProgressbar value={value.emails} maxValue={10} text={`${value.emails *10}%`}         className='circle emails'/>  
      )
    }
    else if (this.props.barType === 'totalScreens'){
      return(
        <CircularProgressbar value={value.screens.passed + value.screens.failed} maxValue={10} text={`${(value.screens.passed+value.screens.failed) * 10}%`} className='circle screens'/>  
      )
    }
    else if (this.props.barType === 'passScreens'){
      return(
        <CircularProgressbar value={value.screens.passed} maxValue={10} text={`${value.screens.passed* 10}%`}         className='circle passed'/>  
      )
    }
    else if (this.props.barType === 'failedScreens'){
      return(
        <CircularProgressbar value={value.screens.failed} maxValue={10} text={`${value.screens.failed * 10}%`}         className='circle failed'/>  
      )
    }
    else if (this.props.barType === 'Lead'){
      return(
      <CircularProgressbar value ={value.leads} maxValue={10} text={`${value.leads* 10}%`} className = 'circle leads'/>
      )
    }
    else if(this.props.barType === 'PSS'){
      return(
        <CircularProgressbar value={value.PSS} maxValue={10} text={`${value.PSS*10}%`} className = 'circle PSS' />
      )
    }
    else if (this.props.barType === 'Offer'){
      return(
        <CircularProgressbar value = {value.Offer}  maxValue={10} text={`${value.Offer*10}%`} className= 'circle Offer'/>
      )
    }
  }
  render() {
    
return(
<maincontext.Consumer>
  {(context)=>(

  <>{this.createProgressBar(context)}</>

  )}
</maincontext.Consumer>
    );
  }
}

