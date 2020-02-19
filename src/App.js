import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './component/header/header';
import Carousel from './component/carousel/carousel';
import Section_1 from './component/section/section_1/section_1';
import Section_2 from './component/section/section_2/section_2';
import Section_3 from './component/section/section_3/section_3';
import Section_4 from './component/section/section_4/section_4';
import Section_5 from './component/section/section_5/section_5';
import Footer from './component/footer/footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import all pages below
import NotFoundPage from './component/pages/page404/page404';
import Blogpage from './component/pages/blog/blog';
import Aboutpage from './component/pages/about/about';
import Contactpage from './component/pages/contact/contact';

// import blog post below
import Blog_post_1_page from './component/pages/blog/blog_content_page/blog_post_1/blog_post_1';
import Blog_post_2_page from './component/pages/blog/blog_content_page/blog_post_2/blog_post_2';
import Blog_post_3_page from './component/pages/blog/blog_content_page/blog_post_3/blog_post_3';

// import news post below
import News_post_1_page from './component/pages/blog/news_content_page/news_post_1/news_post_1';
import News_post_2_page from './component/pages/blog/news_content_page/news_post_2/news_post_2';
import News_post_3_page from './component/pages/blog/news_content_page/news_post_3/news_post_3';


// Loader for full project
import Loader from './component/loader/loader';



class App extends React.Component {

  render() {
    return (
      <div className="App container-lg m-0 px-1 mx-auto" style={{ background: "#ddd" }}>
        <Router>
          <Header />


          {/* 
        // Route all

        
        */}

          <Switch>
            <Route path="/" exact > <Home /> </Route>
            
            <Route path="/ReactJs-Project-1"> <Home/> </Route>
            <Route path="/blog">  <Blog /> </Route>
            <Route path="/about">  <About /> </Route>
            <Route path="/contact"> <Contact /> </Route>


            {/* Blog Post Router */}

            <Route path="/blog_post_1"> <Blog_post_1 /> </Route>
            <Route path="/blog_post_2"> <Blog_post_2 /> </Route>
            <Route path="/blog_post_3"> <Blog_post_3 /> </Route>

            {/* News Post Router */}
            <Route path="/news_post_1"> <News_post_1 /> </Route>
            <Route path="/news_post_2"> <News_post_2 /> </Route>
            <Route path="/news_post_3"> <News_post_3 /> </Route>



            {/* Page Not Found Page Below */}

            <Route > <Page404 /> </Route>
          </Switch>

          {/* Loader For Full Project */}
          <Loader/>
          <Footer />

        </Router>
      </div>
    );
  }
}
function Home() {
  return (
    <>

      <Carousel />
      <Section_1 />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />

    </>
  )
}
// Page Router
const Blog = () => <Blogpage />
const About = () => <Aboutpage />
const Contact = () => <Contactpage />
const Page404 = () => <NotFoundPage />

// Blog post Router
const Blog_post_1 = () => <Blog_post_1_page />
const Blog_post_2 = () => <Blog_post_2_page />
const Blog_post_3 = () => <Blog_post_3_page />


// News post Router
const News_post_1 = () => <News_post_1_page />
const News_post_2 = () => <News_post_2_page />
const News_post_3 = () => <News_post_3_page />

export default App;
