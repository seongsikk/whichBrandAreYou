import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import './Main.css';
import { Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <header className="Main-header">
          <p>
            나랑 비슷한 연예인은 과연 누구일까?
          </p>
          <Link to="/questions">
            <Button variant="contained" color="primary">
              시작하기!
            </Button>
          </Link>
        </header>
      </div>
    );
  }
}

export default Main;
