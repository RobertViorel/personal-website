import React from 'react';
import ReactCookieConsent from 'react-cookie-consent';

function CookieConsent() {
  return (
    <div>
      <ReactCookieConsent
        location="bottom"
        buttonText="Accept All"
        enableDeclineButton={true}
        declineButtonText="Decline"
        declineCookieValue={false}
        cookieName="DiginexCookie"
        buttonClasses=""
        style={{
          background: "#2D5D83",
        }}
        buttonStyle={{
          background: "#123E61",
          color: "#fff",
          fontSize: "13px",
          margin: "10px",
          padding: "15px",
          borderRadius: "10px",
          fontWeight: "500",
        }}
        declineButtonStyle={{
          background: "#fff",
          color: "#123E61",
          fontSize: "13px",
          margin: "10px",
          padding: "15px",
          borderRadius: "10px",
          fontWeight: "500",
        }}
        expires={150}
        contentClasses="DigiCookies"
      >
        <h3 className="text-white font-bold text-[18px]">We value your privacy</h3>
        <p className="mt-3 text-white text-[14px]">
          We use cookies to enhance your browsing experience and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
        </p>
      </ReactCookieConsent>
    </div>
  );
}

export default CookieConsent;
