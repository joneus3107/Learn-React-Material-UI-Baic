import { CommonTitle } from '../../custom-modules';
import { useEffect } from 'react';
import { useParams } from "react-router";
import jobData from '../../assets/data.json';
import { Alert, Table, TableBody, TableRow, TableCell, Box, Typography, Stack, Button } from '@mui/material';
import { formatCurrency } from '../../hooks/useJob';

function JobDetail() {

	let params = useParams();
	const jobInfo = jobData.find(job => job.id === params.id)

	useEffect(() => {
		console.log(params);
	}, [])

	return (
		<>
			{jobInfo ? (
				<>
					<CommonTitle component='h2'>{jobInfo.title}</CommonTitle>
					<Typography component='p'>{jobInfo.description}</Typography>
					<Box component="div">
						<Table>
							<TableBody>
								<TableRow>
									<TableCell component='th'>Địa điểm</TableCell>
									<TableCell component='td'>{jobInfo.city}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell component='th'>Ngày đăng</TableCell>
									<TableCell component='td'>{jobInfo.postedDate}</TableCell>
								</TableRow>
								<TableRow>
									<TableCell component='th'>Mức lương</TableCell>
									<TableCell component='td'>{formatCurrency(jobInfo.salaryLow)} ~ {formatCurrency(jobInfo.salaryHigh)}</TableCell>
								</TableRow>
							</TableBody>
						</Table>
					</Box>
					<Stack direction="row" sx={{justifyContent: 'center', marginTop: '2rem'}}>
						<Button variant="contained" href="/job-list">Trang danh sách</Button>
					</Stack>
				</>
			) : (
				<Alert severity="error">Không thể lấy được thông tin công việc</Alert>
			)}
		</>
	)
}

export default JobDetail
