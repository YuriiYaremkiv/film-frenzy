const modeConfig = {
  style: {
    backgroundColorHeader: {
      light: {
        backgroundColor: '#fff',
      },
      dark: {
        backgroundColor: '#050505',
      },
      red: {
        backgroundColor: '#050505',
      },
    },
    backgroundColorMain: {
      light: {
        backgroundColor: 'rgba(0, 0, 0, 0.04)',
      },
      dark: {
        backgroundColor: '#000',
      },
      red: {
        backgroundColor: '#000',
      },
    },
    backgroundColorSecondary: {
      light: {
        backgroundColor: '#fafafa',
      },
      dark: {
        backgroundColor: '#212121',
      },
      red: {
        backgroundColor: '#212121',
      },
    },
    backgroundColorModal: {
      light: {
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
      },
      dark: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      },
      red: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
      },
    },
    textColor: {
      light: {
        color: '#000',
      },
      dark: {
        color: '#fff',
      },
      red: {
        color: '#fff',
      },
    },
    textColorAndHover: {
      light: {
        color: 'red',
        transition: 'color 0.2s ease-in-out',
      },
      dark: {
        color: 'red',
        transition: 'color 0.2s ease-in-out',
      },
      red: {
        color: 'red',
        transition: 'color 0.2s ease-in-out',
      },
    },
    gradientBgImage: {
      light: {
        backgroundImage:
          'linear-gradient(to top, rgba(245,245,245,1), rgba(0,0,0,0))',
      },
      dark: {
        backgroundImage:
          'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
      },
      red: {
        backgroundImage:
          'linear-gradient(to top, rgba(0,0,0,1), rgba(0,0,0,0))',
      },
    },
    horizontalGradientBgImage: {
      light: {
        backgroundImage:
          'linear-gradient(to right, rgba(245,245,245,1), rgba(0,0,0,0))',
      },
      dark: {
        backgroundImage:
          'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))',
      },
      red: {
        backgroundImage:
          'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))',
      },
    },
  },
  themeConfig: {
    light: 'light',
    dark: 'dark',
    red: 'red',
  },
};

export default modeConfig;
