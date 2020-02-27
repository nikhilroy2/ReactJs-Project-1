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
import { useRouteMatch, Route, Link, Switch, useParams} from 'react-router-dom';



export default function Blogpage() {
  window.scrollTo(0,0);
  console.log(window.history);
  let match = useRouteMatch();

    return (
        <div className="wrapper">
            <div className="row p-0">
                <div className="col-12">
                    <h3 className=" text-center px-2 py-3 ">
                        Latest Blog Post
                    </h3>
                </div>
              
             
             

              <Switch>
                <Route path={`${match.path}`} exact> <BlogPost1/> </Route>
                <Route path={`${match.path}/2`}> <BlogPost2/> </Route>
                <Route path={`${match.path}/3`}> <BlogPost3/> </Route>
                <Route path={`${match.path}/4`}> <BlogPost4/> </Route>
                <Route path={`${match.path}/5`}> <BlogPost5/> </Route>
             
              </Switch>
            <div className="col-12">
            <nav aria-label="Page navigation" className="m-0 p-0">
              <ul className="pagination pagination-lg">
                <li className="page-item disabled">
                  <Link  className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </Link>
                </li>
                <li className="page-item active"><Link to={`${match.url}`} className="page-link" href="#">1</Link></li>
                <li className="page-item"><Link  to={`${match.url}/2`}  className="page-link" href="#">2</Link></li>
                <li className="page-item"><Link  to={`${match.url}/3`}  className="page-link" href="#">3</Link></li>
                <li className="page-item"><Link  to={`${match.url}/4`}  className="page-link" href="#">4</Link></li>
                <li className="page-item"><Link  to={`${match.url}/5`}  className="page-link" href="#">5</Link></li>
                <li className="page-item">
                  <Link to={`${match.url}`} className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </Link>
                </li>
              </ul>
            </nav>
            </div>
             
              
               

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
            Lizards are Link widespread group of squamate reptiles, with over 6,000 species, ranging
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

const BlogPost1 = ()=> {
  return (
    <>
     <Blog_post cardTitle="What is Link religious question?"/>
              <Blog_post cardTitle="What questions does religion seek to answer?"/>
              <Blog_post cardTitle="How do you interview someone about their religion?"/>
              <Blog_post cardTitle="What's the difference between being spiritual and being religious?"/>
              <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
              <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
              <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
              <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
              <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
              <Blog_post cardTitle="Lorem ipsum dolor sit,"/>

    </>
  )
}
const BlogPost2 = ()=> {
  return (
    <>
    <Blog_post cardTitle="What is Link religious question?"/>
             <Blog_post cardTitle="What questions does religion seek to answer?"/>
             <Blog_post cardTitle="How do you interview someone about their religion?"/>
             <Blog_post cardTitle="What's the difference between being spiritual and being religious?"/>
             <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
             <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
             <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
             <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
             <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
             <Blog_post cardTitle="Lorem ipsum dolor sit,"/>

   </>
  )
}


const BlogPost3 = ()=> {
  return (
    <>
    <Blog_post cardTitle="What is Link religious question?"/>
             <Blog_post cardTitle="What questions does religion seek to answer?"/>
             <Blog_post cardTitle="How do you interview someone about their religion?"/>
             <Blog_post cardTitle="What's the difference between being spiritual and being religious?"/>
             <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
             <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
             <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
             <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
             <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
             <Blog_post cardTitle="Lorem ipsum dolor sit,"/>

   </>
  )
}


const BlogPost4 = ()=> {
  return (
    <>
    <Blog_post cardTitle="What is Link religious question?"/>
             <Blog_post cardTitle="What questions does religion seek to answer?"/>
             <Blog_post cardTitle="How do you interview someone about their religion?"/>
             <Blog_post cardTitle="What's the difference between being spiritual and being religious?"/>
             <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
             <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
             <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
             <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
             <Blog_post cardTitle="Lorem ipsum dolor sit,"/>
             <Blog_post cardTitle="Lorem ipsum dolor sit,"/>

   </>
  )
}

const BlogPost5 = ()=> {
  return (
    <>
    <Blog_post cardTitle="What is the best definition of religion?"/>
             <Blog_post cardTitle="How do you define religion?"/>
             <Blog_post cardTitle="What is the purpose of religion?"/>
             <Blog_post cardTitle="What is not religion?"/>
             <Blog_post cardTitle="What is the difference between religion and Christianity?"/>
             <Blog_post cardTitle="Is yoga a religion?"/>
             <Blog_post cardTitle="What is the basis of religion?"/>
             <Blog_post cardTitle="How does religion affect society?"/>
             <Blog_post cardTitle="What is the Bible definition of religion?"/>
             <Blog_post cardTitle="Who created religions?"/>

   </>
  )
}