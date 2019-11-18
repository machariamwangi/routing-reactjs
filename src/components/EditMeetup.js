import React, { Component } from 'react';
import axios from 'axios';



export default class EditMeetup extends Component {
    constructor(props){
        super(props);
        this.setState={
            id: '',
            name: '',
            city: '',
            address: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
     componentDidMount(){
         this.getMeetupDetails();
     }
    getMeetupDetails(){
        let meetupId = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/meetupzs/${meetupId}`)
        .then(response => {
            this.setState({
                id: response.data.id,
                name: response.data.name,
                city: response.data.city,
                address:response.data.address
            }, () =>{
                console.log(this.state);
            })
        })
        .catch(error=> console.log(error));
    }

    addMeetup(newMeetup){
        console.log(newMeetup);
       axios.request({
           method: 'post',
           url: 'http://localhost:3000/api/meetupzs',
           data: newMeetup
       }).then(response =>{
            this.props.hashHistory.push('/');
       }).catch(err =>console.log(err));
    }
    EditMeetup(newMeetup){
        axios.request({
            method: 'put',
            url: `http://localhost:3000/api/meetupzs/${this.state.id}`,
            data: newMeetup
        }).then(response =>{
             this.props.hashHistory.push('/');
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

    handleInputChange (e){
        const target = e.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]:value
        });
    }
    
   
    render() {
        return (
            <div>
                <br />
                <h1> EditMeetup</h1>
                <form onSubmit={this.onSubmit.bind(this)}>
                    <div className="input-field" >
                        <input type="text" name="name"ref="name" value={this.state.name} onChange={this.handleInputChange} />
                        <label  htmlFor="name">name</label>
                    </div>
                    <div className="input-field" >
                        <input type="text" name="city"ref="city" value={this.state.city} onChange={this.handleInputChange} />
                        <label  htmlFor="city">city</label>
                    </div>
                    <div className="input-field" >
                        <input type="text" name="address"ref="address" value={this.state.address} onChange={this.handleInputChange} />
                        <label  htmlFor="address">address</label >
                    </div>
                    <input type="submit" className="btn" value="save" />
                </form>
            </div>
        )
    }
}
