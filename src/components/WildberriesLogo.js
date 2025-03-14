import React from 'react';

const styles = {
  wbLogo: {
    width: '40vw',
    height: 'auto',
  },
};

function WildberriesLogo() {
  return (
    <img
      src={require('../assets/images/Wildberries_Logo.png')}
      style={styles.wbLogo}
      alt="Wildberries Logo"
    />
  );
}

export default WildberriesLogo;