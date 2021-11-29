import { GetStaticProps } from 'next';
import { useState } from 'react';
import axios from 'axios';
import { withLayout } from '../layout/Layout';
import { Button, Htag, P, Rating, Tag } from '../components';
import { MenuItem } from '../interfaces/menu.interface';

function Home({ menu }: HomeProps): JSX.Element {
	const [rating, setRating] = useState<number>(3);

	return (
		<>
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

			<ul>
				{menu.map(m => (<li key={m._id.secondCategory}>{m._id.secondCategory}</li>))}
			</ul>
		</>
	);
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;

	const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	});

	return {
		props: {
			menu,
			firstCategory,
		},
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
