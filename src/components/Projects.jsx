import React from "react";
import ProjectCard from "./common/ProjectCard";

const Projects = () => {
  return (
    <section id="Projects" className="section-padding">
      <div className="album py-5">
        <div className="container py-5 text-center">
          <h2 className="display-5 fw-bold  ">
            03. Things I've <span className="highlighted">Built</span>
          </h2>
          <hr />
        </div>
        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 pt-2 pb-2">
          <div className="col">
              <ProjectCard
                image="assets/images/lendcofinance.com.jpg"
                imageAlt="Lendco Finance"
                title="Lendco Finance"
                description="A Wordpress site created for a finance company. They offer
                  a variety of finance options such as: Home loans, Personal loans, and Commercial loans for their clients."
                link1Text="View"
                link1="https://lendcofinance.com.au/"
                skills="Wordpress/JavaScript/PHP/CSS"
              />
            </div>
            <div className="col">
              <ProjectCard
                image="assets/images/React-Site-Template-Light.jpg"
                imageAlt="React Site Template"
                title="React Site Template"
                description="A React.js template site that has a library of re-usuable components, allowing to quickly build a react site with greate functionality."
                link1Text="Visit Repo"
                link1="https://github.com/ITsPorky/React-Reusable-App-Template"
                link2Text="View"
                link2="https://itsporky.github.io/React-Reusable-App-Template/"
                skills="React.js/JavaScript/HTML/CSS"
              />
            </div>
            <div className="col">
              <ProjectCard
                image="assets/images/Character-Generator-img-optimised.jpg"
                imageAlt="Fantasy Character Generator"
                title="Fantasy Character Generator API"
                description="The Character Generation API is a Node.js application that
                  can generate random RPG characters with stats, art, and
                  general information about the character."
                link1Text="Visit Repo"
                link1="https://github.com/ITsPorky/Character-Generation-API"
                link2Text="View"
                link2="https://character-gen-api.onrender.com/"
                skills="Node.js/JavaScript"
              />
            </div>
            <div className="col">
              <ProjectCard
                image="assets/images/Procedural-Gen-unity-optimised.jpg"
                imageAlt="2D Procedural Generator"
                title="2D Procedural Terrain Generation"
                description="A 2D procedural generator to draw tilemaps in Unity based
                  on a seed. The project also has basic biome selection based on moisture and temperature maps. (Work in progress)"
                link1Text="Download"
                link1="assets/projects/2D Procedural Terrain v0.0.8-development-build(Biomes).zip"
                skills="C#/Unity"
              />
            </div>
            <div className="col">
              <ProjectCard
                image="assets/images/ITsPorkys-Toggle-Auto-Run-Mod.jpg"
                imageAlt="ITsPorkys - Toggle Auto Run (T.A.R)"
                title="ITsPorkys - Toggle Auto Run(T.A.R)"
                description="A mod for S.T.A.L.K.E.R - Anomaly that uses the MCM(Mod Configuration Menu) addon for integration. 
                  This mod allows the user to confiugure and use a toggle 'Run' or 'Sprint' in the game."
                link1Text="View"
                link1="https://www.moddb.com/mods/stalker-anomaly/addons/toggle-auto-run-v100"
                skills="Lua"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
