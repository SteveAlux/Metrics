import React, { Component } from 'react'
import StepProgressBar from './StepProgressBar';
import maincontext from '../maincontext';
import {NavLink} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class Main extends Component {

   

    render() {
      
        return (
            <maincontext.Consumer>
                {(context) =>(
            <article>
            <div id = 'container_leads' className ='container leads'>
                <h5>Leads:{context.database.leads}</h5>
                <StepProgressBar barType='Lead'/>
                <h6><NavLink to={`/Report/Lead`}>></NavLink></h6>
            </div>
            <div id='container_calls' className='container calls'>
                <h5>Calls:{context.database.calls}</h5>
                <StepProgressBar barType='Call'/>
                <h6> <NavLink to={`/Report/Call`}>></NavLink></h6>
            </div>
            <div id='container_emails' className='container emails'>
                <h5>Emails:{context.database.emails}</h5>
                <StepProgressBar barType='Email'/>
                <h6> <NavLink to={`/Report/Email`}>></NavLink></h6>
            </div>
            <div id='container_screens' className='container screens'>

                <h5>Total Screens:{context.database.screens.passed + context.database.screens.failed}</h5>
                <StepProgressBar barType='totalScreens'/>
                <h6>Total Passed Screens:{context.database.screens.passed}</h6>
                <StepProgressBar barType= 'passScreens' />
                
                <h6> <NavLink to={`/Report/passScreens`}>></NavLink></h6>
                <h6>Total Failed Screens:{context.database.screens.failed}</h6>
                <StepProgressBar barType= 'failedScreens'/>
                <h6> <NavLink to={`/Report/failedScreens`}>></NavLink></h6>
              
            </div>
            <div id='container_pss' className='container pss'>
                <h5>Phone Screens Scheduled:{context.database.PSS}</h5>
                <StepProgressBar barType='PSS'/>
                <h6> <NavLink to={`/Report/PSS`}>></NavLink></h6>
            </div>
            <div id='container_Offer' className='container offer'><NavLink to={`/Report/Offer`}>
                <h5>Offers Accepted:{context.database.Offer}</h5>
                <StepProgressBar barType='Offer'/>
                <h6> <NavLink to={`/Report/Offer`}>></NavLink></h6>
                </NavLink>
            </div>

            </article>
        )}
            </maincontext.Consumer>
        )
    }
}
export default withRouter(Main)