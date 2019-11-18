import React, { Component } from 'react';
import axios from 'axios';
import {link} from 'react-router-dom';

export default class AddMeetup extends Component {

addMeetup(newMeetup){
    console.log(newMeetup);
   axios.request({
       method: 'post',
       url: 'http://localhost:3000/api/meetupzs',
       data: newMeetup
   }).then(response =>{
        this.props.history.push("/");
   }).catch(err =>console.log(err));
}

    onSubmit(e){
       const newMeetup ={
           name: this.refs.name.value,
           city: this.refs.city.value,
           address: this.refs.address.value
       }
       this.addMeetup(newMeetup);
        e.preventDefault();
    }
   
    render() {
        return (
            <div>
                <br />
                <h1>Add AddMeetup</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field" >
                        <input type="text" name="name"ref="name"/>
                        <label  htmlFor="name">name</label>
                    </div>
                    <div className="input-field" >
                        <input type="text" name="city"ref="city"/>
                        <label  htmlFor="city">city</label>
                    </div>
                    <div className="input-field" >
                        <input type="text" name="address"ref="address"/>
                        <label  htmlFor="address">address</label >
                    </div>
                    <input type="submit" className="btn" value="save" />
                </form>
            </div>
        )
    }
}
