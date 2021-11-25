import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
	return (
		<div>
			<Htag tag='h1'>Hello world!</Htag>
			<Button appearance='primary'>Primary</Button>
			<Button appearance='ghost'>Ghost</Button>
			<Button appearance='ghost' arrow='right'>Ghost arrow right</Button>
			<Button appearance='ghost' arrow='down'>Ghost arrow down</Button>
		</div>
	);
}
