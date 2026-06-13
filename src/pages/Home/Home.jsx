import { Box, Grid, Paper, Button, Stack } from '@mui/material';
import { CommonTitle } from '../../custom-modules';
import { JobCard } from '../../components';
// Data
import jobData from "../../assets/data.json";



function Home() {
	return (
		<>
			<Paper>
				<img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/aed43797592861.5ec887477b1b6.png" alt="" />
			</Paper>

			<Box component="section" sx={{ marginTop: '3rem'}}>
				<CommonTitle component='h2'>Mới nhất</CommonTitle>
				<Grid container spacing={3}>
					{jobData.slice(0, 3).map(job => (
						<Grid key={job.id} size={{ xs: 12, sm: 6, md: 4 }}>
							<JobCard job={job} />
						</Grid>
					))}
				</Grid>
				<Stack direction="row" sx={{justifyContent: 'center', marginTop: '2rem'}}>
					<Button variant="contained" href="job-list">Xem thêm</Button>
				</Stack>
			</Box>
		</>
	)
}

export default Home
