import React from 'react';

function Authenticate() {
  return (
    <div>
      <h3>You're almost done!</h3>
      We sent an authentication code to your email
      <label>
        <input name="authCode" />
      </label>
      <button type="verify">Verify</button>
      <button type="resend">Resend authentication code</button>
    </div>
  )
}

export default Authenticate
