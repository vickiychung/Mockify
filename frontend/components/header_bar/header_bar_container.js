import { connect } from 'react-redux';
import { signOut } from '../../actions/session_actions';
import HeaderBar from './header_bar';

const mapStateToProps = state => {
  return {
    currentUser: state.entities.users[state.session.id],
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderBar);
