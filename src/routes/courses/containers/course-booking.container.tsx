import React, {PropTypes, Component} from 'react';
import {connect} from "react-redux";
import {CourseBookingForm} from "../components/course-booking-form";
import {paymentPutCard, paymentPostTransaction } from "../../../common/actions";

const mapDispatchToProps = (dispatch) => ({
    doSubmit: () => {
        console.log('todo - course booking submit')
        dispatch()
    }
});

const mapStateToProps = (state, ownProps) => ({
    contentHeight: state.app.contentHeight
});

export const CourseBookingContainer = connect(mapStateToProps, mapDispatchToProps)(CourseBookingForm);
