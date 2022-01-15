// material-ui
import { useTheme } from '@mui/material/styles';
import { Container, Grid, Typography } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import Avatar from 'ui-component/extended/Avatar';
import { gridSpacing } from 'store/constant';

import imgbase from 'assets/images/use_case_1.svg';
import howItWorks from 'assets/images/how-it-works.svg';

// assets
import PaletteTwoToneIcon from '@mui/icons-material/PaletteTwoTone';
import ReorderTwoToneIcon from '@mui/icons-material/ReorderTwoTone';
import SpeedTwoToneIcon from '@mui/icons-material/SpeedTwoTone';

// =============================|| LANDING - FEATURE PAGE ||============================= //

const FeaturePage = () => {
    const theme = useTheme();

    return (
        <Container>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={gridSpacing} sx={{ textAlign: 'center' }}>
                        <Grid item md={4} sm={6}>
                            <FadeInWhenVisible>
                                <SubCard>
                                    <Grid container justifyContent="center" spacing={2}>
                                        <Grid item>
                                            <img src="https://i.makeagif.com/media/11-25-2018/shTaNn.gif" alt="use" width="345" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h3">Evertyhing is a tap away</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2">
                                                Walk up and interact with any object -- a parking meter, a toy, a poster -- or location -- a
                                                bus stop, a museum, a store -- without installing an app first. Interactions are only a tap
                                                away.
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
                                            <img
                                                src="https://thumbs.gfycat.com/AdorableVainJaeger-size_restricted.gif"
                                                alt="use"
                                                width="345"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h3">All things and places powered by Smart Contracts</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2">
                                                By having physical objects and locations being driven by smart contracts and dApps, we can
                                                unleash the true power of smart objects.
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
                                            <img
                                                src="https://thumbs.gfycat.com/SimilarFrightenedCapybara-max-1mb.gif"
                                                alt="use"
                                                width="345"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="h3">Any object or place can transfer data or value</Typography>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Typography variant="body2">
                                                When anything can offer information and utility, the possiblities are endless. From digital
                                                identities, to NFTs and Defi, enhance evertyhing around you.
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </SubCard>
                            </FadeInWhenVisible>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid item xs={12} sx={{ mt: 5, mb: 3 }}>
                        <Typography variant="h1" component="div">
                            How does this work?
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
                            The Physical Web3 enables you to interact with objects in the environment around you. These objects are embedded
                            with an NFC (Near Field Communication) tag or sticker, which is a short range, contactless connection device
                            that can broadcast URL addresses. When users get their mobiles close to the tag a message pulls down from the
                            top of the device asking if they want to open their browser. When they tap the message the respective dApp
                            controller is launched and they can interact with the smart contract driving the smart object.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <img src={howItWorks} alt="how it works" width="100%" />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default FeaturePage;
