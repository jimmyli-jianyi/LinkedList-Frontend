import { connect } from 'react-redux';
import Header from '../../components/Header';
import { logout } from '../../store/actions/auth';
import { search } from '../../store/actions/search';
import { withRouter } from 'react-router';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser
  };
}

// use withRouter to solve this.props.history.push will not work in nested component
export default withRouter(
  connect(
    mapStateToProps,
    { logout, search }
  )(Header)
);
