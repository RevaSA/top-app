import { Button, Htag, P, Tag } from '../components';

export default function Home(): JSX.Element {
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
		</div>
	);
}
