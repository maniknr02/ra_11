import React from "react";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
export const PageBody = () => {
	return (
		<Container sx={{ mt: "7rem" }}>
			<Outlet />
		</Container>
	);
};
