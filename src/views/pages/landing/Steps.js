// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';
import { gridSpacing } from 'store/constant';

// assets
import PaletteTwoToneIcon from '@mui/icons-material/PaletteTwoTone';
import ReorderTwoToneIcon from '@mui/icons-material/ReorderTwoTone';
import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BuildIcon from '@mui/icons-material/Build';
import LaunchIcon from '@mui/icons-material/Launch';
import TapAndPlayIcon from '@mui/icons-material/TapAndPlay';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

// =============================|| LANDING - FEATURE PAGE ||============================= //

const StepsPage = () => {
    const theme = useTheme();

    return (
        <Container>
            <Grid container spacing={gridSpacing}>
                <Grid item>
                    <Grid item xs={12}>
                        <Typography variant="h1" component="div">
                            Explore the Physical Web3 in 3 easy steps
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                        <Grid item md={4} sm={6}>
                            <FadeInWhenVisible>
                                <SubCard>
                                    <Grid container justifyContent="center" spacing={2}>
                                        <Grid item>
                                            <Avatar
                                                size="xl"
                                                variant="rounded"
                                                sx={{
                                                    background:
                                                        theme.palette.mode === 'dark'
                                                            ? theme.palette.dark[900]
                                                            : theme.palette.primary.light,
                                                    color: theme.palette.primary.main
                                                }}
                                            >
                                                <DeveloperModeIcon fontSize="large" />
                                            </Avatar>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h3">1. Deploy Smart Contract</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2">
                                                Launch your EVM compatible smart contract. You can use our
                                                <a style={{ margin: '0px 2px' }} href="/resources">
                                                    samples
                                                </a>
                                                to quickly test the functionality of this prototype. Visit our
                                                <a style={{ margin: '0px 2px' }} href="/resources">
                                                    resources
                                                </a>
                                                section to learn more on how to do this. What you need for the physical Web3 is a smart
                                                contract address and the ABI.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </SubCard>
                            </FadeInWhenVisible>
                        </Grid>
                        <Grid item md={4} sm={6}>
                            <FadeInWhenVisible>
                                <SubCard>
                                    <Grid container justifyContent="center" spacing={2}>
                                        <Grid item>
                                            <Avatar
                                                size="xl"
                                                variant="rounded"
                                                sx={{
                                                    background:
                                                        theme.palette.mode === 'dark'
                                                            ? theme.palette.dark[900]
                                                            : theme.palette.secondary.light,
                                                    color: theme.palette.secondary.main
                                                }}
                                            >
                                                <MobileFriendlyIcon fontSize="large" />
                                            </Avatar>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h3">2. Launch Controller dApp</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2">
                                                Use our <a href="/dashboard">PW3App builder</a> to generate a mobile UI for any EVM based
                                                smart contract. Is as simple as creating a new app and setting up the smart contract address
                                                and the ABI. It will generate a functional mobile ready interface to access all smart
                                                contract functions.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </SubCard>
                            </FadeInWhenVisible>
                        </Grid>
                        <Grid item md={4} sm={6}>
                            <FadeInWhenVisible>
                                <SubCard>
                                    <Grid container justifyContent="center" spacing={2}>
                                        <Grid item>
                                            <Avatar
                                                size="xl"
                                                variant="rounded"
                                                sx={{
                                                    background:
                                                        theme.palette.mode === 'dark'
                                                            ? theme.palette.dark[900]
                                                            : theme.palette.success.light,
                                                    color: theme.palette.success.dark
                                                }}
                                            >
                                                <TapAndPlayIcon fontSize="large" />
                                            </Avatar>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h3">3. Deploy NFC Tags</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2">
                                                Once we have a smart contract and a mobile interface to access it, we need to enable
                                                discoverability. Visit our
                                                <a style={{ margin: '0px 2px' }} href="/resources">
                                                    resources
                                                </a>
                                                to learn more about how to acquire and write NFC tags to surface your dApp controller url.
                                                It is a very simple exercise and unexpensive.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </SubCard>
                            </FadeInWhenVisible>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default StepsPage;
