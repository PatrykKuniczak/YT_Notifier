import { styled } from '@mui/system';
import { FormControl } from '@mui/base';
import { textMixin } from '@pages/popup/data/mixins/text-mixin';
import StyledInput from '@pages/popup/components/shared/input';
import { IStyledKeyword } from '@root/utils/interfaces/use-keyword.interface';
import { useHandleKeyEvents } from '@root/utils/hooks/use-handle-key-events';
import { useEditKeyword } from '@root/utils/hooks/use-edit-keyword';
import { StyledErrorMessage } from '@pages/popup/components/shared/error';

const keywordStyles = {
	...textMixin,

	px: 0.75,
	py: 0.25,
};

const StyledKeywordSpan = styled('span')(({ theme }) =>
	theme.unstable_sx({
		...keywordStyles,

		whiteSpace: 'nowrap',
		textOverflow: 'ellipsis',

		overflow: 'hidden',
	}),
);

const StyledKeywordInput = styled(StyledInput)(({ theme }) =>
	theme.unstable_sx({
		...keywordStyles,

		width: '100%',

		borderRadius: 1,

		backgroundColor: 'background.secondary',

		textAlign: 'start',
	}),
);

export const StyledKeyword = ({ value, openedInput, changeInputVisibility }: IStyledKeyword) => {
	const { handleKeyEvent } = useHandleKeyEvents();
	const {
		focus,
		value: inputValue,
		handleStateChange,
		previousValue,
		handlePreviousValueChange,
	} = useEditKeyword(value);

	const handleApplyingChanges = () => {
		if (inputValue.length > 1) {
			handlePreviousValueChange(inputValue);
		}
		changeInputVisibility();
	};

	return openedInput ? (
		<FormControl
			defaultValue=""
			required
			onChange={event => handleStateChange(event.target.value)}
			value={inputValue}
			style={{ width: '100%', position: 'relative' }}>
			<StyledErrorMessage />
			<StyledKeywordInput
				placeholder="Podaj słowo kluczowe"
				onMouseOver={focus}
				onKeyDown={event => handleKeyEvent(event, handleApplyingChanges, handleApplyingChanges)}
			/>
		</FormControl>
	) : (
		<StyledKeywordSpan>{previousValue}</StyledKeywordSpan>
	);
};
