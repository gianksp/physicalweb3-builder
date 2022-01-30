// material-ui
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, Container, Grid, Link, Typography } from '@mui/material';

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

// ============================|| LANDING - KEY FEATURE PAGE ||============================ //

const TestSellTickets = () => {
    const theme = useTheme();
    const avatarIconSx = {
        ...theme.typography.commonAvatar,
        cursor: 'initial',
        width: 72,
        height: 72
    };

    return (
        <Grid container justifyContent="center" spacing={gridSpacing}>
            <Grid item xs={12}>
                <Typography
                    variant="body2"
                    sx={{
                        fontSize: { xs: '1.2rem', md: '1.125rem' },
                        fontWeight: 400,
                        lineHeight: 1.4
                    }}
                >
                    John is a street performer and recently started using The Physical Web3 to receive donations in crypto and distribute
                    autographs as NFTs for every contribution received.
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <FadeInWhenVisible>
                    <Grid container alignItems="center" spacing={2} sx={{ pl: 2 }} style={{ position: 'relative', marginTop: 2 }}>
                        <img
                            src="https://cdn.dribbble.com/users/3377233/screenshots/6226947/jamming.gif"
                            alt="performer"
                            style={{
                                maxWidth: '100%'
                            }}
                        />
                        <img
                            src={imgbase}
                            alt="performer"
                            style={{
                                position: 'absolute',
                                width: '30%',
                                left: 20,
                                bottom: 0
                            }}
                        />
                    </Grid>
                </FadeInWhenVisible>
            </Grid>
            <Grid item xs={12} md={6}>
                <FadeInWhenVisible>
                    <SubCard>
                        <Grid container alignItems="center" spacing={2} sx={{ mb: 4 }}>
                            <Grid item>
                                <Avatar
                                    variant="rounded"
                                    sx={{
                                        ...avatarIconSx,
                                        bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark[800] : 'primary.light',
                                        color: theme.palette.primary.main
                                    }}
                                >
                                    1
                                </Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography variant="body" fontSize="1.2em">
                                    Scan the QR Code from your mobile and follow the steps to access the{' '}
                                    <a href="https://app.physicalweb3.com?appId=NG5mrMw7CInc88MrTAz5btOk">dApp</a>.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" spacing={2} sx={{ mb: 4 }}>
                            <Grid item>
                                <Avatar
                                    variant="rounded"
                                    sx={{
                                        ...avatarIconSx,
                                        bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark[800] : 'primary.light',
                                        color: theme.palette.primary.main
                                    }}
                                >
                                    2
                                </Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography variant="body" fontSize="1.2em">
                                    This example is deployed in Avalanche Fuji Testnet. To get some test AVAX use the{' '}
                                    <a href="https://faucet.avax-test.network/" target="_blank" rel="noreferrer">
                                        faucet
                                    </a>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" spacing={2} sx={{ mb: 4 }}>
                            <Grid item>
                                <Avatar
                                    variant="rounded"
                                    sx={{
                                        ...avatarIconSx,
                                        bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark[800] : 'primary.light',
                                        color: theme.palette.primary.main
                                    }}
                                >
                                    3
                                </Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography variant="body" fontSize="1.2em">
                                    Once in the dApp, make sure you have changed your network in Metamask with the network information in
                                    the About page. Then go to the Control tab, input a value and tap donate.
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid container alignItems="center" spacing={2}>
                            <Grid item>
                                <Avatar
                                    variant="rounded"
                                    sx={{
                                        ...avatarIconSx,
                                        bgcolor: theme.palette.mode === 'dark' ? theme.palette.dark[800] : 'primary.light',
                                        color: theme.palette.primary.main
                                    }}
                                >
                                    4
                                </Avatar>
                            </Grid>
                            <Grid item xs zeroMinWidth>
                                <Typography variant="body" fontSize="1.2em">
                                    You will se a button link to the transaction. If you follow it you will see the NFT autograph contract
                                    adresss and Id that you can add to Metamask.
                                </Typography>
                            </Grid>
                        </Grid>
                    </SubCard>
                </FadeInWhenVisible>
            </Grid>
            <Grid item xs={12} sx={{ mt: 3 }}>
                <Grid container justifyContent="center" spacing={gridSpacing}>
                    <Grid item>
                        <AnimateButton>
                            <Button component={Link} href="https://youtu.be/MIKv-cEfQpU" target="_blank" variant="contained">
                                Watch the video
                            </Button>
                        </AnimateButton>
                    </Grid>
                    <Grid item>
                        <Button component={Link} href="/cases" variant="text">
                            More use cases
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default TestSellTickets;
