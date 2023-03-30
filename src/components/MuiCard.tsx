import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import { CardDataProps } from "../types/cardData";
import { CardActions, Grid, Rating } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const MuiCard: React.FC<CardDataProps> = ({
	name,
	img,
	id,
	rating,
	eps,
}) => {
	const navigate = useNavigate();
	const changeRoute = () => {
		console.log(id);
		return navigate("" + id);
	};
	return (
		<Grid item xs={6} sm={4} md={3}>
			<Card
				onClick={changeRoute}
				sx={{
					maxWidth: 250,
					backgroundColor: "#595A5D",
					color: "white",
					border: "2px gray solid",
					cursor: "pointer",
				}}
				elevation={10}
			>
				<CardMedia
					component="img"
					alt="green iguana"
					height="300"
					image={img}
				/>
				<CardContent>
					<Typography
						textAlign={"center"}
						fontWeight={"bolder"}
						color={"#CDE990"}
						variant="h6"
						component="div"
					>
						{name.toUpperCase()}
					</Typography>
				</CardContent>
				<CardActions sx={{ flex: 1, justifyContent: "space-between" }}>
					<Rating
						name="half-rating-read"
						defaultValue={rating}
						precision={0.1}
						readOnly
					/>
					<Typography variant="body2">{eps} Eps</Typography>
				</CardActions>
			</Card>
		</Grid>
	);
};
