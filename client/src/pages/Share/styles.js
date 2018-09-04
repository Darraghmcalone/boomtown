const styles = theme => ({
    root: {
      flexGrow: 1,
      flexdirection: "space-between",
      height: '100%',
      background: 'white',
      padding: theme.spacing.unit * 5,
      [theme.breakpoints.up('md')]: {
        padding: theme.spacing.unit * 20
      }
    },
    navbar: {
        height: '10%',
       background:theme.palette.text.primary
      
    },
    headline: {
      fontWeight: 700,
      color: theme.palette.text.primary,
      fontSize: theme.typography.display3.fontSize,
      [theme.breakpoints.up('md')]: {
        fontSize: theme.typography.display4.fontSize
      }
    },
    subheading: {
      fontWeight: 400,
      color: 'white'
    }
  })
  
  export default styles
  