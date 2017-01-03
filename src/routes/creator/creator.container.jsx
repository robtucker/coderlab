import { connect } from "react-redux";
import { CreatorForm } from "./components/creator-form";

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    doSubmit: (data) => { consoole.log('todo - put course', data)},
})

export const CreatorContainer = connect(mapStateToProps, mapDispatchToProps)(CreatorForm);
