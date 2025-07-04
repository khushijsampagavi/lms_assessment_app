import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SubjectCard({ name, icon, onClick }) {
  return (
    <Card onClick={onClick} style={{ cursor: 'pointer' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          <FontAwesomeIcon icon={icon} style={{ marginRight: '10px' }} />
          {name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default SubjectCard;


