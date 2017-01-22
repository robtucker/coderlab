import React, {PropTypes, Component} from 'react';
import {connect} from "react-redux";
import {CoursePayment} from "../components/course-payment";
import {paymentPutCard, paymentPostTransaction } from "../../../actions";

const mapDispatchToProps = (dispatch) => ({

});

const mapStateToProps = (state, ownProps) => ({

});

export const CoursePaymentContainer = connect(mapStateToProps, mapDispatchToProps)(CoursePayment);
