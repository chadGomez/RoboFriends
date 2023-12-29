import React, { useState, useEffect } from "react";
import Searchbox from '../components/SearchBox';
import Cardlist from "../components/Cardlist";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import './App.css';

const App = () => {
  const [state, setState] = useState({
    robots: [],
    searchfield: ''
  });

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setState({...state, robots: users}))
  }, [])

  const onSearchChange = event => {
    setState({ ...state, searchfield: event.target.value })
  };

  const filteredRobots = state.robots.filter(robot => {
    return robot.name.toLowerCase().includes(state.searchfield.toLowerCase())
  });


  return !state.robots.length
  ? <h1>Loading...</h1>
  : (
    <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <Searchbox searchChange={onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <Cardlist robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
  )
}

export default App;