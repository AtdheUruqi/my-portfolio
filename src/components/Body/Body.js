import React from 'react';
import './style/styles.css';
import Typer from '../../components/Typer';
const Body = () => {
    return (
        <div className="container" >
            <div class="centered-div">
                <div id="child1" class="block">
                    <Typer />
                </div>
            </div>
        </div>
    );
};

export default Body;