import { connect } from "react-redux";
import { SettingsForm } from "./components/settings-form";
import {putMe, userSettingsUpdated} from "../../actions";

const mapStateToProps = (state) => ({
    initialValues: state.auth.user
});

const mapDispatchToProps = (dispatch) => ({
    doSubmit: (data) => { 
        let req = putMe(data);
        req.then((u) => dispatch(userSettingsUpdated()))
    },
})

export const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(SettingsForm);
