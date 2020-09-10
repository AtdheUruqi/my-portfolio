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
                    <div class="col-sm">
                        <div style={{ backgroundColor: 'red',textAlign:'center' }}>
                            <p>Web Application Development</p>
                            <img src={require('../../assets/web-development.png')} width="200" height="200"/>
                            <p style={{backgroundColor:'green',width:'90%',margin:'auto'}}>Fast, responsive and engaging apps that bring your ideas to life.</p>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div style={{ backgroundColor: 'red',textAlign:'center' }}>

                            <p>Mobile Application Development</p>
                            <img src={require('../../assets/mobile-development.png')} width="200" height="200"/>
                            <p style={{backgroundColor:'green',width:'90%',margin:'auto'}}>Cross-platform apps built with efficiency and speed for Android and iOS at once..</p>
                        </div>
                    </div>

                    <div class="col-sm">
                        <div style={{ backgroundColor: 'red',textAlign:'center' }}>
                            <p>API Integration & Development</p>
                            <img src={require('../../assets/api-development.png')} width="200" height="200"/>
                            <p style={{backgroundColor:'green',width:'90%',margin:'auto'}}>REST and SOAP API integration. REST API development with Node.js and Loopback.</p>
                        </div>
                    </div>
                    <div class="w-100"></div>
                    <div class="col-sm">
                        <div style={{ backgroundColor: 'red',textAlign:'center' }}>
                            <p>Database Design</p>
                            <img src={require('../../assets/database-development.png')} width="200" height="200"/>
                            <p style={{backgroundColor:'green',width:'90%',margin:'auto'}}>Database architectures in MongoDB, MySQL or Parse Server, always aiming for performance, scale and stability.</p>
                        </div>
                    </div>
                    <div class="col-sm">
                        <div style={{ backgroundColor: 'red',textAlign:'center' }}>
                            <p>Cloud Integration</p>
                            <img src={require('../../assets/cloud-development.png')} width="200" height="200"/>
                            <p style={{backgroundColor:'green',width:'90%',margin:'auto'}}>Deployment of NodeJS apps, ReactJS apps and databases to leading cloud platforms such as Heroku and Amazon AWS.</p>
                        </div>
                    </div>

                    <div class="col-sm">
                        <div style={{ backgroundColor: 'red',textAlign:'center' }}>
                            <p>Payment Gateway Integration</p>
                            <img src={require('../../assets/payment-development.png')} width="200" height="200"/>
                            <p style={{backgroundColor:'green',width:'90%',margin:'auto'}}>Integration with the most popular Payment Gateways such as Stripe and Paypal.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;