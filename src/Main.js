import React from 'react';
import {connect} from 'react-redux';
import datapandit from './datapandit.js';
import { BrowserRouter, Link, Route } from "react-router-dom";
import {Button} from 'reactstrap';
import {useState} from 'react';

class Main extends React.Component {
  
    constructor(props){
        super(props);
    }

    setMenuSemua = () => {
      this.props.dispatch({type:'semua'});
    }

  setMenuPandit = () => {
    this.props.dispatch({type:'pandit'});
  }

  setMenuBolacom = () => {
    this.props.dispatch({type:'bolacom'});
  }

  render() {
    
    return (
      <div>
        <h2>Berita-berita terkini yang ada</h2>
        <div>
            <p>
                <label>Menampilkan berita dari website <b>{this.props.menu}</b></label>
            </p>
            <Link to='/'><Button onClick={this.setMenuSemua}>Semua</Button></Link>{" "}
            <Link to='/Pandit'><Button onClick={this.setMenuPandit}>PanditFootball.com</Button></Link>{" "}    
            <Link to='/Bolacom'><Button onClick={this.setMenuBolacom}>Bola.com</Button></Link>
        </div>
        
      </div>
    )
  }
}

function mapStateToProps(state){
    return{
        menu:state.menu
    };
}
export default connect(mapStateToProps)(Main);