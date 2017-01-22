import React, { PropTypes, Component } from 'react';
import {browserHistory} from"react-router";
import { palette, typography } from "../../../styles";

import { PageContainer} from "../../../components/page-container";

export class CoursePayment extends Component {

    propTypes: {
        enrolDialogOpen: PropTypes.string.isRequired
    }

    componentWillMount() {
        console.log('Course payment', this.props);
    }

    render() {
        return (
            <PageContainer title="Purchase" subtitle="You purchasing one on one training">
                <div>foo</div>
            </PageContainer>
        )
    }
}
