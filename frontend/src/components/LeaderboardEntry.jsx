import { Typography, useTheme, Grid } from "@mui/material"
import { tokens } from "../theme"
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
    customRow: {
      height: 40, // Set your desired height here
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'center',
    },
    customRowCenter: {
        height: 40, // Set your desired height here
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    customRowEnd: {
        height: 40, // Set your desired height here
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
      },
}));

const LeaderboardEntry = props => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const classes = useStyles();

    const entry = props.entry
    return (
        <div>
            {/* Data points */}
            
            <Grid container spacing={0}>    
                <Grid item xs={2.25} className={classes.customRowCenter}>
                    {/* Player profile picture and name */}
                    <img src={entry.avatar} height="100%" alt="P2CM"/>
                    <Typography
                        variant="h5"
                        color={colors.gray[100]}
                        fontWeight="medium"
                        sx={{m : "0 0 0 0" }}
                        width="100%"
                        align="center"
                        >
                        {entry.id}
                    </Typography>
                </Grid>
                <Grid item xs={4.75} className={classes.customRow}>
                    <img src={entry.nationality} height="50%" alt="P2CM" style={{borderRadius: 3}}/>
                    <Typography
                        variant="h5"
                        color={colors.gray[100]}
                        fontWeight="medium"
                        sx={{m : "0 0 0 12px" }}
                        >
                        {entry.playerName}
                    </Typography>
                </Grid>
                <Grid item xs={5} className={classes.customRowEnd}>
                <Typography
                        variant="h5"
                        color={colors.gray[100]}
                        fontWeight="medium"
                        sx={{m : "0 10px 0 0" }}
                        >
                        {entry.aggPoints}
                    </Typography>
                </Grid>
            </Grid>
        </div>
        )
}

export default LeaderboardEntry