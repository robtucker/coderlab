import { connect } from "react-redux";

import { Home } from "./components/home";

const mapStateToProps = (state) => ({
    user: state.user
});

const mapDispatchToProps = (dispatch) => ({
    
})

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)
