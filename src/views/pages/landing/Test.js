// material-ui
import { useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, Container, Grid, Link, Typography, Box, Tab, Tabs } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';

// assets
import imgbase from 'assets/images/demodapp.png';
import FolderTwoToneIcon from '@mui/icons-material/FolderTwoTone';
import CodeTwoToneIcon from '@mui/icons-material/CodeTwoTone';
import EmojiEmotionsTwoToneIcon from '@mui/icons-material/EmojiEmotionsTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import AttachmentTwoToneIcon from '@mui/icons-material/AttachmentTwoTone';
import CallSplitTwoToneIcon from '@mui/icons-material/CallSplitTwoTone';
import TextFieldsIcon from '@mui/icons-material/TextFields';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import TestShareWork from 'views/pages/landing/TestShareWork';
import TestVendor from 'views/pages/landing/TestVendor';
import TestSellTickets from 'views/pages/landing/TestSellTickets';

// ============================|| LANDING - KEY FEATURE PAGE ||============================ //

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`
    };
}

const TestPage = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const theme = useTheme();
    const avatarIconSx = {
        ...theme.typography.commonAvatar,
        cursor: 'initial',
        width: 72,
        height: 72
    };

    return (
        <Container>
            <Grid container spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid item xs={12}>
                            <Typography variant="h1" component="div">
                                Try it
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Box sx={{ width: '100%' }}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <Tabs value={value} onChange={handleChange} aria-label="test options">
                                <Tab label="Vendor" {...a11yProps(0)} />
                                <Tab label="Ticket Sales" {...a11yProps(1)} />
                                <Tab label="Work Sharing" {...a11yProps(2)} />
                            </Tabs>
                        </Box>
                        <TabPanel value={value} index={0}>
                            <TestVendor />
                        </TabPanel>
                        <TabPanel value={value} index={1}>
                            <TestSellTickets />
                        </TabPanel>
                        <TabPanel value={value} index={2}>
                            <TestShareWork />
                        </TabPanel>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default TestPage;
