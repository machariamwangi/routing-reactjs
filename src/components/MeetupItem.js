import React, { Component } from 'react'
import {Link} from 'react-router-dom';

 class MeetupItem extends Component {
     constructor(props){
         super(props);
         this.state ={
             item: props.item
         }
     }
    render() {
        return (
            // <div>
            <li className="collection-item">
              <Link to={`/meetsup/${this.state.item.id}`}>  {this.state.item.name}</Link>
                </li>


            // {/* <li className="collection-item">{this.state.item.city}</li>
            // <li className="collection-item">{this.state.item.address}</li> */}
            // {/* </div> */}
        )
    }
}
export default MeetupItem;