import { Box, createTheme } from "@mui/material";
import { Route } from "react-router";
import { Routes } from "react-router-dom";
import { Cards } from "./components/Cards";
import { PageBody } from "./components/PageBody";
import { NavBar } from "./components/Navbar";
import "./App.css";
import { PopularCharacters } from "./components/PopularCharacters";
import { Community } from "./components/Community";
import { HomePage } from "./components/HomePage";
import { AnimeDetails } from "./components/AnimeDetails";
import { ThemeProvider } from "@emotion/react";
const theme = createTheme({
	typography: {
		fontFamily: ["Alkatra", "cursive"].join(","),
	},
});
function App() {
	return (
		<ThemeProvider theme={theme}>
			<Box sx={{ color: "white" }}>
				<NavBar />
				<Routes>
					<Route path="/" element={<PageBody />}>
						<Route index element={<HomePage />} />
						<Route path="Trending">
							<Route index element={<Cards />} />
							<Route path=":id" element={<AnimeDetails />} />
						</Route>
						<Route path="Popular Characters" element={<PopularCharacters />} />
						<Route path="Community" element={<Community />} />
					</Route>
				</Routes>
			</Box>
		</ThemeProvider>
	);
}

export default App;
