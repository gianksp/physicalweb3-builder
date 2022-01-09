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
                            <iframe title="t" src="//www.youtube.com/embed/YE7VzlLtp-4" frameBorder="0" allowFullScreen />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ px: 2, pt: 2 }}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: '1.5rem',
                                    fontWeight: 900,
                                    mb: 2
                                }}
                            >
                                From Zero to Hero - A Hello World Tutorial
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: '1.2rem',
                                    fontWeight: 900,
                                    mb: 2
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
                                leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit ametamet blandit leo lobortis eget.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ mb: 10 }}>
                        <Grid item xs={12} md={6} className="video-container">
                            <iframe title="t" src="//www.youtube.com/embed/YE7VzlLtp-4" frameBorder="0" allowFullScreen />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ px: 2, pt: 2 }}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: '1.5rem',
                                    fontWeight: 900,
                                    mb: 2
                                }}
                            >
                                Configuring NFC tags
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: '1.2rem',
                                    fontWeight: 900,
                                    mb: 2
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
                                leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit ametamet blandit leo lobortis eget.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={{ mb: 10 }}>
                        <Grid item xs={12} md={6} className="video-container">
                            <iframe title="t" src="//www.youtube.com/embed/YE7VzlLtp-4" frameBorder="0" allowFullScreen />
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ px: 2, pt: 2 }}>
                            <Typography
                                variant="h1"
                                sx={{
                                    fontSize: '1.5rem',
                                    fontWeight: 900,
                                    mb: 2
                                }}
                            >
                                Creating a Smart Object dApp Controller
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: '1.2rem',
                                    fontWeight: 900,
                                    mb: 2
                                }}
                            >
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit
                                leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                                sit ametamet blandit leo lobortis eget.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}
