import { connect } from "react-redux";

import { Home } from "./components/home";

const mapStateToProps = (state) => ({
    user: state.auth.user,
    courses: state.courses.byName,
});

const mapDispatchToProps = (dispatch) => ({
    
})

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)
