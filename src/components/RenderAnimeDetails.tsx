import React from "react";
import {
	Container,
	FormControlLabel,
	IconButton,
	Rating,
	Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import animeData from "../data/animeData.json";
import { useNavigate } from "react-router-dom";
interface RenderProps {
	id: number;
}
export const RenderAnimeDetails: React.FC<RenderProps> = ({ id }) => {
	const navigate = useNavigate();
	const propogateBack = () => {
		navigate(-1);
	};
	return (
		<>
			<IconButton>
				<ArrowBackIosIcon
					sx={{
						position: "fixed",
						left: 50,
						color: "#CDE990",
						fontWeight: "bolder",
						fontSize: 30,
					}}
					onClick={propogateBack}
				/>
			</IconButton>
			<Container
				sx={{
					display: "flex",
					padding: 5,
					borderRadius: 5,
				}}
			>
				<Container sx={{ flex: 1 }}>
					<img
						style={{
							maxWidth: "200px",
							border: "2px solid #CDE990",
							borderRadius: 10,
						}}
						src={"/" + animeData[id].img}
						alt=""
					/>
					<Typography
						textAlign={"center"}
						color="#CDE990"
						fontWeight={700}
						variant="h5"
					>
						{animeData[id].name.toUpperCase()}
					</Typography>
					<FormControlLabel
						label="Rating :"
						labelPlacement="start"
						control={
							<Rating
								name="half-rating-read"
								defaultValue={animeData[id].rating}
								precision={0.1}
								readOnly
							/>
						}
					/>
				</Container>
				<Container>
					<Typography variant="body1">{animeData[id].description}</Typography>
				</Container>
			</Container>
		</>
	);
};
