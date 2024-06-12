import React from "react";

function article_1() {
	return {
		date: "10 June 2024",
		title: "Getting into FPV Freestyle",
		description:
			"FPV freestyle is a thrilling and challenging hobby that combines the excitement of drone racing with the creativity of aerial acrobatics. Learn how to get started with this guide.",
		keywords: [
			"FPV",
			"Freestyle",
			"Drone Racing",
			"Drone",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}


const myArticles = [article_1];

export default myArticles;
