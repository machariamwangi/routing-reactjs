import React, { Component } from 'react';
import {Link}  from 'react-router-dom';
import axios from 'axios';

class MeetupDetail extends Component {

    constructor(props){
        super(props);
        this.state={
           details:''
        }
    }

    componentDidMount(){
        this.getMeetup();
    }

    getMeetup(){
        let meetupId = this.props.match.params.id;
        axios.get(`http://localhost:3000/api/meetupzs/${meetupId}`)
        .then(response => {
            this.setState({details: response.data}, ()=>{
                //  console.log(this.state);
            });
        })
        .catch(error=> console.log(error));
    }

    render() {
        // const meetupItemDetail = this.state.meetsupDetail.map((MeetupDetail, i)=>{
        //     return(
        //         <div>
        //        {/* <MeetupItem  key={meetup.id} item={meetup} /> */}

        //         </div>
        //     )
        // })
        return (
            <div>
                <br />
                <Link className="btn gray" to="/">Back</Link>
                {/* <h1>meetsupDetail</h1> */}
                <h1>{this.state.details.name}</h1>
                <ul className="collection">
        <li className="collection-item">city:{this.state.details.city}</li>
        <li className="collection-item">address:{this.state.details.address}</li>
                </ul>
                <Link className="btn" to={`/meetsup/edit/${this.state.details.id}`}>Edit</Link>
                <button className="btn red right">Delete</button>
            </div>
        )
    }
}
export default  MeetupDetail;