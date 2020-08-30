import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import './Main.css';
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <div className="Main-header">
          <p className="Title">
            드라마로
          </p>
          <p className="Title">
            알아보는
          </p>
          <p className="Title">
            나의모습
          </p>
          <div className="Button-container">
            <Link to="/questions">
              <Button>
                시작하기!
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
