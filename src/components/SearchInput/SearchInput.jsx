
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from '../../custom-modules';



export default function SearchInput({sx}) {
	return (
		<Search sx={sx}>
			<SearchIconWrapper>
				<SearchIcon />
			</SearchIconWrapper>
			<StyledInputBase
				placeholder="Tìm kiếm..."
				inputProps={{ 'aria-label': 'search' }}
			/>
		</Search>
	)

}