export const scrollbarMixin = {
  pb: 12,

  overflowY: 'scroll',
  overflowX: 'hidden',

  '&:hover': {
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: '#7846F0',
    },

    '&::-webkit-scrollbar-thumb:active': {
      backgroundColor: '#581fe1',
    },
  },

  '&::-webkit-scrollbar': {
    width: 12,
  },

  '&::-webkit-scrollbar-track': {
    mb: 12,
  },

  '&::-webkit-scrollbar-thumb': {
    border: '2px solid transparent',
    borderRadius: 10,

    backgroundColor: 'transparent',
    backgroundClip: 'padding-box',
  },

  '&::-webkit-scrollbar-corner': {
    background: 'none',
  },
};
