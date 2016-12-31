import { connect } from "react-redux";
import { SettingsForm } from "./components/settings-form";

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    doSubmit: (data) => { consoole.log('todo - put settings', data)},
})

export const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(SettingsForm);
