import React, {useState} from 'react';
import './App.css';
import moment from 'moment';
import Datetime from 'react-datetime';

function App() {

  const [isoString, setIsoString] = useState(moment().toISOString());

  function onDateInput(e, value){
    setIsoString(e.toISOString());
  }

  return (
    <div className="App">
      <h3>Date time to UTC ISO string</h3>
      <p>A simple converter for getting the ISO string of specifc dates in UTC</p>
      <p>Datetime:</p>
      <Datetime className="dateTime"
        onChange={(e)=>onDateInput(e)}
        defaultValue={moment(isoString)}
        />
      <p>UTC ISO String:</p>
      <p>{isoString}</p>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/bcaton85/date-picker-to-utc">Github code</a>
    </div>
  );
}

export default App;
