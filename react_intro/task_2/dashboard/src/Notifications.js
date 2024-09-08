import React from 'react';
import './Notifications.css';

const Notifications = () => {
    // Function to handle button click
    const handleCloseClick = () => {
        console.log('Close button has been clicked');
    };

    // Content for the last list item using dangerouslySetInnerHTML
    const getLatestNotification = () => {
        return { __html: '<strong>Urgent:</strong> Check your email for the latest updates!' };
    };

    return (
        <div className="Notifications">
            <button
                onClick={handleCloseClick}
                aria-label="Close"
                style={{
                    position: 'absolute',
                    right: '10px',
                    top: '10px',
                    border: 'none',
                    background: 'none',
                    fontSize: '16px',
                    cursor: 'pointer'
                }}
            >
                X
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li
                    data-priority="urgent"
                    dangerouslySetInnerHTML={getLatestNotification()}
                ></li>
            </ul>
        </div>
    );
};

export default Notifications;
