import React from 'react';
import Box from '@material-ui/core/Box';

function ContentBanner(props) {
  return (
    <Box color="primary" style={{ height: '250px' }} {...props}>
      {props.children}
    </Box>
  );
}

export default ContentBanner;