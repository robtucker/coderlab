import { connect } from "react-redux";

import { Contact } from "./components/contact";

const mapDispatchToProps = (dispatch) => ({
})

const mapStateToProps = (state) => ({
    contactEmail: 'foo',
});

export const ContactContainer = connect(mapStateToProps, mapDispatchToProps)(Contact);
