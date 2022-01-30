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
import imgbase from 'assets/images/demodappvendor.png';
import TX from 'views/pages/landing/TX';

// ============================|| LANDING - KEY FEATURE PAGE ||============================ //
const wallet = '0x514c4c1c96486dD78B1f862d6FcB3028e1c1C06E';

const TestVendor = () => {
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
                    Street Vendor
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
                    Arthur has an ice cream truck and recently started using The Physical Web3 to receive payments in crypto in exchange for
                    his delicious ice creams!.
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <FadeInWhenVisible>
                    <Grid container alignItems="center" spacing={2} sx={{ pl: 2 }} style={{ position: 'relative', marginTop: 2 }}>
                        <img
                            src="https://i.giphy.com/media/l378h3ACjfZnlY2Yw/giphy.webp"
                            alt="vendor"
                            style={{
                                width: '110%'
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
                        <TX title="Arhtur's Shop Latest Transactions" wallet={wallet} />
                    </Grid>
                </FadeInWhenVisible>
            </Grid>
            <Grid item xs={12} md={6}>
                <FadeInWhenVisible>
                    <SubCard>
                        <Grid container alignItems="center" spacing={2} sx={{ mb: 4 }}>
                            <Grid item xs={12} style={{ textAlign: 'center' }}>
                                <Typography variant="body" fontSize="1.5em">
                                    <strong>Get an ice cream!</strong>
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
                                    Follow the instructions from the landing page. Pay Arthur 0.1 AVAX.
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
                                    Enjoy your ice cream and see Arthur wallet balance updated.
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
                            <Button component={Link} href="https://youtu.be/9vMd3nNCQJg" target="_blank" variant="contained">
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

export default TestVendor;
