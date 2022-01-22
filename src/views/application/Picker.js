import * as React from 'react';
import PropTypes from 'prop-types';
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
        id: 0,
        title: 'Custom Template',
        description: 'Deploy a custom smart contract and generate a PW3 Controller on top of it.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl: 'https://thumbs.gfycat.com/TangibleGoodnaturedAnhinga-size_restricted.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU',
        tech: ['Custom']
    },
    {
        id: 1,
        title: 'Pet Tracker',
        description: 'Store and share your pet information in case it gets lost.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl: 'https://thumbs.gfycat.com/TangibleGoodnaturedAnhinga-size_restricted.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU',
        tech: ['Avalanche', 'Testnet', 'Covalent']
    },
    {
        id: 2,
        title: 'Simple Pay',
        description: 'Receive payments to your wallet from anyone. Use it to receive tips and contributions.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl:
            'https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555297879/shape/mentalfloss/laliving.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU',
        tech: ['Avalanche', 'Testnet', 'Covalent']
    },
    {
        id: 3,
        title: 'Emergency Info',
        description: 'Share your emergency contacts, blood type and allergies from your wallet.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl: 'https://cdn.dribbble.com/users/3377233/screenshots/6226947/jamming.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU',
        tech: ['Avalanche', 'Testnet', 'Covalent']
    },
    {
        id: 4,
        title: 'WiFi Sharing',
        description: 'Share your WiFi password with guests, you can even monetize it.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl: 'https://thumbs.gfycat.com/SimilarFrightenedCapybara-size_restricted.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU',
        tech: ['Avalanche', 'Testnet', 'Covalent']
    },
    {
        id: 5,
        title: 'Simple Feedback',
        description: 'Capture feedback from guests visiting your location about their experience.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl: 'https://thumbs.gfycat.com/GargantuanPerfumedIsopod-size_restricted.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU',
        tech: ['Avalanche', 'Testnet', 'Covalent']
    },
    {
        id: 6,
        title: 'REST API Integration',
        description: 'Call a REST endpoint within a Smart Contract, you can even monetize it.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl: 'https://thumbs.gfycat.com/LegitimateScornfulIraniangroundjay-size_restricted.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU',
        tech: ['Avalanche', 'Testnet', 'Covalent', 'Chainlink']
    }
];

const Picker = ({ onSelect }) => {
    const displayTech = (items = []) => {
        const techList = [];
        items.forEach((item) => {
            techList.push(<Chip key={item} label={item} variant="outlined" color="secondary" sx={{ mx: 1, mt: 1 }} />);
        });
        return techList;
    };

    const fromTemplate = (template) => {
        console.log(template);
        onSelect(template);
    };

    const renderCards = () => {
        const list = [];
        items.forEach((item) => {
            list.push(
                <Grid item md={4} sm={6} key={item.id}>
                    <FadeInWhenVisible>
                        <SubCard onClick={() => fromTemplate(item)} sx={{ cursor: 'pointer' }} id={item.id}>
                            <Grid container justifyContent="center" spacing={2}>
                                <Grid item xs={12}>
                                    <Typography variant="h3">{item.title}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="body2">{item.description}</Typography>
                                </Grid>
                                <Grid item>{displayTech(item.tech)}</Grid>
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
                <Grid item xs={12}>
                    <Typography variant="h1">Select Template</Typography>
                </Grid>
                <Grid container spacing={gridSpacing} sx={{ mt: 3 }}>
                    {renderCards()}
                </Grid>
            </Grid>
        </Container>
    );
};

Picker.propTypes = {
    onSelect: PropTypes.func
};

export default Picker;
