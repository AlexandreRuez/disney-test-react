import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

function ErrorNotification(props) {
  return (
    <div className="error-notification">
        <FontAwesomeIcon icon={solid('triangle-exclamation')} /><p>Please complete missing information (in the required fields)</p>
    </div>
  );
}

export default ErrorNotification