"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Return = () => {
  const [status, setStatus] = useState(null);
  const [customerEmail, setCustomerEmail] = useState('');
  const [sessionId, setSessionId] = useState('');
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const sessionId = urlParams.get('session_id');
    if(sessionId !== null) {
      setSessionId(sessionId);
    }
    else{
      console.error('sessionId not found in url');
    }
    
    fetch(`https://j4y10kfape.execute-api.us-west-1.amazonaws.com/Prod/session-status?session_id=${sessionId}`)
      .then(response => {
        if (!response.ok) {
          // Handle the error response
          throw new Error('Network response was not ok');
        }
        return response.json(); // Parse the JSON from the response
      })
      .then((data) => {
        setStatus(data.status);
        setCustomerEmail(data.customer_email);
      });
  }, []);

  if (status === 'open') {
    const router = useRouter();
    router.push('/');
  }

  if (status === 'complete') {
    return (
      <section id="success">
        <p>
          We appreciate your business! A confirmation email will be sent to {customerEmail}.

          If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.
          
          <SuccessDisplay sessionId={sessionId}/>
        </p>
      </section>
    )
  }

  return null;
}

const SuccessDisplay = ({ sessionId }:any) => {
  return (
    <section>
      <div className="product Box-root">
        
        <div className="description Box-root">
          <h3>Subscription to starter plan successful!</h3>
        </div>
      </div>
      <form action="https://j4y10kfape.execute-api.us-west-1.amazonaws.com/Prod/create-portal-session" method="POST">
        <input
          type="hidden"
          id="session-id"
          name="session_id"
          value={sessionId}
        />
        <button id="checkout-and-portal-button" type="submit">
          Manage your billing information
        </button>
      </form>
    </section>
  );
};

function Page() {
  return (
    <Return/>
  )
}

export default Page