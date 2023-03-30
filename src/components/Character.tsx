import React from "react";
import {
	Grid,
	Card,
	CardMedia,
	CardContent,
	Typography,
	CardActions,
} from "@mui/material";
import { CharacterDataProps } from "../types/cardData";
export const Character: React.FC<CharacterDataProps> = ({
	name,
	votes,
	animeName,
}) => {
	return (
		<Grid item xs={6} sm={3} md={2}>
			<Card
				sx={{
					maxWidth: 250,
					backgroundColor: "#595A5D",
					color: "white",
					border: "2px gray solid",
				}}
				elevation={10}
			>
				<CardMedia
					component="img"
					alt="green iguana"
					height="200"
					image={`./assets/popularCharacters/${name.toLowerCase()}.jpeg`}
				/>
				<CardContent>
					<Typography
						fontWeight={"bolder"}
						textAlign={"center"}
						variant="body1"
						component="div"
					>
						{name}
					</Typography>
					<Typography sx={{ color: "#CDE990" }} variant="caption">
						({animeName})
					</Typography>
				</CardContent>
				<CardActions sx={{ flex: 1, justifyContent: "space-around" }}>
					<Typography
						textAlign={"center"}
						variant="body1"
						sx={{ color: "#CDE990" }}
					>
						votes
					</Typography>
					<Typography variant="body2">{votes}</Typography>
				</CardActions>
			</Card>
		</Grid>
	);
};
