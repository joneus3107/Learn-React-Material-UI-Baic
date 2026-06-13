import { Card, CardActions, CardContent, Button, Typography, Stack } from '@mui/material';
import { formatCurrency } from '../../hooks/useJob';


export default function JobCard( {job} ) {

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
        <Button size="small" href={`/job-list/${job.id}`}>Learn More</Button>
      </CardActions>
    </Card>
  );
}