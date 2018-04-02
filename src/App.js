import React, { Component } from "react";
import { Switch, Route, Link, matchPath } from "react-router-dom";
import "./app.css";

const Profile = ({ match, loading }) => {
  if (loading) return <div>Loading...</div>;
  return <div>You're on the Profile {match.params.profileId}</div>;
};
const SelectProfile = () => <div>Select a Profile</div>;

const getParams = pathname => {
  const matchProfile = matchPath(pathname, {
    path: `/profile/:profileId`,
  });
  return (matchProfile && matchProfile.params) || {};
};

class App extends Component {
  state = {
    loading: false,
  };
  componentDidUpdate(prevProps, prevState) {
    const { pathname } = this.props.location;
    const { pathname: prevPathname } = prevProps.location;

    const currentParams = getParams(pathname);
    const prevParams = getParams(prevPathname);

    if (currentParams.profileId && currentParams.profileId !== prevParams.profileId) {
      clearTimeout(this.timeout);
      this.setState({
        loading: true,
      });
      setTimeout(() => {
        this.setState({
          loading: false,
        });
      }, 500);
    }
  }
  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return (
      <div>
        <div className="links">
          <Link to="/profile" className="link">
            Home
          </Link>
          <Link to="/profile/1" className="link">
            Profile 1
          </Link>
          <Link to="/profile/2" className="link">
            Profile 2
          </Link>
        </div>
        <div className="tabs">
          <Switch>
            <Route path="/profile" exact component={SelectProfile} />
            <Route
              path="/profile/:profileId"
              render={props => {
                return <Profile {...props} loading={this.state.loading} />;
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
