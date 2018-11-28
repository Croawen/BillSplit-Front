import React, { Fragment } from "react";
import Loadable from "react-loadable";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import Header from "./Header/Header";
import screens from "./screens";
import Loading from "../../common/layout/Loading";
import { Container } from 'reactstrap';
import { withRouter } from 'react-router';

const screensComponents = screens.map(route => {
  const Component = Loadable({
    loader: route.getComponent,
    loading: Loading
  });

  return route.getComponent ? (
    <Route
      key={route.path}
      path={route.path}
      exact={route.exact}
      render={props => <Component {...props} />}
    />
  ) : null;
});

class MainWrapper extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Container>
          <Switch>
            <Route>
              <Fragment>
                <Switch>{screensComponents}</Switch>
              </Fragment>
            </Route>
          </Switch>
        </Container>
      </div>
    );
  }
}
const mapState = state => ({
  currentUser: state.currentUser.currentUser,
});

export default withRouter(connect(mapState)(MainWrapper))

