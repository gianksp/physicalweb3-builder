import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Grid, Container } from '@mui/material';
import { gridSpacing } from 'store/constant';

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0
    },
    '&:before': {
        display: 'none'
    }
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />} {...props} />
))(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)'
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1)
    }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)'
}));

export default function Resources() {
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
                <Grid container>
                    <Grid container sx={{ mb: 10 }}>
                        <Grid item xs={12} md={6} className="video-container">
                            <iframe title="t" src="//www.youtube.com/embed/MIKv-cEfQpU" frameBorder="0" allowFullScreen />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ px: 2, pt: 2 }}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: '1.8rem',
                                    fontWeight: 900,
                                    mb: 2
                                }}
                            >
                                Street Performer dApp Controller
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: '1.4rem',
                                    fontWeight: 'lighter',
                                    mb: 2
                                }}
                            >
                                John is a street performer and recently started using The Physical Web3 to receive donations in crypto and
                                distribute autographs as NFTs for every contribution received. This is an example from the end user point of
                                view.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ mb: 10 }}>
                        <Grid item xs={12} md={6} className="video-container">
                            <iframe title="t" src="//www.youtube.com/embed/xOX2avYFNWA" frameBorder="0" allowFullScreen />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ px: 2, pt: 2 }}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: '1.8rem',
                                    fontWeight: 900,
                                    mb: 2
                                }}
                            >
                                Creating a dApp Controller
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: '1.4rem',
                                    fontWeight: 'lighter',
                                    mb: 2
                                }}
                            >
                                Using our builder you can generate a mobile friendly, configurable interface for any smart contract on any
                                EVM network. You just need to provide the smart contract address and ABI you want to expose in the mobile
                                app
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ mb: 10 }}>
                        <Grid item xs={12} md={6} className="video-container">
                            <iframe title="t" src="//www.youtube.com/embed/X0wuCLF7Nqs" frameBorder="0" allowFullScreen />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ px: 2, pt: 2 }}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: '1.8rem',
                                    fontWeight: 900,
                                    mb: 2
                                }}
                            >
                                Configuring NFC Tag For dApp Controller
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: '1.4rem',
                                    fontWeight: 'lighter',
                                    mb: 2
                                }}
                            >
                                One of the powers of the Physical Web3 is the discoverability, using NFC allows any mobile device user to
                                quickly access the dApp controller powering your smart contract without the need to know the underlying
                                details, as easy as a scan. This is the process to setting up an NFC Tag to open your dApp Controller.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
