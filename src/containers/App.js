import "./App.css";
import React, { Component } from "react";
import { connect } from "react-redux";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import Header from "../components/Header";

import { setSearchField, requestRobots } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    onSearchChange: e => dispatch(setSearchField(e.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};
class App extends Component {
  // onSearchChange = e => {
  //   this.props.setSearchField(e.target.value);
  //   // this.setState({ searchField: e.target.value });
  // };
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users")
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(users => {
    //     this.setState({ robots: users });
    //   });
    this.props.onRequestRobots();
  }
  render() {
    const { searchField, robots, isPending } = this.props;

    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    if (isPending) {
      return <h1>Loading</h1>;
    }
    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={this.props.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={filteredRobots} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

const mapStateToProps = ({ search, robots }) => {
  return {
    searchField: search.searchField,
    robots: robots.robots,
    isPending: robots.isPending,
    error: robots.error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
