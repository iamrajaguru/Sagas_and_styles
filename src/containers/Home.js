import { connect } from "react-redux";
import Home from "../components/Home";
import { getTodo } from "../actions/Home";
import { withRouter } from "react-router-dom";
const mapStateToProps = (state) => ({
  HomeReducer: state.HomeReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getTodo: () => dispatch(getTodo()),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
