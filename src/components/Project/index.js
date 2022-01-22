import React from "react";

function Projects(props) {

    const portfolio = [
		{
			name: 'Capital Opulence',
			image: 'capital-opulence.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Express & NoSQL',
				'Heroku',
			],
			github: 'https://github.com/LunaZ13/Capital-Opulence',
			deployed: 'https://capital-opulence.herokuapp.com/',
		},
		{
			name: 'Movie Finder',
			image: 'movie-finder.png',
			technologies: [
				'HTML/CSS',
				'JavaScript',
				'Node.js',
				'Handlebars.js',
				'Express & Sequelize',
				'Heroku & AWS S3',
			],
			github: 'https://github.com/cassie-s/movie-finder',
			deployed: 'https://cassie-s.github.io/movie-finder/',
		},
		{
			name: 'Coding Quiz',
			image: '',
			technologies: ['HTML/CSS', 'JavaScript', 'jQuery'],
			github: 'https://github.com/LunaZ13/coding-quiz',
			deployed: 'https://lunaz13.github.io/coding-quiz/',
		},
		{
			name: 'Work Day Scheduler',
			description:
				'Budget Tracker is an Application that uses a noSQL database and offline persistance for a great user experience for managing their finances and budgeting no matter where they are.',
			image: 'budget-tracker-image.png',
			technologies: [
				'JavaScript',
				'MongoDB',
				'IndexedDB & Service Workers',
				'Node.js',
				'Express',
			],
			github: 'https://github.com/LunaZ13/work-day-sch',
			deployed: 'https://lunaz13.github.io/work-day-sch/',
		},
		{
			name: 'Tech Blog',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: 'weather-dashboard-image.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/LunaZ13/tech-blog-MVC',
			deployed: 'https://morning-oasis-23318.herokuapp.com/',
		},
		{
			name: 'Weather Dashboard',
			description:
				'This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.',
			image: 'password-generator-image.png',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/LunaZ13/weather-dashboard',
			deployed: 'https://lunaz13.github.io/weather-dashboard/',
		},
		{
			name: 'Note Taker',
			image: 'Note Taker.gif',
			technologies: ['HTML/CSS', 'JavaScript', 'Express.js'],
			github: 'https://github.com/LunaZ13/Note-Taker',
			deployed: 'https://damp-shelf-34392.herokuapp.com/',
		},
	];

  
    // jsx
  return (
   <div id="projects">
     <h1>{props.name}</h1>
     <p>{props.tom}</p>

   </div>
  );
}

export default Projects;
