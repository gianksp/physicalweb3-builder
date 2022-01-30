// material-ui
import { useState, useEffect } from 'react';
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
import moment from 'moment';

// ============================|| LANDING - KEY FEATURE PAGE ||============================ //
const wallet = '0x68E953Df3e27c231BebE9fb490f80487254A4ad7';

const TestVendor = () => {
    const theme = useTheme();
    const [transactions, setTransactions] = useState([]);
    const avatarIconSx = {
        ...theme.typography.commonAvatar,
        cursor: 'initial',
        width: 72,
        height: 72
    };

    useEffect(() => {
        // setInterval(() => {
        const apiK = process.env.REACT_APP_COVALENT_KEY;
        fetch(
            `https://api.covalenthq.com/v1/43113/address/${wallet}/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=false&page-number=0&page-size=3&key=${apiK}`
        )
            .then((response) => response.json())
            .then((response) => {
                try {
                    if (response && response.data.items) {
                        setTransactions(response.data.items);
                    }
                } catch (e) {
                    console.log(e);
                }
            });
        // }, 3000);
    }, []);

    const trimAddress = (address) => {
        if (!address) return;

        const first = address.substring(0, 4);
        const last = address.substr(-8);
        // eslint-disable-next-line consistent-return
        return `${first}...${last}`;
    };

    const displayTransactions = () => {
        const list = [];
        transactions.forEach((tx) => {
            console.log(tx);
            const timeAgo = moment(tx.block_signed_at).fromNow(true);
            list.push(
                <Grid item xs={12} style={{ textAlign: 'left' }}>
                    <Typography variant="body" fontSize="1.15em">
                        <strong>{timeAgo} ago </strong> payment <a href="/ads">0.05 AVAX</a> from <i>{trimAddress(tx.from_address)}</i>
                    </Typography>
                </Grid>
            );
        });
        return list;
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
                    Arthur has an ice cream truck and recently started using The Physical Web3 to receive payments in crypto in exchange for
                    his delicious ice creams!.
                </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
                <FadeInWhenVisible>
                    <Grid container alignItems="center" spacing={2} sx={{ pl: 2 }} style={{ position: 'relative', marginTop: 2 }}>
                        <img
                            src="https://i.giphy.com/media/l378h3ACjfZnlY2Yw/giphy.webp"
                            alt="vendor"
                            style={{
                                width: '110%'
                            }}
                        />
                        <img
                            src={imgbase}
                            alt="performer"
                            style={{
                                position: 'absolute',
                                width: '30%',
                                right: 10,
                                bottom: 0
                            }}
                        />
                        <Box style={{ position: 'absolute', top: 0, padding: 5 }}>
                            <FadeInWhenVisible>
                                <SubCard style={{ opacity: 0.8 }}>
                                    <Grid container alignItems="left" spacing={2}>
                                        <Grid item xs={12} style={{ textAlign: 'left' }}>
                                            <Typography variant="body" fontSize="1.5em">
                                                Arthur Wallet Latest Transactions
                                            </Typography>
                                        </Grid>
                                        {displayTransactions()}
                                    </Grid>
                                </SubCard>
                            </FadeInWhenVisible>
                        </Box>
                    </Grid>
                </FadeInWhenVisible>
            </Grid>
            <Grid item xs={12} md={6}>
                <FadeInWhenVisible>
                    <SubCard>
                        <Grid container alignItems="center" spacing={2} sx={{ mb: 4 }}>
                            <Grid item xs={12} style={{ textAlign: 'center' }}>
                                <Typography variant="body" fontSize="1.5em">
                                    <strong>Get an ice cream!</strong>
                                </Typography>
                            </Grid>
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
                                    Scan the QR Code from your mobile and open the app.
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
                                    Follow the instructions from the landing page.
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
                                    Enjoy your ice cream and see Arthur wallet balance updated.
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

export default TestVendor;
