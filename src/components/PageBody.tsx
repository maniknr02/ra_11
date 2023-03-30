import React from "react";
import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
export const PageBody = () => {
	return (
		<Container sx={{ p: "7rem 0" }}>
			<Outlet />
		</Container>
	);
};
