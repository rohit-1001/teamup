import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import rohit from '../assets/rohit.jpg'
import yash from '../assets/yash.jpg'

export default function HomeCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{
        boxShadow: "9px 11px 7px 0px rgba(0,0,0,0.3)",
        backgroundColor: "rgb(244, 244, 245)"
    }}>
      <CardMedia
        component="img"
        height="194"
        image={props.data.image===1?rohit : yash}
        style={{
            borderTopLeftRadius: "90px",
            borderBottomRightRadius: "90px",
            backgroundColor: "rgb(244, 244, 245)"
        }}
        alt="User photo"
      />
      <CardContent >
        <Typography variant="body2" color="text.secondary">
            <h4 style={{display:"flex", justifyContent:"center", alignItems:"center"}}>{props.data.name}</h4>
            <h6 style={{display:"flex", justifyContent:"center", alignItems:"center"}}>{props.data.email}</h6>
        </Typography>
      </CardContent>
    </Card>
  );
}