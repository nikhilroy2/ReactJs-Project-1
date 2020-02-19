import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Blog_img from './img/post.png'



export default function Blogpage() {
    return (
        <div className="wrapper">
            <div className="row p-0">
                <div className="col-12">
                    <h3 className=" text-center px-2 py-3 ">
                        Latest Blog Post
                    </h3>
                </div>
              
              <Blog_post cardTitle="What is a religious question?"/>
              <Blog_post cardTitle="What questions does religion seek to answer?"/>
              <Blog_post cardTitle="How do you interview someone about their religion?"/>
              <Blog_post cardTitle="What's the difference between being spiritual and being religious?"/>
              <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
              <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
              <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
              <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
              <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
              <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
              <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
              <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
              <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
              <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
              <Blog_post cardTitle="
              
              accusantium qua
              
              
              
              "/>
              
              
               

            </div>
        </div>
    )
}


const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    media: {
      height: 140,
    },
  });
function Blog_post(props) {
    const classes = useStyles();
    return (

        <div className="col-sm-12 py-3  col-lg-6">
             <Card className={classes.root}>
      <CardActionArea>
        <CardMedia>
            <img className="d-block mx-auto w-50 py-3" src={Blog_img} alt=""/>
        </CardMedia>
        <CardContent>
          <Typography style={{whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflowX: 'hidden'}} gutterBottom variant="h5" component="h2">
            {props.cardTitle}
          </Typography>
          <Typography style={{height: '50px', overflow: 'hidden'}} variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
        </div>

    )
}