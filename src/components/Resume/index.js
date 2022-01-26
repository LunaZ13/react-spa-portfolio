import React from "react";

const Resume = () => {
	return (
		<section>
			<div className="center">
				<h1>My Resume</h1>
			</div>
			<div className="my-2 center">
				<a href="https://github.com/LunaZ13/react-spa-portfolio/raw/develop/src/assets/resume.pdf">
					<h3>Download my Resume</h3>
				</a>
			</div>
			<div>
				<h4>Front-End Proficiencies</h4>
				<ol>
					<li>HTML5</li>
					<li>CSS3</li>
					<li>JavaScript</li>
					<li>Bootstrap</li>
					<li>React</li>
					<li>version control/Git</li> 
					<li>responsive design</li>
				</ol>
				<br></br>
				<h4>Back-End Proficiencies</h4>
				<ol>
					<li>APIs</li>
					<li>NodeJS</li>
					<li>Express</li>
					<li>Model View Controller (MVC)</li>
					<li>REST API's</li>
					<li>Progressive Web Applications (PWA)</li>
				</ol>
				<br></br>
				<h4>Database Proficiencies</h4>
				<ol>
					<li>MySQL</li>
					<li>Sequelize</li>
					<li>NoSQL</li>
					<li>GraphQL</li>
					<li>MongoDB</li>
					<li>Mongoose</li>
				</ol>
			</div>
		</section>
	);
}

export default Resume;