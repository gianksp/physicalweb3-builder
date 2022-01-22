import { cloneElement, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

// material-ui
import { useTheme } from '@mui/material/styles';
import {
    AppBar as MuiAppBar,
    Box,
    Button,
    Container,
    Drawer,
    IconButton,
    Link,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Stack,
    Toolbar,
    Typography,
    useScrollTrigger
} from '@mui/material';

// project imports
import Logo from 'ui-component/Logo';

// assets
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import { IconBook, IconCreditCard, IconDashboard, IconHome2 } from '@tabler/icons';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AppsIcon from '@mui/icons-material/Apps';

function ElevationScroll({ children, window }) {
    const theme = useTheme();
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window
    });
    const darkBorder = theme.palette.mode === 'dark' ? theme.palette.dark.dark : theme.palette.grey[200];

    return cloneElement(children, {
        elevation: trigger ? 2 : 0,
        style: {
            backgroundColor: theme.palette.background.default,
            borderBottom: trigger ? 'none' : '1px solid',
            borderColor: trigger ? '' : darkBorder,
            color: theme.palette.text.dark
        }
    });
}

// ==============================|| MINIMAL LAYOUT APP BAR ||============================== //

const AppBar = ({ ...others }) => {
    const [drawerToggle, setDrawerToggle] = useState(false);
    /** Method called on multiple components with different event types */
    const drawerToggler = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerToggle(open);
    };

    return (
        <ElevationScroll {...others}>
            <MuiAppBar>
                <Container>
                    <Toolbar>
                        <Typography component="div" sx={{ flexGrow: 1, textAlign: 'left' }}>
                            <Button color="inherit" component={RouterLink} to="/">
                                <Logo />
                            </Button>
                        </Typography>
                        <Stack direction="row" sx={{ display: { xs: 'none', md: 'block' } }} spacing={2}>
                            <Button color="inherit" component={RouterLink} to="/cases">
                                USE CASES
                            </Button>
                            <Button color="inherit" component={RouterLink} to="/resources">
                                RESOURCES
                            </Button>
                            <Button color="inherit" component={RouterLink} to="/faq">
                                FAQ
                            </Button>
                            <Button color="inherit" component={RouterLink} to="/examples">
                                LIVE APPS
                            </Button>
                            <Button component={RouterLink} to="/dashboard" disableElevation variant="outlined" color="primary">
                                Go to console
                            </Button>
                        </Stack>
                        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                            <IconButton color="inherit" onClick={drawerToggler(true)} size="large">
                                <MenuIcon />
                            </IconButton>
                            <Drawer anchor="top" open={drawerToggle} onClose={drawerToggler(false)}>
                                <Box
                                    sx={{
                                        width: 'auto'
                                    }}
                                    role="presentation"
                                    onClick={drawerToggler(false)}
                                    onKeyDown={drawerToggler(false)}
                                >
                                    <List>
                                        <Link style={{ textDecoration: 'none' }} component={RouterLink} to="/cases">
                                            <ListItemButton component="a">
                                                <ListItemIcon>
                                                    <VideoLibraryIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Use cases" />
                                            </ListItemButton>
                                        </Link>
                                        <Link style={{ textDecoration: 'none' }} component={RouterLink} to="/resources">
                                            <ListItemButton component="a">
                                                <ListItemIcon>
                                                    <MenuBookIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Resources" />
                                            </ListItemButton>
                                        </Link>
                                        <Link style={{ textDecoration: 'none' }} component={RouterLink} to="/faq">
                                            <ListItemButton component="a">
                                                <ListItemIcon>
                                                    <HelpCenterIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="FAQs" />
                                            </ListItemButton>
                                        </Link>
                                        <Link style={{ textDecoration: 'none' }} component={RouterLink} to="/examples">
                                            <ListItemButton component="a">
                                                <ListItemIcon>
                                                    <AppsIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Live Apps" />
                                            </ListItemButton>
                                        </Link>
                                        <Link style={{ textDecoration: 'none' }} component={RouterLink} to="/dashboard">
                                            <ListItemButton component="a">
                                                <ListItemIcon>
                                                    <DashboardCustomizeIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Go to console" />
                                            </ListItemButton>
                                        </Link>
                                    </List>
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </MuiAppBar>
        </ElevationScroll>
    );
};

export default AppBar;
