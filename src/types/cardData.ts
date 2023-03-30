export interface CardDataProps {
	name: string;
	img: string;
	id: number | string;
	rating: number;
	description: string;
	eps: number;
}

export interface CharacterDataProps {
	name: string;
	votes: number;
	animeName: string;
}

export interface PostObj {
	name: string;
	comment: string;
}
