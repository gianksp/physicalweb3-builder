// material-ui
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, Container, Grid, Link, Typography, Box } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// assets
import imgbase from 'assets/images/demodapptickets.png';
import TX from 'views/pages/landing/TX';

// ============================|| LANDING - KEY FEATURE PAGE ||============================ //
const wallet = '0x53Df0FA89AD8391Cb347BF64cbf48f13e5d4Fb19';

const TestSellTickets = () => {
    const theme = useTheme();
    const avatarIconSx = {
        ...theme.typography.commonAvatar,
        cursor: 'initial',
        width: 72,
        height: 72
    };

    return (
        <Grid container justifyContent="center" spacing={gridSpacing}>
            <Grid item xs={12}>
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        lineHeight: 1.4
                    }}
                >
                    Ticket Sales
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: { xs: '1.2rem', md: '1.125rem' },
                        fontWeight: 400,
                        lineHeight: 1.4
                    }}
                >
                    Paradise Theathers now accept ticket purchase using Physical Web3. Go to the poster of the premiere you want to spectate
                    and pay 0.2 AVAX per ticket. Once the presentation starts, we will check against the wallet address.
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <FadeInWhenVisible>
                    <Grid container alignItems="center" spacing={2} sx={{ pl: 2 }} style={{ position: 'relative', marginTop: 2 }}>
                        <img
                            src="https://i.pinimg.com/originals/4d/6e/89/4d6e894dfeffe8dc60939273ee78b573.gif"
                            alt="vendor"
                            style={{
                                width: '100%'
                            }}
                        />
                        <img
                            src={imgbase}
                            alt="performer"
                            style={{
                                position: 'absolute',
                                width: '30%',
                                right: 10,
                                bottom: 10
                            }}
                        />
                        <TX title="Cinema Function: The last of the dApps II" wallet={wallet} />
                    </Grid>
                </FadeInWhenVisible>
            </Grid>
            <Grid item xs={12} md={6}>
                <FadeInWhenVisible>
                    <SubCard>
                        <Grid container alignItems="center" spacing={2} sx={{ mb: 4 }}>
                            <Grid item xs={12} style={{ textAlign: 'center' }}>
                                <Typography variant="body" fontSize="1.5em">
                                    <strong>Buy a ticket!</strong>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Avatar
                                    variant="rounded"
                                    sx={{
                                        ...avatarIconSx,
                                        bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark[800] : 'primary.light',
                                        color: theme.palette.primary.main
                                    }}
                                >
                                    1
                                </Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography variant="body" fontSize="1.2em">
                                    Scan the QR Code from your mobile and open the app.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" spacing={2} sx={{ mb: 4 }}>
                            <Grid item>
                                <Avatar
                                    variant="rounded"
                                    sx={{
                                        ...avatarIconSx,
                                        bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark[800] : 'primary.light',
                                        color: theme.palette.primary.main
                                    }}
                                >
                                    2
                                </Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography variant="body" fontSize="1.2em">
                                    Follow the instructions from the landing page. It is 0.2 AVAX per ticket!.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" spacing={2} sx={{ mb: 4 }}>
                            <Grid item>
                                <Avatar
                                    variant="rounded"
                                    sx={{
                                        ...avatarIconSx,
                                        bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark[800] : 'primary.light',
                                        color: theme.palette.primary.main
                                    }}
                                >
                                    3
                                </Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography variant="body" fontSize="1.2em">
                                    Enjoy your movie and monitor the transaction as it goes to the vendor.
                                </Typography>
                            </Grid>
                        </Grid>
                    </SubCard>
                </FadeInWhenVisible>
            </Grid>
            <Grid item xs={12} sx={{ mt: 3 }}>
                <Grid container justifyContent="center" spacing={gridSpacing}>
                    <Grid item>
                        <AnimateButton>
                            <Button component={Link} href="https://youtu.be/lpf_C_3opu4" target="_blank" variant="contained">
                                Watch the video
                            </Button>
                        </AnimateButton>
                    </Grid>
                    <Grid item>
                        <Button component={Link} href="/cases" variant="text">
                            More use cases
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TestSellTickets;
