import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Meetsup from './Meetsup';
import About from './About';
import MeetupDetail from './MeetupDetail';
import AddMeetup from './AddMeetup';

const Main = () => {
    return (
        <Switch>
  <Route exact path="/" Component={Meetsup} >
      <Meetsup/>
  </Route>
  <Route exact path="/about" Component={About}>
      <About />
  </Route>
  {/* <Route exact path="/meetsup/:id" Component={MeetupDetail}>
      <MeetupDetail />
  </Route> */}

        <Route exact path="/meetsup/:id" 
            render={(props) => <MeetupDetail {...props} />}
        />
        <MeetupDetail />
        
        <Route exact path="/addMeetup" Component={AddMeetup}>
            <AddMeetup/>
        </Route>
        </Switch>
    );
}

export default Main;
