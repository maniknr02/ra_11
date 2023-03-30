import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
export const Footer = () => {
	return (
		<div
			style={{
				padding: "0.5rem",
				display: "flex",
				alignItems: "center",
				justifyContent: "space-around",
				marginTop: "auto",
				backgroundColor: "gray",
			}}
		>
			<div>&copy;&nbsp;all rights reserved,India</div>
			<div>
				<FacebookIcon
					color="primary"
					sx={{
						fontSize: "2rem",
						backgroundColor: "white",
						borderRadius: 1,
					}}
				/>
				&nbsp;
				<InstagramIcon
					color="warning"
					sx={{ fontSize: "2rem", backgroundColor: "white", borderRadius: 1 }}
				/>
				&nbsp;
				<YouTubeIcon
					color="error"
					sx={{ fontSize: "2rem", backgroundColor: "white", borderRadius: 1 }}
				/>
			</div>
		</div>
	);
};
