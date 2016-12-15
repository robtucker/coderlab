import { connect } from "react-redux";

import { Notifications } from "../components/notifications/notifications";

const mapStateToProps = (state) => ({
    notifications: state.notifications
});

const mapDispatchToProps = (dispatch) => ({
    
})

export const NotificationContainer = connect(mapStateToProps, mapDispatchToProps)(Notifications);