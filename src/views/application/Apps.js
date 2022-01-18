import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { useDispatch } from 'react-redux';
import { SNACKBAR_OPEN } from 'store/actions';
import {
    Typography,
    Grid,
    Container,
    Button,
    Select,
    OutlinedInput,
    MenuItem,
    Box,
    FormControl,
    Input,
    FormHelperText,
    InputLabel,
    ListItemIcon,
    Paper
} from '@mui/material';
import { gridSpacing } from 'store/constant';
import useApps from 'hooks/useApps';
import AddIcon from '@mui/icons-material/Add';
import { useMoralis } from 'react-moralis';
import sampleConfig from './config.json';
import AceEditor from 'react-ace';
import MobileDevicePreview from 'views/application/MobileDevicePreview';
import DetailsApp from 'views/application/DetailsApp';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-github';

import { ColorPicker, createColor } from 'mui-color';

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const Accordion = styled((props) => <MuiAccordion disableGutters elevation={0} square {...props} />)(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
        borderBottom: 0
    },
    '&:before': {
        display: 'none'
    }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    root: {
        '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'blue'
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'red'
        }
    },
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: '100%',
            borderRadius: 2
        }
    },
    InputProps: {
        style: {
            width: '100%',
            borderRadius: 2
        }
    }
};

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

export default function Examples() {
    const theme = useTheme();
    const dispatch = useDispatch();
    const { apps, loadApps } = useApps();
    const [appPrimaryColor, setAppPrimaryColor] = useState(createColor('#2194f3'));
    const [appFontColor, setAppFontColor] = useState(createColor('#000'));
    const [selectedApp, setSelectedApp] = useState({
        id: '',
        configuration: {
            newtork: {},
            about: {},
            theme: {},
            abi: []
        }
    });
    const [abiDefinition, setAbiDefinition] = useState(sampleConfig.abi);
    const [selectedEVM, setSelectedEVM] = useState({});
    const { Moralis, user, isAuthenticated, logout, authenticate } = useMoralis();

    const handleChange = (event) => {
        const {
            target: { value }
        } = event;

        if (!isAuthenticated) return;

        // Is new?
        if (value === 'new') {
            const Controller = Moralis.Object.extend('Controller');
            const controller = new Controller();
            controller.set('configuration', sampleConfig);
            controller.set('owner', user.get('ethAddress'));
            controller.set('name', sampleConfig.about.appName);
            controller.save().then(
                (updatedController) => {
                    loadApps();
                    setSelectedApp({ id: '' });
                    setSelectedApp(updatedController);
                    setSelectedEVM(updatedController.attributes.configuration.network);
                    setAbiDefinition(updatedController.attributes.configuration.abi);
                    dispatch({
                        type: SNACKBAR_OPEN,
                        open: true,
                        message: 'Application Controller Created!',
                        variant: 'alert',
                        alertSeverity: 'success'
                    });
                },
                (error) => {
                    dispatch({
                        type: SNACKBAR_OPEN,
                        open: true,
                        message: error.message,
                        variant: 'alert',
                        alertSeverity: 'error'
                    });
                }
            );
            return;
        }
        // Is from list?
        apps.forEach((app) => {
            if (app.id === value) {
                setSelectedApp(app);
                setAppPrimaryColor(app.attributes.configuration.theme.primary);
                setAppFontColor(app.attributes.configuration.theme.secondary);
                setSelectedEVM(app.attributes.configuration.network);
                setAbiDefinition(app.attributes.configuration.abi);
                // setSelectedId(app.id);
                // console.log(app.attributes.name);
            }
        });
        console.log(selectedApp);
    };
    console.log(appPrimaryColor);
    const appForm = selectedApp.id && (
        <Grid item xs={12}>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="appName">Application Name</InputLabel>
                <Input
                    id="appName"
                    onChange={(e) => {
                        // selectedApp.attributes.name = e.target.value;
                        selectedApp.set('name', e.target.value);
                        selectedApp.attributes.configuration.about.appName = e.target.value;
                    }}
                    aria-describedby="appName-text"
                    defaultValue={selectedApp?.attributes.name}
                />
                <FormHelperText id="appName-text">Text that will displayed as the application controller title</FormHelperText>
            </FormControl>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="imageUrl">Image URL</InputLabel>
                <Input
                    id="imageUrl"
                    onChange={(e) => {
                        selectedApp.attributes.configuration.about.imageUrl = e.target.value;
                    }}
                    aria-describedby="imageUrl-text"
                    defaultValue={selectedApp?.attributes.configuration.about.imageUrl}
                />
                <FormHelperText id="imageUrl-text">Image banner url that will be displayed in the about page</FormHelperText>
            </FormControl>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="title">Title</InputLabel>
                <Input
                    id="title"
                    onChange={(e) => {
                        selectedApp.attributes.configuration.about.title = e.target.value;
                    }}
                    aria-describedby="title-text"
                    defaultValue={selectedApp?.attributes.configuration.about.title}
                />
                <FormHelperText id="title-text">Text header that will be displayed as title for the description</FormHelperText>
            </FormControl>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="description">Description</InputLabel>
                <Input
                    id="description"
                    multiline
                    onChange={(e) => {
                        selectedApp.attributes.configuration.about.description = e.target.value;
                    }}
                    aria-describedby="description-text"
                    defaultValue={selectedApp?.attributes.configuration.about.description}
                />
                <FormHelperText id="description-text">Descriptive text about your App. What is it about? how do you use it?</FormHelperText>
            </FormControl>
            <Typography sx={{ mt: 2, mb: 1 }}>App Colors</Typography>
            <Typography variant="body" fontSize="0.85em">
                Primary color (tab background)
            </Typography>
            <FormControl variant="standard" fullWidth>
                <ColorPicker
                    value={appPrimaryColor}
                    onChange={(color) => {
                        setAppPrimaryColor(color);
                        selectedApp.attributes.configuration.theme.primary = `#${color.hex}`;
                        // console.log(color.hex);
                        // selectedApp.attributes.configuration.theme.primary = `#${color.hex}`;
                    }}
                />
            </FormControl>
            <Typography variant="body" fontSize="0.85em">
                Secondary color (tab fonts)
            </Typography>
            <FormControl variant="standard" fullWidth>
                <ColorPicker
                    value={appFontColor}
                    onChange={(color) => {
                        setAppFontColor(color);
                        selectedApp.attributes.configuration.theme.secondary = `#${color.hex}`;
                        // console.log(color.hex);
                        // selectedApp.attributes.configuration.theme.primary = `#${color.hex}`;
                    }}
                />
            </FormControl>
        </Grid>
    );

    const customNetwork = (
        <Grid item>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="networkImage">Network Image</InputLabel>
                <Input
                    id="networkImage"
                    onChange={(e) => setSelectedEVM({ ...selectedEVM, ...{ imageUrl: e.target.value } })}
                    defaultValue={selectedEVM.imageUrl}
                    aria-describedby="networkImage-text"
                />
                <FormHelperText id="networkImage-text">Text that will displayed as the application controller title</FormHelperText>
            </FormControl>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="networkName">Network Name</InputLabel>
                <Input
                    id="networkName"
                    onChange={(e) => setSelectedEVM({ ...selectedEVM, ...{ name: e.target.value } })}
                    defaultValue={selectedEVM.name}
                    aria-describedby="networkName-text"
                />
                <FormHelperText id="networkName-text">Text that will displayed as the application controller title</FormHelperText>
            </FormControl>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="networkName">Network Chain Id</InputLabel>
                <Input
                    id="networkId"
                    onChange={(e) => setSelectedEVM({ ...selectedEVM, ...{ id: e.target.value } })}
                    defaultValue={selectedEVM.id}
                    aria-describedby="networkId-text"
                />
                <FormHelperText id="networkId-text">Text that will displayed as the application controller title</FormHelperText>
            </FormControl>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="networkRpc">Network RPC URL</InputLabel>
                <Input
                    id="networkRpc"
                    onChange={(e) => setSelectedEVM({ ...selectedEVM, ...{ rpcUrl: e.target.value } })}
                    defaultValue={selectedEVM.rpcUrl}
                    aria-describedby="networkRpc-text"
                />
                <FormHelperText id="networkRpc-text">Text that will displayed as the application controller title</FormHelperText>
            </FormControl>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="networkRpc">Network Currency Symbol</InputLabel>
                <Input
                    id="networkSymbol"
                    onChange={(e) => setSelectedEVM({ ...selectedEVM, ...{ currencySymbol: e.target.value } })}
                    defaultValue={selectedEVM.currencySymbol}
                    aria-describedby="networkSymbol-text"
                />
                <FormHelperText id="networkSymbol-text">Text that will displayed as the application controller title</FormHelperText>
            </FormControl>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="networkRpc">Network Currency Name</InputLabel>
                <Input
                    id="networkCurrencyName"
                    onChange={(e) => setSelectedEVM({ ...selectedEVM, ...{ currencyName: e.target.value } })}
                    defaultValue={selectedEVM.currencyName}
                    aria-describedby="networkCurrencyName-text"
                />
                <FormHelperText id="networkCurrencyName-text">Text that will displayed as the application controller title</FormHelperText>
            </FormControl>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="networkRpc">Network Explorer Url</InputLabel>
                <Input
                    id="networkExplorerUrl"
                    onChange={(e) => setSelectedEVM({ ...selectedEVM, ...{ blockExplorerUrl: e.target.value } })}
                    defaultValue={selectedEVM.blockExplorerUrl}
                    aria-describedby="networkExplorerUrl-text"
                />
                <FormHelperText id="networkExplorerUrl-text">Text that will displayed as the application controller title</FormHelperText>
            </FormControl>
        </Grid>
    );

    const networkForm = selectedApp.id && (
        <Grid item xs={12}>
            <Grid container>
                <Grid item sx={3}>
                    <Paper
                        elevation={selectedEVM.id === 43113 ? 1 : 4}
                        sx={{ borderRadius: 1, my: 2, mr: 2, height: 50, minWidth: 160, cursor: 'pointer' }}
                        onClick={() => setSelectedEVM(sampleConfig.network)}
                    >
                        <Grid container>
                            <Grid item xs={5}>
                                <img
                                    height="50"
                                    src="https://logowik.com/content/uploads/images/avalanche-coin-avax8592.jpg"
                                    alt="Avalanche Fuji Testnet"
                                />
                            </Grid>
                            <Grid item xs={6} sx={{ py: 1, pr: 1 }}>
                                <Typography variant="h4">Avalanche</Typography>
                                <Typography variant="body">Fuji Testnet</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item sx={3}>
                    <Paper
                        elevation={selectedEVM.id !== 43113 ? 1 : 4}
                        sx={{ borderRadius: 1, my: 2, mr: 2, height: 50, minWidth: 160, cursor: 'pointer' }}
                        onClick={() => setSelectedEVM({})}
                    >
                        <Grid container>
                            <Grid item xs={5} sx={{ py: 0.25, px: 1 }}>
                                <img
                                    height="45"
                                    src="https://www.criptovalute24.com/wp-content/uploads/2019/08/Ethereum-ETH-aggiornamenti-Update.png"
                                    alt="Custom EVM"
                                />
                            </Grid>
                            <Grid item xs={6} sx={{ py: 1, pr: 1 }}>
                                <Typography variant="h4">Custom</Typography>
                                <Typography variant="body">EVM Net.</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
            {selectedEVM.id !== 43113 && customNetwork}
        </Grid>
    );

    const onChangeEditor = (val) => {
        console.log(JSON.parse(val));
        setAbiDefinition(JSON.parse(val));
    };
    console.log(selectedApp);
    const abiForm = selectedApp.id && (
        <Grid item xs={12} sx={{ my: 2 }}>
            <Grid item sx={{ mb: 2 }}>
                <Typography variant="h3">ABI</Typography>
                <Typography variant="body">Please paste your contract ABI below</Typography>
            </Grid>
            <AceEditor
                width="100%"
                mode="json"
                theme="github"
                onChange={onChangeEditor}
                name="abiEditor"
                value={JSON.stringify(abiDefinition, null, 2)}
                editorProps={{ $blockScrolling: true }}
            />
        </Grid>
    );

    const save = () => {
        selectedApp.attributes.configuration.network = selectedEVM;
        selectedApp.attributes.configuration.abi = abiDefinition;
        selectedApp.set('owner', user.get('ethAddress'));
        selectedApp.save().then(
            (updatedApp) => {
                console.log(updatedApp);
                setSelectedApp({ id: '' });
                setSelectedApp(updatedApp);
                dispatch({
                    type: SNACKBAR_OPEN,
                    open: true,
                    message: 'Changes saved',
                    variant: 'alert',
                    alertSeverity: 'success'
                });
            },
            (error) => {
                dispatch({
                    type: SNACKBAR_OPEN,
                    open: true,
                    message: error.message,
                    variant: 'alert',
                    alertSeverity: 'error'
                });
            }
        );
    };

    const deleteApp = () => {
        selectedApp.destroy().then(
            () => {
                loadApps();
                setSelectedApp({ id: '' });
                dispatch({
                    type: SNACKBAR_OPEN,
                    open: true,
                    message: 'Application deleted',
                    variant: 'alert',
                    alertSeverity: 'success'
                });
            },
            (error) => {
                dispatch({
                    type: SNACKBAR_OPEN,
                    open: true,
                    message: error.message,
                    variant: 'alert',
                    alertSeverity: 'error'
                });
            }
        );
    };
    const [expanded, setExpanded] = useState('appPanel');

    const handleChangeAcc = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const getPreviewUrl = () => {
        console.log(selectedApp);
        console.log('??????????????????????');
        const t = `https://app.physicalweb3.com?appId=${selectedApp.id}`;
        console.log(t);
        return t;
    };

    const formEditor = selectedApp.id && (
        <Grid item>
            <Accordion expanded={expanded === 'appPanel'} onChange={handleChangeAcc('appPanel')} sx={{ width: '100%' }}>
                <AccordionSummary aria-controls="appPanel-content" id="appPanel-header">
                    <Typography
                        sx={{
                            fontSize: '1.5em',
                            fontWeight: 'lighter'
                        }}
                    >
                        About this App
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>{appForm}</AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'networkPanel'} onChange={handleChangeAcc('networkPanel')} sx={{ width: '100%' }}>
                <AccordionSummary aria-controls="networkPanel-content" id="networkPanel-header">
                    <Typography
                        sx={{
                            fontSize: '1.5em',
                            fontWeight: 'lighter'
                        }}
                    >
                        Network
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>{networkForm}</AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'abiPanel'} onChange={handleChangeAcc('abiPanel')} sx={{ width: '100%' }}>
                <AccordionSummary aria-controls="abiPanel-content" id="abiPanel-header">
                    <Typography
                        sx={{
                            fontSize: '1.5em',
                            fontWeight: 'lighter'
                        }}
                    >
                        Smart Contract
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <FormControl variant="standard" fullWidth>
                        <InputLabel htmlFor="contract">Contract</InputLabel>
                        <Input
                            id="contract"
                            onChange={(e) => setSelectedEVM({ ...selectedEVM, ...{ contract: e.target.value } })}
                            defaultValue={selectedEVM.contract}
                            aria-describedby="contract-text"
                        />
                        <FormHelperText id="contract-text">The smart contract address deployed</FormHelperText>
                    </FormControl>
                    {abiForm}
                </AccordionDetails>
            </Accordion>
        </Grid>
    );

    const openInMetamaskMobile = isMobile && !window.web3 && (
        <Paper elevation={1} sx={{ borderRadius: 0, p: 2, backgroundColor: 'ivory' }} xs={12}>
            <span style={{ marginRight: '10px' }}>Your browser does not support Web3, please open with</span>
            <a href="https://metamask.app.link/dapp/physicalweb3.com/dashboard" target="_blank" rel="noreferrer">
                Metamask App
            </a>
        </Paper>
    );

    const openInMetamaskDesk = !isMobile && !window.web3 && (
        <Paper elevation={1} sx={{ borderRadius: 0, p: 2, backgroundColor: 'ivory' }} xs={12}>
            <span style={{ marginRight: '10px' }}>Your browser does not support Web3, please install</span>
            <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn" target="_blank" rel="noreferrer">
                Metamask extension
            </a>
        </Paper>
    );

    const onAuthenticate = () => {
        // console.log('authenticating');
        authenticate().then(() => {
            const currentUser = Moralis.User.current();
            console.log(currentUser);
        });
    };

    const authenticatePanel = window.web3 && user === null && (
        <Paper elevation={1} sx={{ borderRadius: 0, p: 2, cursor: 'pointer' }} xs={12} onClick={onAuthenticate}>
            <Typography>Sign in with Metamask</Typography>
        </Paper>
    );

    const onLogout = () => {
        logout().then(() => {
            const currentUser = Moralis.User.current();
            setSelectedApp({ id: '' });
            console.log(currentUser);
        });
    };

    const authenticated = user !== null && (
        <Paper elevation={1} sx={{ borderRadius: 0, p: 2, cursor: 'pointer', background: 'ivory' }} xs={12}>
            <Grid container>
                <Grid item xs={12} md={6}>
                    <Grid item xs={12}>
                        <Typography variant="body" fontSize="0.75em" xs={12}>
                            <strong>User ID:</strong> {user.id}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body" fontSize="0.75em" xs={12}>
                            <strong>{user.get('ethAddress')}</strong>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Button onClick={onLogout} variant="contained" fullWidth size="small" color="secondary">
                        Logout
                    </Button>
                </Grid>
            </Grid>
        </Paper>
    );

    const selector = window.web3 && user !== null && (
        <Select
            displayEmpty
            value={selectedApp.id}
            onChange={handleChange}
            input={<OutlinedInput />}
            MenuProps={MenuProps}
            sx={{
                minWidth: 200,
                my: 1
            }}
            xs={12}
            md={6}
            inputProps={{ 'aria-label': 'Without label' }}
        >
            <MenuItem disabled value="">
                <em>Select your App</em>
            </MenuItem>
            {apps.map((applicationItem) => (
                <MenuItem key={applicationItem.id} value={applicationItem.id}>
                    <Grid item xs={12}>
                        <Typography variant="h5">{applicationItem.attributes.name}</Typography>
                        <Typography variant="body" fontSize="0.75em">
                            <em>ID: {applicationItem.id}</em>
                        </Typography>
                    </Grid>
                </MenuItem>
            ))}
            <MenuItem value="new" sx={{ backgroundColor: 'darkturquoise' }}>
                <Typography variant="h4">Create new Application</Typography>
                <ListItemIcon>
                    <AddIcon fontSize="small" />
                </ListItemIcon>
            </MenuItem>
        </Select>
    );

    return (
        <Grid container sx={{ p: 2 }} spacing={0.2}>
            <Grid item xs={12}>
                {authenticated}
            </Grid>
            <Grid item xs={12}>
                {selector}
            </Grid>
            <Grid item xs={6}>
                {selectedApp.id && (
                    <Button color="primary" variant="contained" onClick={save} fullwidth sx={{ width: '100%', borderRadius: 0 }}>
                        Save
                    </Button>
                )}
            </Grid>
            <Grid item xs={6}>
                {selectedApp.id && (
                    <Button color="error" variant="contained" onClick={deleteApp} fullwidth sx={{ width: '100%', borderRadius: 0 }}>
                        Delete
                    </Button>
                )}
            </Grid>
            <Grid item xs={12}>
                {openInMetamaskMobile}
            </Grid>
            <Grid item xs={12}>
                {openInMetamaskDesk}
            </Grid>
            <Grid item xs={12}>
                {authenticatePanel}
            </Grid>
            <Grid item xs={12} md={6}>
                {selectedApp.id && <DetailsApp app={selectedApp} />}
            </Grid>
            <Grid item md={6} id="mobile-frame">
                {selectedApp.id && <MobileDevicePreview controllerUrl={getPreviewUrl()} />}
            </Grid>
            <Grid item xs={12} md={6} sx={{ minHeight: { xs: 500 } }}>
                {formEditor}
            </Grid>
        </Grid>
    );
}
