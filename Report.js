import React, { Component } from 'react'
import {withRouter} from 'react-router-dom';
import StepProgressBar from './Main Body Component/StepProgressBar'
import maincontext from './maincontext';
class Report extends Component {

    addType(context,callback){
        let mainMethod22 = `context.${callback}`
        if(mainMethod22=== 'context.addCall'){
            let task = context.addCall
            return task()
        }
        else if(mainMethod22=== 'context.addLead'){
            let task = context.addLead
            return task()
        }
        else if(mainMethod22=== 'context.addScreenp'){
            let task = context.addScreenp
            return task()
        }
        else if(mainMethod22=== 'context.addScreenf'){
            let task = context.addScreenf
            return task()
        }
        else if(mainMethod22=== 'context.addEmail'){
            let task = context.addEmail
            return task()
        }
        else if (mainMethod22 === 'context.addPSS'){
            let task = context.addPSS
            return task()
        }
        else if (mainMethod22 === 'context.addOffer'){
            return context.addOffer()
        }
        
    }   

    subType(context,callback){
        
        let mainMethod22 = `context.${callback}`
        
        if(mainMethod22=== 'context.addCall'){
            let task = context.subCall
            return task()
        }
        
        else if(mainMethod22=== 'context.addLead'){
            let task = context.subLead
            return task()
        }
        else if(mainMethod22=== 'context.addScreenp'){
            let task = context.subScreenp
            return task()
        }
        else if(mainMethod22=== 'context.addScreenf'){
            let task = context.subScreenpf
            return task()
        }
        else if(mainMethod22=== 'context.addEmail'){
            let task = context.subEmail
            return task()
        }
        else if (mainMethod22 === 'context.addPSS'){
            let task = context.subPSS
            return task()
        }
        else if (mainMethod22 === 'context.addOffer'){
            let task=context.subOffer
            return task()
        }
        
        
    }   
    findType(){
        let type = this.props.match.params.reportType
        if (type==='passScreens'){
            let callback = 'addScreenp'
            return callback
        }
        else if (type==='failedScreens'){
            let callback ='addScreenf'
            return callback
        }
        else{
            let callback = `add${type}`
            return callback
        }
    }

    render() {

        let callback = this.findType();
        let type = this.props.match.params.reportType
        return (
            <maincontext.Consumer>
                {(context)=>(
            <>
            <h4 className='Report'>{type}</h4>
            <StepProgressBar barType ={type} />
            <button onClick= {()=>{this.addType(context,callback)}}>ADD {type}</button>
            <button onClick= {() =>{this.subType(context,callback)}}>Remove {type}</button>
            <button onClick ={()=>{this.props.history.push('/')}} >Go Back</button>
            </>
                )}
            </maincontext.Consumer>
        )
    }
}
export default withRouter(Report)
