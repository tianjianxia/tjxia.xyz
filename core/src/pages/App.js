import React, { Component } from 'react';
import { Route, withRouter, Link } from 'react-router-dom';
import styles from './App.module.scss';
import HomeFragment from '../components/fragments/home/HomeFragment';
import PortfolioFragment from '../components/fragments/portfolio/PortfolioFragment';
import AboutFragment from '../components/fragments/about/AboutFragment';
import BlogFragment from '../components/fragments/blog/BlogFragment';
import Home from '../components/components/home/Home';
import Portfolio from '../components/components/portfolio/Portfolio';
import Blog from '../components/components/blog/Blog';
import About from '../components/components/about/About';
import Logo from '../components/Logo';

class App extends Component {
  render(){

    var u = navigator.userAgent;
    var ua = navigator.userAgent.toLowerCase();

    if(u.indexOf("Android") > -1 || 
      u.indexOf("Linux") > -1 || 
      u.indexOf("iPhone") > -1 || 
      u.indexOf("iOS") > -1 || 
      ua.match(/MicroMessenger/i) === "micromessenger"
    ){
      return (
        <div className={ styles.Mobile }>
          <div className={ styles.Nav }>
            <Logo/>
            <Link to="/" style={{ textDecoration: 'none' }}><div>Home</div></Link>
            <Link to="/portfolio" style={{ textDecoration: 'none' }}><div>Portfolio</div></Link>
            <Link to="/blog" style={{ textDecoration: 'none' }}><div>Posts</div></Link>
            <Link to="/about" style={{ textDecoration: 'none' }}><div>About</div></Link>
          </div>
          <div className={ styles.Fragment }>
            <Route exact path="/" component={ HomeFragment }/>
            <Route exact path="/portfolio" component={ PortfolioFragment }/>
            <Route exact path="/blog" component={ BlogFragment }/>
            <Route exact path="/about" component={ AboutFragment }/>
          </div>
        </div>
      );
    }
    return (
      <div className={ styles.Web }>
        <div className={ styles.Head }>
          <span className={ styles.name }>Tianjian Xia</span>
          <div>
            <Link to="/" style={{ textDecoration: 'none' }}><span className={ styles.nav }>Home</span></Link>
            <Link to="/portfolio" style={{ textDecoration: 'none' }}><span className={ styles.nav }>Portfolio</span></Link>
            <Link to="/blog" style={{ textDecoration: 'none' }}><span className={ styles.nav }>Posts</span></Link>
            <Link to="/about" style={{ textDecoration: 'none' }}><span className={ styles.nav }>About</span></Link>
          </div>
        </div>
        <div className={ styles.Content }>
          <Route exact path="/" component={ Home }/>
          <Route exact path="/portfolio" component={ Portfolio }/>
          <Route exact path="/blog" component={ Blog }/>
          <Route exact path="/about" component={ About }/>
        </div>
      </div>
    );
  }
}

export default withRouter(App);