const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.3s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#58e1c0',  // default: '#100f2c'
    buttonColorLight: '#a71e3f', // default: '#fff'
    saveInCookies: true, // default: true,
    label:`<i class='bx bxs-moon'></i>`, // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();