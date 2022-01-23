import { useEffect, useState, forwardRef } from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Grid, Container, Button, Link, Chip, LinearProgress } from '@mui/material';
import { gridSpacing } from 'store/constant';
import AnimateButton from 'ui-component/extended/AnimateButton';
import FadeInWhenVisible from 'views/pages/landing/Animation';
import SubCard from 'ui-component/cards/SubCard';
import { useMoralis } from 'react-moralis';
import { Compiler, CompilerInput } from '@remix-project/remix-solidity';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import sampleConfig from './config.json';

const defaultTheme = {
    primary: '#2194f3',
    secondary: '#ffffff'
};

const defaultNetwork = {
    contract: '0x995EFB49f7ACD7f0D0770fD3a846Ee464577F589',
    imageUrl: 'https://logowik.com/content/uploads/images/avalanche-coin-avax8592.jpg',
    name: 'Fuji Testnet',
    id: 43113,
    rpcUrl: 'https://api.avax-test.network/ext/bc/C/rpc',
    currencySymbol: 'AVAX',
    currencyName: 'Avax',
    blockExplorerUrl: 'https://testnet.snowtrace.io/'
};

const Transition = forwardRef((props, ref) => <Slide direction="up" ref={ref} {...props} />);

const items = [
    {
        id: 0,
        title: 'Custom Template',
        description: 'Deploy a custom smart contract and generate a PW3 Controller on top of it.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl: 'https://thumbs.gfycat.com/TangibleGoodnaturedAnhinga-size_restricted.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU',
        tech: ['Custom'],
        config: sampleConfig
    },
    {
        id: 1,
        title: 'Pet Tracker',
        description: 'Store and share your pet information in case it gets lost.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl: 'https://thumbs.gfycat.com/TangibleGoodnaturedAnhinga-size_restricted.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU',
        tech: ['Avalanche', 'Testnet', 'Covalent'],
        compilerUrl: 'https://binaries.soliditylang.org/wasm/soljson-v0.8.0+commit.c7dfd78e.js',
        compilerVersion: '0.8.0',
        contractUrl: '/contracts/PetTracker.sol',
        contractName: 'PetTracker',
        config: {
            theme: defaultTheme,
            network: defaultNetwork,
            about: {
                appName: 'My Pet Tracker',
                imageUrl: 'https://miro.medium.com/max/1400/1*jvT5REAJKM3YJiApuRvgXg.gif',
                title: 'How does it work?',
                description: 'Store and share your pet information in case it gets lost.'
            },
            abi: []
        }
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
        tech: ['Avalanche', 'Testnet', 'Covalent'],
        compilerUrl: 'https://binaries.soliditylang.org/wasm/soljson-v0.8.0+commit.c7dfd78e.js',
        contractUrl: '/contracts/SimplePay.sol',
        compilerVersion: '0.8.0',
        contractName: 'SimplePay',
        config: {
            theme: defaultTheme,
            network: defaultNetwork,
            about: {
                appName: 'Simple Pay',
                imageUrl: 'https://miro.medium.com/max/1400/1*jvT5REAJKM3YJiApuRvgXg.gif',
                title: 'How does it work?',
                description: 'Receive payments to your wallet from anyone. Use it to receive tips and contributions.'
            },
            abi: []
        }
    },
    {
        id: 3,
        title: 'Emergency Info',
        description: 'Share your emergency contacts, blood type and allergies from your wallet.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl: 'https://cdn.dribbble.com/users/3377233/screenshots/6226947/jamming.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU',
        tech: ['Avalanche', 'Testnet', 'Covalent'],
        compilerUrl: 'https://binaries.soliditylang.org/wasm/soljson-v0.8.0+commit.c7dfd78e.js',
        contractUrl: '/contracts/EmergencyInfo.sol',
        contractName: 'EmergencyInfo',
        compilerVersion: '0.8.0',
        config: {
            theme: defaultTheme,
            network: defaultNetwork,
            about: {
                appName: 'My Emergency Info',
                imageUrl: 'https://miro.medium.com/max/1400/1*jvT5REAJKM3YJiApuRvgXg.gif',
                title: 'How does it work?',
                description: 'Share your emergency contacts, blood type and allergies from your wallet.'
            },
            abi: []
        }
    },
    {
        id: 4,
        title: 'WiFi Sharing',
        description: 'Share your WiFi password with guests, you can even monetize it.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl: 'https://thumbs.gfycat.com/SimilarFrightenedCapybara-size_restricted.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU',
        tech: ['Avalanche', 'Testnet', 'Covalent'],
        compilerUrl: 'https://binaries.soliditylang.org/wasm/soljson-v0.8.0+commit.c7dfd78e.js',
        contractUrl: '/contracts/WifiSharing.sol',
        contractName: 'WifiSharing',
        compilerVersion: '0.8.0',
        config: {
            theme: defaultTheme,
            network: defaultNetwork,
            about: {
                appName: 'WiFi Sharing Controller',
                imageUrl: 'https://miro.medium.com/max/1400/1*jvT5REAJKM3YJiApuRvgXg.gif',
                title: 'How does it work?',
                description: 'Share your WiFi password with guests, you can even monetize it.'
            },
            abi: []
        }
    },
    {
        id: 5,
        title: 'Simple Feedback',
        description: 'Capture feedback from guests visiting your location about their experience.',
        videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
        imageUrl: 'https://thumbs.gfycat.com/GargantuanPerfumedIsopod-size_restricted.gif',
        source: '//www.youtube.com/embed/MIKv-cEfQpU',
        dApp: '//www.youtube.com/embed/MIKv-cEfQpU',
        tech: ['Avalanche', 'Testnet', 'Covalent'],
        compilerUrl: 'https://binaries.soliditylang.org/wasm/soljson-v0.8.0+commit.c7dfd78e.js',
        contractUrl: '/contracts/SimpleFeedback.sol',
        contractName: 'SimpleFeedback',
        compilerVersion: '0.8.0',
        config: {
            theme: defaultTheme,
            network: defaultNetwork,
            about: {
                appName: 'Simple Feedbacl Controller',
                imageUrl: 'https://miro.medium.com/max/1400/1*jvT5REAJKM3YJiApuRvgXg.gif',
                title: 'How does it work?',
                description: 'Capture feedback from guests visiting your location about their experience.'
            },
            abi: []
        }
    }
    // {
    //     id: 6,
    //     title: 'REST API Integration',
    //     description: 'Call a REST endpoint within a Smart Contract, you can even monetize it.',
    //     videoUrl: '//www.youtube.com/embed/MIKv-cEfQpU',
    //     imageUrl: 'https://thumbs.gfycat.com/LegitimateScornfulIraniangroundjay-size_restricted.gif',
    //     source: '//www.youtube.com/embed/MIKv-cEfQpU',
    //     dApp: '//www.youtube.com/embed/MIKv-cEfQpU',
    //     tech: ['Avalanche', 'Testnet', 'Covalent', 'Chainlink'],
    //     compilerUrl: 'https://binaries.soliditylang.org/wasm/soljson-v0.8.0+commit.c7dfd78e.js',
    //     contractUrl: '/contracts/SimpleFeedback.sol',
    //     contractName: 'SimpleFeedback',
    //     compilerVersion: '0.8.0',
    //     config: {
    //         theme: defaultTheme,
    //         network: defaultNetwork,
    //         about: {
    //             appName: 'Suggestion Box Controller',
    //             imageUrl: 'https://miro.medium.com/max/1400/1*jvT5REAJKM3YJiApuRvgXg.gif',
    //             title: 'How does it work?',
    //             description:
    //                 "Suggestion Box allows you to write messages, testimonies and suggestions to visitors of this location. We ensure that by you being here, you have experienced the good, bad and the ugly from this location and can help us make it better!. With your comments and testimonies you will participate in a raffle at the end of the current month! so make it count!. To get started, change to the 'Controls' tab and tap on 'processMessage', include your thoughts and send!"
    //         },
    //         abi: []
    //     }
    // }
];

const Picker = ({ onSelect }) => {
    const { Moralis, user } = useMoralis();
    const [open, setOpen] = useState(false);
    const [switchDialog, showSwitchDialog] = useState(false);
    const [template, setTemplate] = useState({});
    const [isLoading, setLoading] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const deployContract = async (tContract) => {
        const web3Provider = await Moralis.enableWeb3();
        const contract = new web3Provider.eth.Contract(tContract.abi);
        contract
            .deploy({
                data: tContract.evm.bytecode.object
            })
            .send({
                from: user.get('ethAddress')
            })
            .then((deployment) => {
                console.log('Contract was deployed at the following address:');
                console.log(deployment.options.address);
                // Override smart contract address and abi
                template.config.network.contract = deployment.options.address;
                template.config.abi = tContract.abi;
                console.log(tContract);
                console.log(template);
                onSelect(template);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const compileContract = async () => {
        const compiler = new Compiler();
        compiler.onCompilationFinished = (data) => {
            if (data.contracts) {
                const tContract = data.contracts.fileName[`${template.contractName}`];
                console.log(tContract);
                deployContract(tContract);
            } else {
                console.log('compile failed');
            }
        };
        compiler.loadVersion(true, template.compilerUrl);
        const url = template.contractUrl;
        const file = await fetch(url);
        const blob = await file.text();
        const contractFile = {
            fileName: {
                content: blob
            }
        };
        compiler.compile(contractFile);
    };

    const handleProceed = () => {
        handleClose();
        setLoading(true);
        compileContract();
    };

    const displayTech = (items = []) => {
        const techList = [];
        items.forEach((item) => {
            techList.push(<Chip key={item} label={item} variant="outlined" color="secondary" sx={{ mx: 1, mt: 1, fontSize: '0.7em' }} />);
        });
        return techList;
    };

    const isValidChain = async (t) => {
        let isValid = false;
        try {
            const web3 = await Moralis.enableWeb3();
            const chainIdHex = web3.currentProvider.chainId;
            const chainIdDec = await web3.eth.getChainId();
            console.log(chainIdHex);
            console.log(chainIdDec);
            if (chainIdDec === t.config.network.id) {
                console.log('right chain!');
                isValid = true;
            } else {
                console.log('prompt switch network');
                isValid = false;
            }
        } catch (e) {
            console.log(e);
        }
        return isValid;
    };

    const fromTemplate = async (tmp) => {
        if (isLoading) return;
        const validChain = await isValidChain(tmp);
        // Is right chain?
        if (!validChain) {
            showSwitchDialog(true);
            return;
        }

        setTemplate(tmp);
        console.log(tmp);
        console.log(template);
        if (tmp.id === 0) {
            onSelect(tmp);
        } else {
            handleClickOpen();
        }
    };

    const displayLoading = (id) => isLoading && template.id === id && <LinearProgress color="primary" sx={{ mb: 1 }} />;

    const renderCards = () => {
        const list = [];
        items.forEach((item) => {
            list.push(
                <Grid item md={4} sm={6} key={item.id}>
                    <SubCard onClick={() => fromTemplate(item)} sx={{ cursor: 'pointer' }} id={item.id}>
                        {displayLoading(item.id)}
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
                </Grid>
            );
        });
        return list;
    };

    const confirmDialog = (
        <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>Deploy Smart Contract?</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    This template requires smart contract deployment. Please confirm you want to go ahead with the deployment process. The
                    process may take a while, please be patient.
                </DialogContentText>
                <Grid container sx={{ mt: 1 }}>
                    {displayTech([`Contract ${template.contractName}`, `Compiler ${template.compilerVersion}`])}
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleProceed} variant="contained">
                    Deploy
                </Button>
            </DialogActions>
        </Dialog>
    );

    const switchNetworkDialog = (
        <Dialog
            open={switchDialog}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => showSwitchDialog(false)}
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle>Switch Network</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-slide-description">
                    To deploy this contract you need to switch to the correct network (Avalanche Fuji Testnet).
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => showSwitchDialog(false)}>Close</Button>
            </DialogActions>
        </Dialog>
    );

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
            {confirmDialog}
            {switchNetworkDialog}
        </Container>
    );
};

Picker.propTypes = {
    onSelect: PropTypes.func
};

export default Picker;
