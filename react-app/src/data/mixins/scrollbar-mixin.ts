export const scrollbarMixin = {
    overflow: 'scroll',

    pb: 12,

    '&:hover': {
        '&::-webkit-scrollbar-thumb': {
            bgcolor: '#7846F0'
        },

        '&::-webkit-scrollbar-thumb:active': {
            bgcolor: '#581fe1'
        }
    },

    '&::-webkit-scrollbar': {
        width: 12
    },

    '&::-webkit-scrollbar-track': {
        mb: 12
    },

    '&::-webkit-scrollbar-thumb': {
        border: '2px solid transparent',
        borderRadius: 10,

        bgcolor: 'transparent',
        backgroundClip: 'padding-box'
    },

    '&::-webkit-scrollbar-corner': {
        background: 'none'
    }
};
