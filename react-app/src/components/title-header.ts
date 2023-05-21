import { styled } from '@mui/system';

const StyledTitleHeader = styled('header')(({ theme }) =>
    theme.unstable_sx({
        width: 290,

        p: 2,

        textAlign: 'center',
        fontFamily: 'fontFamily.title',
        fontSize: 'fontSize.title',
        fontWeight: 'fontWeight.title'
    })
);

export default StyledTitleHeader;
