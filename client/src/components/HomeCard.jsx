import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import img1 from '../assets/test1.png'
import img2 from '../assets/test2.png'
import img3 from '../assets/test3.png'

export default function HomeCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }} style={{
        boxShadow: "9px 11px 7px 0px rgba(0,0,0,0.3)"
    }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.data.image===1?"G" : props.data.image===2?"P":"S"}
          </Avatar>
        }
        title={props.data.title}
        subheader={props.data.subheader}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.data.image===1?img1 : props.data.image===2?img2:img3}
        
        alt="User photo"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.data.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{display:"flex", justifyContent:"space-between"}}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}