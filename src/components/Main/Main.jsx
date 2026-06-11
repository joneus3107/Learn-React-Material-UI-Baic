import { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/AppContext';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import { Container, Grid } from '@mui/material';
import JobCard from '../JobCard/JobCard';
import jobData from '../../assets/data.json';
import { CommonTitle } from '../../custom-modules';
import Pagination from '@mui/material/Pagination';

//CONSTANT
import { POSTS_PER_PAGE } from '../../setting';



function Main() {
	const [page, setPage] = useState(1);
	const { logInOnly } = useContext(ThemeContext);

	const renderJob = () => {
		const start = (page - 1) * POSTS_PER_PAGE;
		const end = page * POSTS_PER_PAGE;

		return jobData.slice(start, end);
	}

	return (
		<Box component="main" sx={{ paddingBlock: '50px'}}>
			<Container>
				{logInOnly?
					(
						<>
							<CommonTitle component='h2'>Đang tuyển dụng</CommonTitle>
							{jobData.length?(
								<Grid container spacing={3}>
									{renderJob().map( job => {
										return (
											<Grid key={job.id} size={{ xs: 12, sm: 6, md: 4 }}>
												<JobCard job={job} />
											</Grid>
										)
									})}
								</Grid>
							):'Hiện tại chưa có công việc nào!'}
							<Box component="div" sx={{
								display: 'flex',
								justifyContent: 'center',
								marginTop: '2em',
							}}>
								<Pagination
									count={Math.ceil(jobData.length / POSTS_PER_PAGE)}
									variant="outlined" color="primary"
									onChange={(e, page) => setPage(page)}
									disabled={POSTS_PER_PAGE >= jobData.length}
								/>
							</Box>
						</>
					)
					:
					<Alert variant="outlined" severity="error">Đăng nhập để xem được nội dung website</Alert>
				}
			</Container>
		</Box>
	)
}

export default Main
