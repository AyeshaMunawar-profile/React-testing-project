import React from 'react';

const UserStatus = (props: any) => {
  const { name } = props;
  // { name && name === "Anoymous User" ? "Unknown" : "Verified User" }
  return (
    <div>
      <h2 style={{ color: 'lavender' }}>
        User Status :
        {name ? 'Verified User' : 'Anonymous User'}
      </h2>
    </div>
  );
};
export default UserStatus;
