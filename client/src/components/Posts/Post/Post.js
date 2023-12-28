import React from "react";
import {Card, CardContent, CardActions, CardMedia, Button, Typography} from '@mui/material';
// import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
// import DeleteIcon from '@material-ui/icons/Delete';
// import MoreHorizon from '@material-ui/icons/MpreHoriz';
import moment from 'moment';
import { useDispatch } from "react-redux";

import styles from "./styles";
const Post = ({post}) => {
    const dispatch = useDispatch();

    return (
        <Card style={styles.card}>
            <CardMedia style={styles.media} image={post.selectedFile} title={post.title}/>
            <div style={styles.overlay}>
                <Typography variant='h6'>{post.creator}</Typography>
                <Typography variant='body2'>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div style={styles.overlay2}>
                <Button style={{color: 'white'}} size="small" onClick={()=>{}}>
                    {/* <MoreHorizon fontSize="default" /> */}
                </Button>
            </div>
            <div style={styles.details}>
            {/* <Typography variant='body2' color='textSecondary'>{post.tags.map((tag)=> `#${tag} `)}</Typography> */}
            </div>
            <Typography style={styles.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
            <CardContent>
            <Typography style={styles.title} variant='h5' gutterBottom>{post.message}</Typography>
            </CardContent>
            <CardActions style={styles.cardActions}>
                {/* <Button size="small" color="primary" onClick={()=>{} }> Like {post.likeCount} </Button> */}
                {/* <Button size="small" color="primary" onClick={()=>{} }> Delete </Button> */}
            </CardActions>
            
        </Card>
    );
};

export default Post;