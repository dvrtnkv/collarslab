import * as React from 'react'
import Layout from '../components/Layout'
import Link from '../components/Link'
import { Box, Button, Card, CardActions, CardContent, Typography, Grid } from '@mui/material'

const Home = () => {
	return (
		<Layout title='Cайт под ключ' desc='Разработка сайта под ключ'>
			<Box textAlign='center'>
				<Typography variant='h1' gutterBottom>
					Создам сайт
				</Typography>
				<Link href='/feed'>
					<Button variant='contained' disableElevation sx={{ color: '#FFFFFF' }}>
						Заказать
					</Button>
				</Link>
			</Box>
			<Box
				sx={{
					my: 2,
					display: 'grid',
					gap: 2,
					gridTemplateColumns: { sm: 'repeat(2, 1fr)' }
				}}
			>
				<Card variant='outlined'>
					<CardContent p={2}>
						<Typography variant='h2' gutterBottom>
							Backend
						</Typography>
						<Typography variant='body1'>Nginx, Nodejs, Express, JWT</Typography>
					</CardContent>
				</Card>
				<Card variant='outlined'>
					<CardContent p={2}>
						<Typography variant='h2' gutterBottom>
							Frontend
						</Typography>
						<Typography variant='body1'>Next.js, React</Typography>
					</CardContent>
				</Card>
				<Card variant='outlined'>
					<CardContent p={2}>
						<Typography variant='h2' gutterBottom>
							Выполнено
						</Typography>
						<Typography variant='body1'>Будь первым в списке!</Typography>
					</CardContent>
				</Card>
				<Card variant='outlined'>
					<CardContent p={2}>
						<Typography variant='h2' gutterBottom>
							От А до Я
						</Typography>
						<Typography variant='body1'>Регистрация домена, аренда сервера настройка UX.</Typography>
					</CardContent>
				</Card>
			</Box>
		</Layout>
	)
}
export default Home
