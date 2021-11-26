import { Button, Htag, P, Rating, Tag } from '../components';
import {useState} from "react";

export default function Home(): JSX.Element {
	const [rating, setRating] = useState<number>(3);

	return (
		<div>
			<Htag tag='h1'>Hello world!</Htag>
			<Button appearance='primary'>Primary</Button>
			<Button appearance='ghost'>Ghost</Button>
			<Button appearance='ghost' arrow='right'>Ghost arrow right</Button>
			<Button appearance='ghost' arrow='down'>Ghost arrow down</Button>

			<P size='l'>Большой</P>
			<P>Средний</P>
			<P size='s'>Маленький</P>

			<Tag>Ghost</Tag>
			<Tag color='red'>Red</Tag>
			<Tag color='grey'>Grey</Tag>
			<Tag color='green'>Green</Tag>
			<Tag color='primary'>Primary</Tag>
			<Tag size='m'>Ghost</Tag>
			<Tag size='m' color='red'>Red</Tag>
			<Tag size='m' color='grey'>Grey</Tag>
			<Tag size='m' color='green'>Green</Tag>
			<Tag size='m' color='primary'>Primary</Tag>

			<Rating rating={3} />
			<Rating rating={rating} isEditable setRating={setRating}/>
		</div>
	);
}
