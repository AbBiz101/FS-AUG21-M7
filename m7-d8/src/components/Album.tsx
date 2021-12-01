import { Card } from 'react-bootstrap';

interface SongPro {
	album: {};
	id: number;
	readable: true;
	title: string;
	title_short: string;
	title_version: string;
	link: string;
	duration: number;
	rank: number;
	explicit_lyrics: true;
	explicit_content_lyrics: number;
	explicit_content_cover: number;
	preview: string;
	md5_image: string;
}

export default function Album({song}: SongPro) {
	return (
		<Card style={{ margin: '20px', width: '18rem' }}>
			<Card.Img variant="top" src={song.album.cover_medium} />
			<Card.Body>
				<Card.Title>{song.title_short}</Card.Title>
				<Card.Text>{song.title}</Card.Text>
			</Card.Body>
		</Card>
	);
}
