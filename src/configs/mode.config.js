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
    backgroundColorMenu: {
      light: {
        backgroundColor: '#fff',
      },
      dark: {
        backgroundColor: 'rgb(19, 19, 19)',
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))',
      },
      red: {
        backgroundColor: 'rgb(19, 19, 19)',
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15))',
      },
    },
    backgroundColorAccent: {
      light: {
        backgroundColor: '#01b4e4',
        '&:hover': { backgroundColor: '#40c4ff' },
      },
      dark: {
        backgroundColor: '#01b4e4',
        '&:hover': { backgroundColor: '#40c4ff' },
      },
      red: {
        backgroundColor: '#d50000',
        '&:hover': { backgroundColor: '#e53935' },
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
    textColorSecondary: {
      light: {
        color: '#000',
      },
      dark: {
        color: '#000',
      },
      red: {
        color: '#fff',
      },
    },
    textColorAccent: {
      light: {
        color: '#01b4e4',
      },
      dark: {
        color: '#01b4e4',
      },
      red: {
        color: '#d50000',
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
          'linear-gradient(to right, rgba(245,245,245,0.8), rgba(0,0,0,0))',
      },
      dark: {
        backgroundImage:
          'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0))',
      },
      red: {
        backgroundImage:
          'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0))',
      },
    },
    verticalGradientBgImage: {
      light: {
        backgroundImage:
          'linear-gradient(to top, rgba(245,245,245,0.9), rgba(0,0,0,0))',
      },
      dark: {
        backgroundImage:
          'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))',
      },
      red: {
        backgroundImage:
          'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))',
      },
    },
    horizontalGradientBgProgress: {
      light: {
        backgroundImage:
          'linear-gradient(to top, rgba(245,245,245,0.95), rgba(245,245,245,0.3))',
      },
      dark: {
        backgroundImage:
          'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))',
      },
      red: {
        backgroundImage:
          'linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0))',
      },
    },
  },
  bgAccent: {
    light: {
      backgroundColor: '#01b4e4',
      '&:hover': { backgroundColor: '#40c4ff' },
    },
    dark: {
      backgroundColor: '#01b4e4',
      '&:hover': { backgroundColor: '#40c4ff' },
    },
    red: {
      backgroundColor: '#d50000',
      '&:hover': { backgroundColor: '#e53935' },
    },
  },
  bgAccentHover: {
    light: {
      '&:hover': { backgroundColor: '#40c4ff' },
    },
    dark: {
      '&:hover': { backgroundColor: '#40c4ff' },
    },
    red: {
      '&:hover': { backgroundColor: '#e53935' },
    },
  },
  color: {
    red: '#d50000',
    blue: 'rgba(1, 180, 228, 1)',
  },
  themeConfig: {
    light: 'light',
    dark: 'dark',
    red: 'red',
  },
};

export default modeConfig;
