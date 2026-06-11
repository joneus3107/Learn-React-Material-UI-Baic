import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Stack } from '@mui/material';

export default function JobCard( {job} ) {

	const formatCurrency = num => {
		return new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'USD',
			currencyDisplay: 'narrowSymbol',
		}).format(num);
	}

  return (
    <Card variant="outlined" sx={{ height: '100%', boxSizing: 'border-box', backgroundColor: 'jobCard.backgroundColor'}}>
      <CardContent>
        <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
          {job.city}
        </Typography>
        <Typography variant="h5" component="div">
          {job.title}
        </Typography>
        <Typography sx={{ color: 'primary.main', fontWeight: 500, opacity: 0.8, mb: 1.5 }}>
					{formatCurrency(job.salaryLow)} ~ {formatCurrency(job.salaryHigh)}
				</Typography>
        <Typography variant="body2">
          {job.description}
        </Typography>
				{job.skills && (
					<Stack 
						direction="row" 
						spacing={1}
						useFlexGap
						sx={{ flexWrap: 'wrap', mt: 2}}
					>
						{job.skills.map( (skill) => 
							<Typography
								key={skill}
								component="span"
								sx={{
									color: 'primary.main',
									opacity: .8,
									textDecoration: 'underline'
								}}
							>#{skill}</Typography>
						)}
					</Stack>
				)}
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}