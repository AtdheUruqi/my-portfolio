import React from 'react';
import Typical from 'react-typical';
const Typer = () => {
    return (
        <Typical
            steps={['Hi', 1000, 'I am FrontEnd Developer', 500]}
            loop={Infinity}
            wrapper="div"
        />
    );
};

export default Typer;