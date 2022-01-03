import React from 'react';

const Workflow = () => {
	return (
		<div className={`workflow`}>
				<h2>
					Workflow
				</h2>
				<ol>
					<li>
						Discussion <span> - Discussion of the purpose of your product and objectives of the site. Familiarization with your product and its features</span>
					</li>
					<li>
						Analysis <span> - Analysis of target audience and Search for references.</span>
					</li>
					<li>
						Prototype <span> - Making a structure of your future site, with a mind map and prototype</span>
					</li>
					<li>
						Design <span> - Creating a visual design that is tailored to your product.</span>
					</li>
					<li>
						Development<span> - Developing front-end UI, then connecting it with a back-end server and database.</span>
					</li>
					<li>
						Deployment <span> - Deployment of your site to the world</span>
					</li>
				</ol>
		</div>
	);
};

export default Workflow;
