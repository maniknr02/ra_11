import { useParams } from "react-router-dom";
import { RenderAnimeDetails } from "./RenderAnimeDetails";
export const AnimeDetails = () => {
	const params = useParams();
	const id = params.id ? parseInt(params.id) : -1;
	return (
		<div>
			{id === -1 ? <h1>Anime not found</h1> : <RenderAnimeDetails id={id} />}
		</div>
	);
};
