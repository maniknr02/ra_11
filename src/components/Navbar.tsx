import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import LiveTvIcon from "@mui/icons-material/LiveTv";
import { Link, NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
const pages = ["Trending", "Popular Characters", "Community"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

interface Props {
	isActive?: boolean;
	isPending?: boolean;
}
export const NavBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = (e: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const navLinkStyles = (props: Props) => {
		return {
			fontWeight: props.isActive ? "bolder" : "normal",
			color: props.isActive ? "#CDE990 " : "white",
			borderBottom: props.isActive ? "2px solid #CDE990" : "0",
			textDecoration: "none",
		};
	};
	const navLinkStyles2 = (props: Props) => {
		return {
			fontWeight: props.isActive ? "bolder" : "normal",
			color: props.isActive ? "#CDE990 " : "black",
			borderBottom: props.isActive ? "2px solid #CDE990" : "0",
			textDecoration: "none",
		};
	};
	return (
		<AppBar position="fixed" sx={{ backgroundColor: "black" }}>
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<LiveTvIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
					<Link to="/" style={{ textDecoration: "none" }}>
						<Typography
							variant="h5"
							noWrap
							component="a"
							sx={{
								mr: 2,
								display: { xs: "none", md: "flex" },
								fontFamily: "monospace",
								fontWeight: 700,
								letterSpacing: ".3rem",
								color: "#CDE990",
								textDecoration: "none",
							}}
						>
							ANIMEBRO
						</Typography>
					</Link>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenu}
							color="inherit"
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{pages.map((page) => (
								<MenuItem key={page}>
									<Typography textAlign="center" onClick={handleCloseNavMenu}>
										<NavLink style={navLinkStyles2} to={page}>
											{page}
										</NavLink>
									</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<LiveTvIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
					<Link to="/" style={{ textDecoration: "none" }}>
						<Typography
							variant="h5"
							noWrap
							component="a"
							href=""
							sx={{
								mr: 2,
								display: { xs: "flex", md: "none" },
								flexGrow: 1,
								fontFamily: "monospace",
								fontWeight: "bolder",
								letterSpacing: ".3rem",
								color: "#CDE990",
								textDecoration: "none",
							}}
						>
							ANIMEBRO
						</Typography>
					</Link>
					<Box
						sx={{
							flexGrow: 1,
							display: { xs: "none", md: "flex", gap: "5px" },
						}}
					>
						{pages.map((page) => (
							<NavLink style={navLinkStyles} to={page}>
								<Button
									key={page}
									onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										color: "inherit",
										display: "block",
										fontWeight: "inherit",
									}}
								>
									{page}
								</Button>
							</NavLink>
						))}
					</Box>

					<Box sx={{ flexGrow: 0 }}>
						<Tooltip title="Open settings">
							<IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
								<AccountCircleIcon sx={{ fontSize: 40, color: "white" }} />
							</IconButton>
						</Tooltip>
						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{settings.map((setting) => (
								<MenuItem key={setting} onClick={handleCloseUserMenu}>
									<Typography textAlign="center">{setting}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
