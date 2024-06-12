import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEz7pPGBCjWGGyWOpUhiEu4lMvjO5nWmRxmg&s"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">CHECK24</div>
							<div className="work-subtitle">
								FullStack Engineer
							</div>
							<div className="work-duration">2021 - Present</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
