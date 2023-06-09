import React, { Fragment } from 'react';
import { Intro } from './Intro';
import backgroundImage from '../images/banner2.jpg';
import '../styles/Sections.scss';


export const About = () => {
        
        const imageBanner = {
            backgroundImage: `url(${backgroundImage})`
        }
        return(
            <Fragment>
                <Intro
                title='About Us'
                image={imageBanner}
                />
                
                <section className="section-about">
                    <div className="container">
                        <div className="section__body">
                            <div className="section__entry">
                                <h3>
                                    Why DailySale ?
                                </h3>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ducimus dolore similique inventore. Quam quidem cumque nulla mollitia corporis voluptate, voluptatem accusantium ipsum alias quibusdam omnis commodi fuga dolorem non.
                                </p>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ducimus dolore similique inventore. Quam quidem cumque nulla mollitia corporis voluptate, voluptatem accusantium ipsum alias quibusdam omnis commodi fuga dolorem non.
                                </p>

                                <p>
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis ducimus dolore similique inventore. Quam quidem cumque nulla mollitia corporis voluptate, voluptatem accusantium ipsum alias quibusdam omnis commodi fuga dolorem non.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
}