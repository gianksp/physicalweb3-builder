import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Grid, Container, Button, Link, Chip } from '@mui/material';
import { gridSpacing } from 'store/constant';
import AnimateButton from 'ui-component/extended/AnimateButton';
import FadeInWhenVisible from 'views/pages/landing/Animation';
import SubCard from 'ui-component/cards/SubCard';

const items = [
    {
        title: 'Track Lost Pets',
        description:
            'A dog collar NFC Tag could broadcast a URL providing basic information about the dog. If the dog is lost, its owner can update the status to help others know to return it.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl: 'https://thumbs.gfycat.com/TangibleGoodnaturedAnhinga-size_restricted.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU'
        // tech: ['Avalanche', 'Moralis', 'Chainlink']
    },
    {
        title: 'Monetize Idle Parking Space',
        description:
            'Monetize idle parking space by setting up a dApp that allows visitors to book them for how long they need via their mobile phone with little management overhead.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl:
            'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555297879/shape/mentalfloss/laliving.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU'
    },
    {
        title: 'Share Your Work',
        description:
            'Street performers can receive payments and contributions in exchange for sharing NFTs about their work with their supporters. Proximity value transfer has not been easier.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl: 'https://cdn.dribbble.com/users/3377233/screenshots/6226947/jamming.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU'
    },
    {
        title: 'Simplify Registration Process',
        description:
            'Hospitals can allow patients to fill out the form and complete the registration procedures online from their smartphones, without the hassle of standing in long queues.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl: 'https://thumbs.gfycat.com/SimilarFrightenedCapybara-size_restricted.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU'
    },
    {
        title: 'Share Wifi With Guests',
        description:
            'Leverage NFC and blockchain in order to inform visitors about the steps involved in connecting to the WiFi network. They can just use their mobile phone and self service.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl: 'https://thumbs.gfycat.com/GargantuanPerfumedIsopod-size_restricted.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU'
    },
    {
        title: 'Track Fitness Goals',
        description:
            'Gyms and Fitness studios can help members track their progress towards fitness goals by having them share metrics as they attend and then analyzing it.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl: 'https://thumbs.gfycat.com/LegitimateScornfulIraniangroundjay-size_restricted.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU'
    },
    {
        title: 'Provide Navigational Guidance',
        description:
            'Large facilities can easily help their guests locate areas and allow them to book attractions, buy mechandise and self service from their mobile phone.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl: 'https://thumbs.gfycat.com/GenerousYoungCarpenterant-size_restricted.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU'
    },
    {
        title: 'Collect Customer Feedback',
        description:
            'Collecting guest feedback is key to ensuring success in the hospitality industry. A good way to seamlessly collect guest feedback is for them by sharing it directly from their smartphones.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl: 'https://thumbs.gfycat.com/CorruptColdIlsamochadegu-size_restricted.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU'
    },
    {
        title: 'Build Interactive Games',
        description:
            'Board games, special contests and even treasure hunts can be organised at events by tracking players progress, goals and stats in blockchain, making it more interactive.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl: 'https://thumbs.gfycat.com/VioletIdealClingfish-size_restricted.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU'
    },
    {
        title: 'Interact With REST APIs',
        description:
            'Interact with smart contracts that leverage REST APIs to have a bigger reach, bring the power of interoperability to Physical Web3 by integrating it with blockchain and Web 2.0 technologies.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl: 'https://thumbs.gfycat.com/ForsakenLightheartedFlyingsquirrel-size_restricted.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU'
    },
    {
        title: 'Control & Monitor Access',
        description:
            'Using your wallet address as an authorization and authentication mechanism, control and share access to facilities, events and locations using smart contracts.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl: 'https://thumbs.gfycat.com/SecondhandRealBaiji-size_restricted.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU'
    }
];

const displayTech = (items = []) => {
    const techList = [];
    items.forEach((item) => {
        techList.push(<Chip key={item} label={item} variant="outlined" color="secondary" sx={{ mx: 1 }} />);
    });
    return techList;
};

export default function Cases() {
    const renderCards = () => {
        const list = [];
        items.forEach((item) => {
            list.push(
                <Grid item md={4} sm={6} key={item.title}>
                    <FadeInWhenVisible>
                        <SubCard>
                            <Grid container justifyContent="center" spacing={2}>
                                <Grid item sx={{ maxHeight: 200, overflow: 'hidden' }}>
                                    <img src={item.imageUrl} alt="use" width="340" />
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="h3">{item.title}</Typography>
                                </Grid>
                                <Grid item>{displayTech(item.tech)}</Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body2">{item.description}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container justifyContent="left" spacing={gridSpacing}>
                                        <Grid item>
                                            <AnimateButton>
                                                <Button component={Link} href={item.source} target="_blank" variant="text" size="small">
                                                    Source
                                                </Button>
                                            </AnimateButton>
                                        </Grid>
                                        <Grid item>
                                            <AnimateButton>
                                                <Button component={Link} href={item.dApp} target="_blank" variant="text" size="small">
                                                    dApp
                                                </Button>
                                            </AnimateButton>
                                        </Grid>
                                        <Grid item>
                                            <AnimateButton>
                                                <Button component={Link} href={item.dApp} target="_blank" variant="text" size="small">
                                                    Watch video
                                                </Button>
                                            </AnimateButton>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </SubCard>
                    </FadeInWhenVisible>
                </Grid>
            );
        });
        return list;
    };

    return (
        <Container>
            <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing} sx={{ mt: 0, mb: 10, pl: 3, pr: 3 }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: '3rem',
                        fontWeight: 900,
                        lineHeight: 1.4,
                        mb: 2
                    }}
                >
                    Use Cases
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: { xs: '1.2rem', md: '1.125rem' },
                        fontWeight: 400,
                        lineHeight: 1.4
                    }}
                >
                    Physical Web3 allows to create a mobile friendly experience for onsite use cases that can be powered by smart contracts.
                    As such, the potential and scope is as big as the smart contract technology can offer. The Physical Web3 is powered by
                    Moralis and Avalanche (other EVMs supported)
                </Typography>
                <Grid container spacing={gridSpacing} sx={{ mt: 3 }}>
                    {renderCards()}
                </Grid>
            </Grid>
        </Container>
    );
}
