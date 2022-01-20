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
                'The Physical Web3 is a permissionless platform that allows users to expose smart contract functionalities through a mobile friendly web app designed via url, embedding it into NFC tags or QR Codes'
        },
        {
            question: "How is it related to Google's Physical Web",
            answer:
                'It is inspired in Google Physical Web that was deprecated a few years ago. It tries to go beyond by not only addressing discoverability of web apps but by also powering data and value transmission leveraging blockchain'
        },
        {
            question: 'What is a Smart Object',
            answer:
                'When talking about Smart Objects and Smart Locations, we make reference to any physical thing or place that has a dApp controller powering it, and this dApp controller is easily accessible by users without the need of installing additional apps'
        },
        {
            question: 'What is a Smart Object Controller',
            answer:
                'Are the dApps that powe the Smart Objects and Places. With our platform anyone can create a controller for any smart contract. The controller is basically a configurable mobile web app that exposes the smart contract functions.'
        },
        {
            question: 'Why is the Physical Web3 built on top of the Web3?',
            answer:
                'Smart contract platforms excel at transfering data and value. To achieve this in Web 2.0 we would need payment gateways, databases, services and APIs to integrate with. With blockchain is as simple as creating a smart contract and creating its controller.'
        },
        {
            question: 'Why does the Physical Web3 use URLs?',
            answer:
                'URLs can be shared, embedded in NFC Tags, QRCodes, Eddystone Beacons, etc. They are an easy way to power discoverability.'
        },
        {
            question: 'Why does Physical Web3 use NFC?',
            answer:
                'NFC Tags are cheap and configurable. Whereas a QRCode cannot be edited and needs to be replaced, NFC provide the flexibility to be modified.'
        },
        {
            question: 'What other technologies can we use to enable discoverability of Smart Object Controllers',
            answer:
                'As mentioned before, any technology that facilittes dicoverability such as QRCodes, Eddystone Beacons, NFC Tags, Ultra wide band, etc.'
        },
        {
            question: 'What does the decentralization of the Physical Web3 refer to?',
            answer: 'It refers to the use of smart contract to power transfer of data and value in a permissionless fashion.'
        },
        {
            question: 'How does the Physical Web3 address potential security concerns?',
            answer:
                'There is a lot to cover here as we move on with the project. We leverage EVM compatible smart contract platforms to provide the backend functionality and rely on their security. At the same time we are responsible for providing security at the UI level. We need to deep dive here still to identify risks and address issues.'
        },
        {
            question: 'Which platforms and blockchain networks are supported?',
            answer: 'By default Avalanche Fuji Testnet is preselected, however it can be configured for any EVM platform'
        },
        {
            question: 'Is it Free?',
            answer:
                'Our goal now is to scale our user base. We need to balance that out with the infrastructure costs to identify if we need to change our strategy. However, at first glance we would like it to offer a free model that is extensive enough for every use.'
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
