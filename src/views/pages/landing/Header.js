import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material';

// third party
import { motion } from 'framer-motion';

// project imports
import Avatar from 'ui-component/extended/Avatar';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// ==============================|| LANDING - HEADER PAGE ||============================== //

const HeaderPage = () => {
    const theme = useTheme();

    return (
        <Container>
            <Grid
                container
                alignItems="center"
                justifyContent="space-between"
                spacing={gridSpacing}
                sx={{ mt: { xs: 10, sm: 6, md: 18.75 }, mb: { xs: 2.5, md: 10 } }}
            >
                <Grid item xs={12} md={5}>
                    <Grid container spacing={gridSpacing} sx={{ pr: 10, [theme.breakpoints.down('lg')]: { pr: 0, textAlign: 'center' } }}>
                        <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 30
                                }}
                            >
                                <Typography
                                    variant="h1"
                                    sx={{
                                        fontSize: { xs: '2.25rem', sm: '3rem', md: '4rem' },
                                        fontWeight: 900,
                                        lineHeight: 1.4
                                    }}
                                >
                                    Walk up and use
                                    <Box component="span" sx={{ ml: 2, color: theme.palette.primary.main }}>
                                        anything
                                    </Box>
                                </Typography>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 30,
                                    delay: 0.2
                                }}
                            >
                                <Typography
                                    variant="h3"
                                    component="div"
                                    color="inherit"
                                    sx={{
                                        fontSize: '1.5em',
                                        fontWeight: 400,
                                        lineHeight: 1.4
                                    }}
                                >
                                    The Physical Web 3 is a decentralized approach to enabling quick and seamless interactions with physical
                                    objects and locations powered by smart contracts.
                                </Typography>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12} sx={{ my: 3.25 }}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 30,
                                    delay: 0.4
                                }}
                            >
                                <Grid container spacing={2} sx={{ justifyContent: { xs: 'center', md: 'flex-start' } }}>
                                    <Grid item>
                                        <AnimateButton>
                                            <Button
                                                component={RouterLink}
                                                to="/dashboard"
                                                size="large"
                                                variant="contained"
                                                color="secondary"
                                            >
                                                Start Building
                                            </Button>
                                        </AnimateButton>
                                    </Grid>
                                    <Grid item>
                                        <Button component={RouterLink} to="/examples" size="large" variant="text">
                                            Live Examples
                                        </Button>
                                    </Grid>
                                </Grid>
                            </motion.div>
                        </Grid>
                        <Grid item xs={12}>
                            <motion.div
                                initial={{ opacity: 0, translateY: 550 }}
                                animate={{ opacity: 1, translateY: 0 }}
                                transition={{
                                    type: 'spring',
                                    stiffness: 150,
                                    damping: 30,
                                    delay: 0.6
                                }}
                            >
                                <Grid
                                    container
                                    alignItems="center"
                                    spacing={2}
                                    sx={{ [theme.breakpoints.down('lg')]: { display: 'inline-flex', width: 'auto' } }}
                                >
                                    <Grid item>
                                        <Avatar
                                            alt="MUI Logo"
                                            color="primary"
                                            sx={{
                                                width: 50,
                                                height: 50,
                                                padding: 0.5,
                                                background:
                                                    theme.palette.mode === 'dark' ? theme.palette.dark.light : theme.palette.primary.light
                                            }}
                                            variant="rounded"
                                            src="https://moralis.io/wp-content/uploads/hackathon/moralisAvax2.svg"
                                        />
                                    </Grid>
                                    <Grid item xs zeroMinWidth>
                                        <Typography variant="h4" component="div" color="inherit" sx={{ fontWeight: 400, lineHeight: 1.4 }}>
                                            <b>Powered by Moralis</b> - A project for the Moralis & Avalanche hackathon, 2022.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </motion.div>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={7} sx={{ display: { md: 'flex' }, maxWidth: '100%' }}>
                    <Box sx={{ position: 'relative' }} style={{ 'text-align': 'center' }}>
                        <img
                            src="https://s10.gifyu.com/images/ezgif.com-gif-maker564eb7fd421e127f.gif"
                            alt="Physical Web3"
                            style={{ margin: '0 auto', maxWidth: '100%' }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default HeaderPage;
