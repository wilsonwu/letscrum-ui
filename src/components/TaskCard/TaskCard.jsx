import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const card = (
  <Fragment>
    <CardContent>
      {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography> */}
      <Typography variant="h5" component="div">
        Project Name
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        subtitle
      </Typography>
      <Typography variant="body2">
        description: well meaning and kindly.a benevolent smile
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Options</Button>
      <Button size="small">Detail</Button>
    </CardActions>
  </Fragment>
);

export default function TaskCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
