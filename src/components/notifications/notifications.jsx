import React from 'react';

const Notification = ({text, status}) => (
    <div className="width-100 height-100">{text}</div>
);;

const Notifications = ({notifications}) => {
    return (
        <section>
            {notifications.map((notification) => {
                <Notification
                    text={notification.text}
                    status={notification.status}/>    
            })}
        </section>
    )
}

export { Notifications }
