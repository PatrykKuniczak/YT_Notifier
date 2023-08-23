import { styled, useTheme } from '@mui/system';
import { FormControl } from '@mui/base';
import { StyledButton } from '../../../../shared/button.ts';
import { StyledIcon } from '../../../../shared/icon.ts';
import plusIcon from '../../../../../assets/plus-icon.svg';
import Input from '../../../../shared/input.tsx';
import { ErrorMessage } from '../../../../shared/error.tsx';

const StyledForm = styled('form')(({ theme }) =>
    theme.unstable_sx({
        display: 'flex',
        alignItems: 'start',
        gap: 1,

        width: '100%'
    })
);

const StyledSubmitButton = styled(StyledButton)(({ theme }) =>
    theme.unstable_sx({
        display: 'grid',
        placeItems: 'center',

        height: 'auto',

        p: 0.75,

        backgroundColor: 'background.purple',

        borderRadius: 1
    })
);

const StyledKeywordInput = styled(Input)(({ theme }) =>
    theme.unstable_sx({
        display: 'flex',
        alignItems: 'center',
        gap: 1,

        width: '100%',

        px: 1.5,
        py: 1,

        backgroundColor: 'background.searchBar',
        color: 'color.primary',

        textAlign: 'left',

        borderRadius: 10,

        '&::placeholder': {
            color: 'color.placeholder'
        }
    })
);

const AddInput = () => {
    const theme = useTheme();

    return (
        <StyledForm>
            <FormControl
                defaultValue=""
                required
                style={{ width: '100%' }}>
                <ErrorMessage />
                <StyledKeywordInput />
            </FormControl>
            <StyledSubmitButton type={'submit'}>
                <StyledIcon
                    src={plusIcon}
                    alt={'Add keyword'}
                    width={20}
                    height={20}
                    sx={{
                        filter: `${theme.palette.background.searchIconFilter}`
                    }}
                />
            </StyledSubmitButton>
        </StyledForm>
    );
};

export default AddInput;
