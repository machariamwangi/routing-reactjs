import React, { Component } from 'react';
import axios from 'axios';

import MeetupItem from './MeetupItem';

class Meetsup extends Component {
    constructor(props){
        super(props);
        this.state ={
           meetsup: []
        }
    }
    componentDidMount(){
        this.getMeetups();
    }
    getMeetups(){
        axios.get('http://localhost:3000/api/meetupzs')
        .then(response => {
            this.setState({meetsup: response.data}, ()=>{
                // console.log(this.state);
            })
        })
        .catch(error=> console.log(error));
    }
    render() {
        const meetupItem = this.state.meetsup.map((meetup, i)=>{
            return(
              <MeetupItem  key={meetup.id} item={meetup} />
            )
        })
        return (
            <div>
                <h1>Meetsup</h1>
                <ul className="collection">
                    {meetupItem}
                </ul>
            </div>
        )
    }
}
export default  Meetsup;