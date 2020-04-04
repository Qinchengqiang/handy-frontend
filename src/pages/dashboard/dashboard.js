import React , {Component} from 'react'
import {Route, Link, Redirect,Switch} from 'react-router-dom'
import Sidebar from '../../components/sidebar/Sidebar'
import './dashboard.scss'
export default class Dashboard extends Component {
    render(){
        return (
           <div className="dashboard__container">
               <div>
               <Sidebar/>
               {/* hello world */}
               </div>
               <div>
                   <Switch>
                        <Route path="/users/services" render={props=><div>hello i am services</div>}/>
                        {/* <Route path="/users/services" render={()=>{}}/> */}

                       <Route path="/users/edit" component={()=><div>I am setting </div>}/>
                       <Route path="/users/orders" component={()=><div>I am orders </div>}/>
                   </Switch>
               </div>
          </div>
        )
    }
}