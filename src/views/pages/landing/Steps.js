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
                                                NFC tags are small stickers, round-or-square-shaped, about the size of a large coin,
                                                compatible with NFC-enabled devices like smartphones and tablets. They are relatively cheap
                                                and allows you to transfer data between two devices that are in close proximity.
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
                                                Create a mobile friendly user interface that allows any user to access the functionalities
                                                of the smart contract using our <a href="/dashboard">PW3App builder</a>.
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
                                                Place your stickers in a physical space. Anyone who passes by with a mobile device will be
                                                able to interact with the dApp controlling the device or location.
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
