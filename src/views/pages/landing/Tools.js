// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, Container, Grid, Link, Typography, Box } from '@mui/material';

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
import MobileDevicePreview from 'views/application/MobileDevicePreview';

// ============================|| LANDING - KEY FEATURE PAGE ||============================ //

const ToolsPage = () => {
    const theme = useTheme();
    const avatarIconSx = {
        ...theme.typography.commonAvatar,
        cursor: 'initial',
        width: 72,
        height: 72
    };

    return (
        <Container>
            <Grid container>
                <Grid item xs={12} sx={{ mt: 3 }}>
                    <Grid container spacing={2} sx={{ mb: 2 }}>
                        <Grid item xs={12} sx={{ mb: 3 }}>
                            <Typography variant="h1" component="div">
                                Accessibility Simplified
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="body2"
                                sx={{
                                    fontSize: { xs: '1.2rem', md: '1.125rem' },
                                    fontWeight: 400,
                                    lineHeight: 1.4
                                }}
                            >
                                The <a href="/dashboard">PW3Builder</a> helps you build mobile web3 dApp Controllers in seconds. It if
                                flexible enough to allow creating apps from any smart contract definition (ABI) meaning you can create a
                                mobile UI for any use case. You can also customize the look and feel and content!. dApp controllers offer a
                                Web3 mobile guided experience for users so they can quickly interact with smart contracts.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="center" sx={{ mt: 10 }}>
                        <Grid item sx={{ minHeight: 800 }}>
                            <FadeInWhenVisible>
                                {/* <img src="https://i.ibb.co/q9WJ9Xf/chrome-capture.gif" alt="PW3Builder" width="100%" /> */}
                                <Box sx={{ ml: -31 }}>
                                    <MobileDevicePreview controllerUrl="https://app.physicalweb3.com?appId=NG5mrMw7CInc88MrTAz5btOk" />
                                </Box>
                            </FadeInWhenVisible>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ToolsPage;
