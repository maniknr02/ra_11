import {
	Button,
	Card,
	Container,
	IconButton,
	TextField,
	Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
import { PostObj } from "../types/cardData";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
export const Community = () => {
	const emptyObject = { name: "", comment: "" };
	const [state, setState] = useState<boolean>(false);
	const [postObj, setPostObj] = useState<PostObj>(emptyObject);
	const [posts, setPosts] = useState<PostObj[] | []>(
		localStorage.getItem("posts")
			? JSON.parse(localStorage.getItem("posts") || "[]")
			: []
	);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(postObj);

		setPostObj({ ...postObj, [e.target.name]: e.target.value });
	};
	const addThePost = (e: React.FormEvent<HTMLFormElement>) => {
		console.log("form submitted");

		e.preventDefault();
		console.log(posts);
		localStorage.setItem("posts", JSON.stringify([...posts, postObj]));
		setPosts([...posts, postObj]);
		setPostObj(emptyObject);
		setState(false);
	};
	const deletePost = (id: number) => {
		let newPosts = [...posts];
		newPosts.splice(id, 1);
		localStorage.setItem("posts", JSON.stringify(newPosts));
		setPosts(newPosts);
	};
	return (
		<>
			<Container sx={{ display: "flex", justifyContent: "space-between" }}>
				<Typography variant="h3">Welcome to Community Page</Typography>

				<Button
					variant="contained"
					sx={{
						backgroundColor: "#CDE990",
						color: "black",
						fontWeight: "bolder",
						height: "fit-content",
					}}
					onClick={() => setState(true)}
				>
					ADD POST
				</Button>

				<Dialog open={state} onClose={() => setState(false)}>
					<form onSubmit={addThePost}>
						<DialogTitle>Enter Details</DialogTitle>
						<DialogContent>
							<TextField
								autoFocus
								margin="dense"
								name="name"
								label="Name"
								type="text"
								fullWidth
								variant="standard"
								value={postObj.name}
								onChange={handleChange}
								required
							/>
							<TextField
								autoFocus
								margin="dense"
								name="comment"
								label="Comment"
								type="text"
								fullWidth
								onChange={handleChange}
								value={postObj.comment}
								variant="standard"
								required
							/>
						</DialogContent>
						<DialogActions>
							<Button
								color="error"
								sx={{ width: "fit-content" }}
								size="small"
								variant="contained"
								onClick={() => {
									setPostObj(emptyObject);
									setState(false);
								}}
							>
								Cancel
							</Button>
							<Button
								color="success"
								type="submit"
								sx={{ width: "fit-content" }}
								size="small"
								variant="contained"
							>
								POST
							</Button>
						</DialogActions>
					</form>
				</Dialog>
			</Container>
			<Container
				sx={{ display: "flex", flexDirection: "column", mt: "2%", gap: 2 }}
			>
				{posts.length > 0 &&
					posts.map(({ name, comment }, idx) => {
						return (
							<Card
								sx={{
									justifyContent: "space-between",
									display: "flex",
									width: "80%",
									padding: "1% 2%",
									background: "gray",
								}}
							>
								<div>
									<Typography color={"#CDE990"} variant="h5">
										{name}
									</Typography>
									<Typography color={"White"} variant="body1">
										{comment}
									</Typography>
								</div>
								<div>
									{/* <Typography color={"#CDE990"} variant="h6">
										2h
									</Typography> */}
									<IconButton onClick={() => deletePost(idx)}>
										<DeleteIcon color="error" />
									</IconButton>
								</div>
							</Card>
						);
					})}
			</Container>
		</>
	);
};
