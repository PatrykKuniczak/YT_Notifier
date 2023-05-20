import { styled } from '@mui/system';
import Input, { InputProps } from '@mui/base/Input';
import { forwardRef, Ref, useRef } from 'react';
import searchIcon from '../assets/search-icon.svg';

const SearchBarStyles = styled('input')(({ theme }) =>
    theme.unstable_sx({
        width: 242,

        py: 0.5,
        pl: 3,
        pr: 0.5,
        borderRadius: 50,

        background: `url(${searchIcon}) no-repeat scroll 6px 5.5px`,
        backgroundSize: 12,
        backgroundColor: 'background.searchBar',

        '&:focus': {
            outline: '1.5px solid grey',
            outlineOffset: 1.5
        },

        '&::placeholder': {
            color: 'color.placeholder'
        }
    })
);

const StyledCustomInput = forwardRef<HTMLSpanElement | null, InputProps>(
    (props, ref) => {
        return (
            <Input
                slots={{ root: 'span', input: SearchBarStyles }}
                {...props}
                ref={ref as Ref<HTMLDivElement>}
            />
        );
    }
);
export default function StyledSearchBar() {
    const ref = useRef<HTMLSpanElement | null>(null);

    const inputRef =
        ref.current && (ref.current.children[0] as HTMLSpanElement);

    const focus = (): void => {
        inputRef && inputRef.focus();
    };

    return (
        <StyledCustomInput
            ref={ref}
            aria-label="Search Bar"
            placeholder={'Wyszukaj'}
            tabIndex={-1}
            autoFocus={true}
            onMouseOver={focus}
        />
    );
}
