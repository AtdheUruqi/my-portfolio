import React from 'react';
import './style/styles.css';
import Typer from '../../components/Typer';
import { Button } from 'react-bootstrap';
const Body = () => {
    return (
        <div className="container" >
            <div className="centered-div">
                <div id="child1" className="block">
                    <Typer />
                </div>
                <div >
                    <Button size="lg" variant="warning">
                        <span className="btn-tellme">
                            Tell me more
                        </span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Body;