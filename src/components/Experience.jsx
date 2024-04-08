import React from 'react';
import ExperienceCard from './common/ExperienceCard';

const Experience = () => {
    return (
        <section id="Experience" className="section-padding">
            <div className="container py-5 text-center">
            <h2 className="display-5 fw-bold  ">
                02. My <span className="highlighted">Experience</span>
            </h2>
            <hr />
            </div>
            <div className="container">
                <p className='text-center lead mb-4 restricted-width-text'>Here, I demonstrate my academic and professional background, showcasing my study and work experience.</p>

            <div
                className="row row-cols-1 row-cols-md-2 g-3 pt-2 pb-2 justify-content-center text-center"
            >   
                <div className="col">
                    <ExperienceCard 
                        image="/assets/images/UniSQ-Logo.jpg"
                        imageAlt="University of Southern Queensland"
                        title="University of Southern Queensland" 
                        subtitle="Degree: Bachelor of Science - Computing" 
                        skills="HTML, CSS, Javascript, PHP, C++, Java, Python" 
                        description="During my time at the University of Southern Queensland, I
                        learnt about Web Development, Software Development, Maths,
                        Statistics, Microproccesor programming, and Algorithms & Data
                        Structures." 
                    />
                </div>
                <div className="col">
                    <ExperienceCard 
                        image="/assets/images/Revolution-Creative-Logo.jpg"
                        imageAlt="Revolution Creative Group Logo"
                        title="Revolution Creative Group" 
                        subtitle="Position: Web Developer" 
                        skills="Wordpress, Shopify, HTML, CSS, Javascript, PHP,
                        Bootstrap" 
                        description="During my time at Revolution Creative Group, I developed,
                        built, and maintained Wordpress and Shopify sites for
                        clients. I also wrote customised code and worked on a SQL
                        database reporting system." 
                    />
                </div>
                <div className="col">
                    <ExperienceCard 
                        image="/assets/images/ecom-icon.jpg"
                        imageAlt="Revolution Creative Group Logo"
                        title="Ecom Capital" 
                        subtitle="Position: Web Developer" 
                        skills="Shopify, HTML, CSS, Javascript, Bootstrap, Liquid
                        Templating" 
                        description="During my time at Ecom Capital I built, maintained, and
                        updated Shopify sites for clients, as well as writing custom
                        Liquid templates for shopify stores and using a range of
                        shopify apps and integrations." 
                    />
                </div>
                <div className="col">
                    <ExperienceCard 
                        image="/assets/images/Wade-Walsh-logo-white-bg.png"
                        imageAlt="Wade Walsh - Logo"
                        title="Wade Walsh - Freelance" 
                        subtitle="Position: Web Developer" 
                        skills="Wordpress, Shopify, Liquid Templating, HTML, CSS,
                        Javascript, PHP, Bootstrap" 
                        description="Building & designing Wordpress and Shopify Sites for 
                        external organizations as a contracted professional, while also 
                        engaging in freelance work with my personal client base" 
                    />
                </div>
            </div>
        </div>
      </section>
    );
};

export default Experience;