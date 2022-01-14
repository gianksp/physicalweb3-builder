import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
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
    ListItemIcon
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
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250
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
    const { Moralis, user } = useMoralis();

    const handleChange = (event) => {
        const {
            target: { value }
        } = event;

        // Is new?
        if (value === 'new') {
            const Controller = Moralis.Object.extend('Controller');
            const controller = new Controller();
            controller.set('configuration', sampleConfig);
            controller.set('owner', user.get('ethAddress'));
            controller.set('name', sampleConfig.about.appName);
            controller.save().then((updatedController) => {
                loadApps();
                setSelectedApp({ id: '' });
                setSelectedApp(updatedController);
            });
            return;
        }
        // Is from list?
        apps.forEach((app) => {
            if (app.id === value) {
                setSelectedApp(app);
                setAppPrimaryColor(app.attributes.configuration.theme.primary);
                setAppFontColor(app.attributes.configuration.theme.secondary);
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
                <InputLabel htmlFor="imageUrl">Image Url</InputLabel>
                <Input
                    id="imageUrl"
                    onChange={(e) => {
                        selectedApp.attributes.configuration.about.imageUrl = e.target.value;
                    }}
                    aria-describedby="imageUrl-text"
                    defaultValue={selectedApp?.attributes.configuration.about.imageUrl}
                />
                <FormHelperText id="imageUrl-text">Text that will displayed as the application controller title</FormHelperText>
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
                <FormHelperText id="title-text">Text that will displayed as the application controller title</FormHelperText>
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
                <FormHelperText id="description-text">Text that will displayed as the application controller title</FormHelperText>
            </FormControl>
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

    const networkForm = selectedApp.id && (
        <Grid item xs={12}>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="contract">Contract</InputLabel>
                <Input
                    id="contract"
                    onChange={(e) => {
                        selectedApp.attributes.configuration.network.contract = e.target.value;
                    }}
                    aria-describedby="contract-text"
                    defaultValue={selectedApp?.attributes.configuration.network.contract}
                />
                <FormHelperText id="contract-text">Text that will displayed as the application controller title</FormHelperText>
            </FormControl>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="networkImage">Network Image</InputLabel>
                <Input
                    id="networkImage"
                    onChange={(e) => {
                        selectedApp.attributes.configuration.network.imageUrl = e.target.value;
                    }}
                    aria-describedby="networkImage-text"
                    defaultValue={selectedApp?.attributes.configuration.network.imageUrl}
                />
                <FormHelperText id="networkImage-text">Text that will displayed as the application controller title</FormHelperText>
            </FormControl>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="networkName">Network Name</InputLabel>
                <Input
                    id="networkName"
                    onChange={(e) => {
                        selectedApp.attributes.configuration.network.name = e.target.value;
                    }}
                    aria-describedby="networkName-text"
                    defaultValue={selectedApp?.attributes.configuration.network.name}
                />
                <FormHelperText id="networkName-text">Text that will displayed as the application controller title</FormHelperText>
            </FormControl>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="networkName">Network Chain Id</InputLabel>
                <Input
                    id="networkId"
                    onChange={(e) => {
                        selectedApp.attributes.configuration.network.id = e.target.value;
                    }}
                    aria-describedby="networkId-text"
                    defaultValue={selectedApp?.attributes.configuration.network.id}
                />
                <FormHelperText id="networkId-text">Text that will displayed as the application controller title</FormHelperText>
            </FormControl>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="networkRpc">Network RPC URL</InputLabel>
                <Input
                    id="networkRpc"
                    onChange={(e) => {
                        selectedApp.attributes.configuration.network.rpcUrl = e.target.value;
                    }}
                    aria-describedby="networkRpc-text"
                    defaultValue={selectedApp?.attributes.configuration.network.rpcUrl}
                />
                <FormHelperText id="networkRpc-text">Text that will displayed as the application controller title</FormHelperText>
            </FormControl>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="networkRpc">Network Currency Symbol</InputLabel>
                <Input
                    id="networkSymbol"
                    onChange={(e) => {
                        selectedApp.attributes.configuration.network.currencySymbol = e.target.value;
                    }}
                    aria-describedby="networkSymbol-text"
                    defaultValue={selectedApp?.attributes.configuration.network.currencySymbol}
                />
                <FormHelperText id="networkSymbol-text">Text that will displayed as the application controller title</FormHelperText>
            </FormControl>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="networkRpc">Network Currency Name</InputLabel>
                <Input
                    id="networkCurrencyName"
                    onChange={(e) => {
                        selectedApp.attributes.configuration.network.currencyName = e.target.value;
                    }}
                    aria-describedby="networkCurrencyName-text"
                    defaultValue={selectedApp?.attributes.configuration.network.currencyName}
                />
                <FormHelperText id="networkCurrencyName-text">Text that will displayed as the application controller title</FormHelperText>
            </FormControl>
            <FormControl variant="standard" fullWidth>
                <InputLabel htmlFor="networkRpc">Network Explorer Url</InputLabel>
                <Input
                    id="networkExplorerUrl"
                    onChange={(e) => {
                        selectedApp.attributes.configuration.network.blockExplorerUrl = e.target.value;
                    }}
                    aria-describedby="networkExplorerUrl-text"
                    defaultValue={selectedApp?.attributes.configuration.network.blockExplorerUrl}
                />
                <FormHelperText id="networkExplorerUrl-text">Text that will displayed as the application controller title</FormHelperText>
            </FormControl>
        </Grid>
    );

    const onChangeEditor = (val) => {
        console.log(val);
    };

    const abiForm = selectedApp.id && (
        <Grid item xs={12}>
            <AceEditor
                width="100%"
                mode="json"
                theme="github"
                onChange={onChangeEditor}
                name="abiEditor"
                value={JSON.stringify(selectedApp?.attributes?.configuration?.abi, null, 2)}
                editorProps={{ $blockScrolling: true }}
            />
        </Grid>
    );

    const save = () => {
        console.log(selectedApp);
        selectedApp.set('owner', user.get('ethAddress'));
        selectedApp.save().then((updatedApp) => {
            console.log(updatedApp);
            setSelectedApp({ id: '' });
            setSelectedApp(updatedApp);
        });
    };

    const deleteApp = () => {
        selectedApp.destroy().then(
            (myObject) => {
                // The object was deleted from the Moralis Cloud.
                loadApps();
                setSelectedApp({ id: '' });
            },
            (error) => {
                // The delete failed.
                // error is a Moralis.Error with an error code and message.
            }
        );
    };
    const [expanded, setExpanded] = useState('appPanel');

    const handleChangeAcc = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };

    const formEditor = selectedApp.id && (
        <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing} sx={{ mt: 4, mb: 10, p: 0 }}>
            <Accordion expanded={expanded === 'appPanel'} onChange={handleChangeAcc('appPanel')} sx={{ width: '100%' }}>
                <AccordionSummary aria-controls="appPanel-content" id="appPanel-header">
                    <Typography
                        sx={{
                            fontSize: '1.5em',
                            fontWeight: 'lighter'
                        }}
                    >
                        Application
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
                        ABI Definition
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>{abiForm}</AccordionDetails>
            </Accordion>
        </Grid>
    );

    return (
        <Container>
            <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing} sx={{ mt: 0, mb: 10, pl: 3, pr: 3 }}>
                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        [theme.breakpoints.down('md')]: {
                            width: 'auto'
                        }
                    }}
                >
                    <Select
                        displayEmpty
                        value={selectedApp.id}
                        onChange={handleChange}
                        input={<OutlinedInput />}
                        MenuProps={MenuProps}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        <MenuItem disabled value="">
                            <em>Select your App</em>
                        </MenuItem>
                        {apps.map((applicationItem) => (
                            <MenuItem key={applicationItem.id} value={applicationItem.id}>
                                <Grid>
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
                    <Box sx={{ flexGrow: 1 }} />
                    <Button color="primary" variant="contained" sx={{ mx: 1 }} onClick={save}>
                        Save
                    </Button>
                    <Button color="error" variant="contained" onClick={deleteApp}>
                        Delete
                    </Button>
                </Box>
                <Container id="editor-container">
                    <Grid container>
                        <Grid item xs={12} md={6}>
                            {selectedApp.id && <DetailsApp app={selectedApp} />}
                            {formEditor}
                        </Grid>
                        <Grid item xs={12} md={6} id="mobile-frame">
                            {selectedApp.id && (
                                <MobileDevicePreview controllerUrl={`https://g0aouoqdk2vt.usemoralis.com?appId=${selectedApp.id}`} />
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </Container>
    );
}
