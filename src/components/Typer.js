import React from 'react';
import Typical from 'react-typical';
const Typer = React.memo(() => {
    return <Typical
        loop={Infinity}
        wrapper="p"
        steps={['Hi :)', 1000, 'I am Atdhe Uruqi', 500, 'I am Frontend Developer', 500]}
    />
}, (props, prevProp) => true);

export default Typer;