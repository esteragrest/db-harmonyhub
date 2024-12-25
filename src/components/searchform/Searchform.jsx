import styles from './searchform.module.css';
import PropTypes from 'prop-types';

export const SearchForm = ({ searchValue, setSearchValue }) => {
	return (
		<>
			<form
				className={styles.form}
				onSubmit={(event) => {
					event.preventDefault();
				}}
			>
				<input
					type="text"
					name="searchtodos"
					id="searchtodos"
					value={searchValue}
					onChange={({ target }) => setSearchValue(target.value)}
					placeholder="Дело, которое нужно найти..."
				/>
			</form>
		</>
	);
};

SearchForm.propTypes = {
	searchValue: PropTypes.string,
	setSearchValue: PropTypes.func,
};
