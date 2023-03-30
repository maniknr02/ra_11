import { Container, Grid } from "@mui/material";
import cardData from "../data/animeData.json";
import { MuiCard } from "./MuiCard";
export const Cards = () => {
	return (
		<Container sx={{ mt: "5rem" }}>
			<Grid container spacing={3} rowSpacing={4}>
				{cardData.length > 0 && cardData.map((card) => <MuiCard {...card} />)}
			</Grid>
		</Container>
	);
};
