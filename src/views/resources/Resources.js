import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Grid, Container, Card } from '@mui/material';
import { gridSpacing } from 'store/constant';
import AnimateButton from 'ui-component/extended/AnimateButton';
import FadeInWhenVisible from 'views/pages/landing/Animation';
import SubCard from 'ui-component/cards/SubCard';

const guidesList = [
    {
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        title: 'Street Performer dApp Controller',
        description:
            'John is a street performer and recently started using The Physical Web3 to receive donations in crypto and distribute autographs as NFTs for every contribution received. This is an example from the end user point of view.'
    },
    {
        videoUrl: '//www.youtube.com/embed/xOX2avYFNWA',
        title: 'Creating a dApp Controller',
        description:
            'Using our builder you can generate a mobile friendly, configurable interface for any smart contract on any EVM network. You just need to provide the smart contract address and ABI you want to expose in the mobile app'
    },
    {
        videoUrl: '//www.youtube.com/embed/X0wuCLF7Nqs',
        title: 'Configuring NFC Tag For dApp Controller',
        description:
            'One of the powers of the Physical Web3 is the discoverability, using NFC allows any mobile device user to quickly access the dApp controller powering your smart contract without the need to know the underlying details, as easy as a scan. This is the process to setting up an NFC Tag to open your dApp Controller.'
    }
];

const items = [
    {
        title: 'PW3Builder Github',
        imageUrl: 'https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/github-universe.jpg?itok=lwRZddXA',
        url: 'https://github.com/gianksp/physicalweb3'
    },
    {
        title: 'PW3App Github',
        imageUrl: 'https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/github-universe.jpg?itok=lwRZddXA',
        url: 'https://github.com/gianksp/pw3app'
    },
    {
        title: 'Contracts Github',
        imageUrl: 'https://opensource.com/sites/default/files/styles/image-full-size/public/lead-images/github-universe.jpg?itok=lwRZddXA',
        url: 'https://github.com/gianksp/physicalweb3/tree/main/public/contracts'
    }
];

export default function Resources() {
    const displayGuides = () => {
        const res = [];
        guidesList.forEach((item) => {
            res.push(
                <Grid container sx={{ mb: 5 }}>
                    <Grid item xs={12} md={3} className="video-container">
                        <iframe title="t" src={item.videoUrl} frameBorder="0" allowFullScreen />
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ px: 2, pt: 2 }}>
                        <Typography
                            variant="h1"
                            sx={{
                                fontSize: '1.2rem',
                                fontWeight: 900,
                                mb: 2
                            }}
                        >
                            {item.title}
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: '1rem',
                                fontWeight: 'lighter',
                                mb: 2
                            }}
                        >
                            {item.description}
                        </Typography>
                    </Grid>
                </Grid>
            );
        });
        return res;
    };

    const renderCards = () => {
        const list = [];
        items.forEach((item) => {
            list.push(
                <Grid item md={4} sm={6} key={item.title}>
                    <FadeInWhenVisible>
                        <SubCard
                            sx={{
                                cursor: 'pointer',
                                background: 'aliceblue'
                            }}
                            onClick={() => window.open(item.url, '_blank').focus()}
                        >
                            <Grid container justifyContent="center" spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h1" sx={{ fontWeight: '400', fontSize: '2em', textAlign: 'center' }}>
                                        {item.title}
                                    </Typography>
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
                    Resources
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: { xs: '1.2rem', md: '1.125rem' },
                        fontWeight: 400,
                        lineHeight: 1.4
                    }}
                >
                    Physical Web3 consists on 3 main items. The PW3Builder that can generate dApps, the PW3Apps that are mobile ready
                    controllers and the Smart contracts that make possible deploying templates without users needing to know or code any
                    Solidity code.
                </Typography>
                <Grid container spacing={gridSpacing} sx={{ mb: 5, mt: 3 }}>
                    {renderCards()}
                </Grid>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: '3rem',
                        fontWeight: 900,
                        lineHeight: 1.4,
                        mb: 2
                    }}
                >
                    How to guides
                </Typography>
                <Grid container>{displayGuides()}</Grid>
            </Grid>
        </Container>
    );
}
