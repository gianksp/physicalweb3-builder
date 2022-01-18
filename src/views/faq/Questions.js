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

export default function CustomizedAccordions() {
    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const questions = [
        {
            question: 'What is actually the Physical Web3',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit ametamet blandit leo lobortis eget.'
        },
        {
            question: "How is it related to Google's Physical Web",
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit ametamet blandit leo lobortis eget.'
        },
        {
            question: 'What is a Smart Object',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit ametamet blandit leo lobortis eget.'
        },
        {
            question: 'What is a Smart Object Controller',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit ametamet blandit leo lobortis eget.'
        },
        {
            question: 'Why is the Physical Web3 built on top of the Web3?',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit ametamet blandit leo lobortis eget.'
        },
        {
            question: 'Why does the Physical Web3 use URLs?',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit ametamet blandit leo lobortis eget.'
        },
        {
            question: 'Why does Physical Web3 use NFC?',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit ametamet blandit leo lobortis eget.'
        },
        {
            question: 'What other technologies can we use to enable discoverability of Smart Object Controllers',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit ametamet blandit leo lobortis eget.'
        },
        {
            question: 'What does the decentralization of the Physical Web3 refer to?',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit ametamet blandit leo lobortis eget.'
        },
        {
            question: 'How does the Physical Web3 address potential security concerns?',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit ametamet blandit leo lobortis eget.'
        },
        {
            question: 'Which platforms and blockchain networks are supported?',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit ametamet blandit leo lobortis eget.'
        },
        {
            question: 'Is it Free?',
            answer:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit ametamet blandit leo lobortis eget.'
        }
    ];

    const displayQuestions = () => {
        const questionList = [];
        for (let i = 0; i < questions.length; i += 1) {
            const questionItem = questions[i];
            questionList.push(
                <Accordion expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)} key={i}>
                    <AccordionSummary aria-controls={`panel${i}d-content`} id={`panel${i}d-header`}>
                        <Typography
                            sx={{
                                fontSize: '1.5rem',
                                fontWeight: 900
                            }}
                        >
                            {questionItem.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{
                                fontSize: '1.2rem'
                            }}
                        >
                            {questionItem.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            );
        }
        return questionList;
    };

    return (
        <Container>
            <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing} sx={{ mt: 0, mb: 10, pl: 3 }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: '3rem',
                        fontWeight: 900,
                        lineHeight: 1.4,
                        mb: 2
                    }}
                >
                    FAQs
                </Typography>
                {displayQuestions()}
            </Grid>
        </Container>
    );
}
