// material-ui
import { useTheme } from '@mui/material/styles';
import logo from 'assets/images/logo.svg';
import NfcIcon from '@mui/icons-material/Nfc';
import SensorsIcon from '@mui/icons-material/Sensors';
import { Box, Container, Grid, Typography, Stack } from '@mui/material';
/**
 * if you want to use image instead of <svg> uncomment following.
 *
 * import logoDark from 'assets/images/logo-dark.svg';
 * import logo from 'assets/images/logo.svg';
 *
 */

// ==============================|| LOGO SVG ||============================== //

const Logo = () => {
    const theme = useTheme();

    return (
        /**
         * if you want to use image instead of svg uncomment following, and comment out <svg> element.
         *
         * <img src={theme.palette.mode === 'dark' ? logoDark : logo} alt="Berry" width="100" />
         *
         */
        // eslint-disable-next-line jsx-a11y/alt-text
        <Grid container direction="row" alignItems="center">
            <SensorsIcon sx={{ fontSize: '3em', mr: 0.5 }} style={{ fill: '#1871e8' }} />
            <Typography sx={{ fontSize: '1.75em' }} color="#1871e8">
                Physical Web3
            </Typography>
        </Grid>
    );
};

export default Logo;
