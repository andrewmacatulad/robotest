import "./MainPage.css";
import React, { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import Header from "../components/Header";

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }
  filterRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };
  render() {
    const { isPending } = this.props;

    if (isPending) {
      return <h1>Loading</h1>;
    }
    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange={this.props.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList robots={this.filterRobots()} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
