import { connect } from "react-redux";

import { Home } from "./home.component";

const mapStateToProps = (state) => {
    return state.home || {};
}

const mapDispatchToProps = (dispatch) => ({})

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)
