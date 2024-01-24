import React from 'react';

const ExperienceCard = ({image, imageAlt, title, subtitle, skills, description}) => {
    return (
        <div className="dark-card py-3">
            <img
                className="company-logo img rounded-image mb-3"
                src={image}
                width="100"
                height="100"
                alt={imageAlt}
            />
            <h4>{title}</h4>
            <b><i>{subtitle}</i></b>
            <br />
            <i>Skills: {skills}</i>
            <hr />
            <p>
                {description}
            </p>
        </div>
    );
};

export default ExperienceCard;