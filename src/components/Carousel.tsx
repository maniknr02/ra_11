import Carousel from "react-material-ui-carousel";
import { Paper, Typography } from "@mui/material";

export const Example = () => {
	var items = ["onepiece", "bluelock", "bleach"];

	return (
		<>
			<Typography textAlign={"center"} variant="h3" color={"#CDE990"}>
				Welcome to ANIMEBRO!!
			</Typography>
			<Carousel autoPlay>
				{items.map((item) => (
					<Paper>
						<img
							style={{
								width: "100%",
								height: "62vh",
								opacity: 0.8,
							}}
							src={`/assets/carousel/${item}.jpg`}
							alt=""
						/>
					</Paper>
				))}
			</Carousel>
		</>
	);
};
