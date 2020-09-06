import React from 'react';
import './style/styles.css';
const Skills = () => {
    return (
        <div className={'main-div'}>
            <div className={'description-div'}>
                <p className={'what-i-do'}> WHAT I DO</p>
                <p>Things I'm skilled at and passionate about.</p>
            </div>
            <div class="container" style={{ backgroundColor: 'yellow' }}>
                <div class="row justify-content-center">
                    <div class="col-3">
                        <div style={{ backgroundColor: 'red', width: '100px', height: '100px' }}>
                            One of three columns
                        </div>
                    </div>
                    <div class="col-3">
                        <div style={{ backgroundColor: 'red', width: '100px', height: '100px' }}>
                            One of three columns
                        </div>
                    </div>

                    <div class="col-3">
                        <div style={{ backgroundColor: 'red', width: '100px', height: '100px' }}>
                            One of three columns
                        </div>
                    </div>

                    <div class="w-100"></div>
                    <div class="col-sm">
                        <div style={{ backgroundColor: 'red', width: '100px', height: '100px' }}>
                            One of three columns
                        </div>
                    </div>
                    <div class="col-sm">
                        <div style={{ backgroundColor: 'red', width: '100px', height: '100px' }}>
                            One of three columns
                        </div>
                    </div>

                    <div class="col-sm">
                        <div style={{ backgroundColor: 'red', width: '100px', height: '100px' }}>
                            One of three columns
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;