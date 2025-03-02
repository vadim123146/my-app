import React from 'react';

const LongRunningRequest = ({ onCancel }) => {
  return (
    <div>
      <h2>Requesting the quote</h2>
      <p>Step 1: Requesting author... Completed</p>
      <p>Step 2: Requesting quote...</p>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default LongRunningRequest;
