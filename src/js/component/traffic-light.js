import React from "react";

//create your first component
export const Trafficlight = () => {
	return (
		<React.Fragment>
			<div className="page">
				<div className="toptrafficlight" />
				<div className="trafficbase">
					<div className="redlight" />
					<div className="yellowlight" />
					<div className="greenlight" />
				</div>
			</div>
		</React.Fragment>
	);
};
