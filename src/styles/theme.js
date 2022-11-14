export const theme = {
  colors: {
    purple: '#9880F9',
    pink: '#FF54B0',
    red: '#FE3459',
    grey_01: '#333333',
    grey_02: '#33333399',
    grey_03: '#33333366',
    grey_04: '#33333333',
    white: '#FFFFFF',
  },
  fontSizes: {
    title01: '1.8rem',
    title02: '1.6rem',
    title03: '1.4rem',
    title04: '1.4rem',
    body01: '1.2rem',
    body02: '1.2rem',
    body03: '1.0rem',
  },
  fontWeights: {
    title01: '600',
    title02: '600',
    title03: '500',
    title04: '500',
    body01: '600',
    body02: '500',
    body03: '500',
  },
};

export const mixins = {
  rowFlexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,
  columnFlexBox: (direction = 'column', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
    `,
};
