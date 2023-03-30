import characters from "../data/popularCharacters.json";
import { Grid } from "@mui/material";
import { Character } from "./Character";
export const PopularCharacters = () => {
	return (
		<Grid container spacing={3} rowSpacing={4}>
			{characters.map((char) => (
				<Character {...char} />
			))}
		</Grid>
	);
};
