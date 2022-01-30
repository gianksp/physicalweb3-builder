// material-ui
import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import { Avatar, Button, Container, Grid, Link, Typography, Box } from '@mui/material';

// project imports
import FadeInWhenVisible from './Animation';
import SubCard from 'ui-component/cards/SubCard';
import AnimateButton from 'ui-component/extended/AnimateButton';
import { gridSpacing } from 'store/constant';
import PropTypes from 'prop-types';

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
import { ethers } from 'ethers';

// ============================|| LANDING - KEY FEATURE PAGE ||============================ //

const TX = ({ title, wallet }) => {
    const [transactions, setTransactions] = useState([]);

    const loadTxs = () => {
        console.log('invoking');
        const apiK = process.env.REACT_APP_COVALENT_KEY;
        fetch(
            `https://api.covalenthq.com/v1/43113/address/${wallet}/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=false&page-number=0&page-size=3&key=${apiK}`
        )
            .then((response) => response.json())
            .then((response) => {
                // console.log(response);
                try {
                    if (response && response.data.items) {
                        setTransactions(response.data.items);
                    }
                } catch (e) {
                    console.log(e);
                }
            });
    };

    useEffect(() => {
        loadTxs();
        console.log('starting interval');
        const interval = setInterval(() => {
            loadTxs();
        }, 4000);
        return () => {
            console.log('cleaning interval');
            clearInterval(interval);
        };
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
            const timeAgo = moment(tx.block_signed_at).fromNow(true);
            console.log(tx);
            const link = `https://testnet.snowtrace.io/tx/${tx.tx_hash}`;
            list.push(
                <Grid item xs={12} style={{ textAlign: 'left', paddingTop: 0 }} key={tx.hash}>
                    <Typography variant="body" fontSize="1.15em">
                        <strong>{timeAgo} ago </strong> payment{' '}
                        <a href={link} target="_blank" rel="noreferrer">
                            {ethers.utils.formatEther(tx.value)} AVAX
                        </a>{' '}
                        <i>{trimAddress(tx.from_address)}</i>
                    </Typography>
                </Grid>
            );
        });
        return list;
    };

    return (
        <Box style={{ position: 'absolute', top: 0, padding: 5 }}>
            <FadeInWhenVisible>
                <SubCard style={{ opacity: 0.75 }}>
                    <Grid container alignItems="left" spacing={2}>
                        <Grid item xs={12} style={{ textAlign: 'left', paddingTop: 5, marginBottom: 5 }}>
                            <Typography variant="body" fontSize="1.5em">
                                {title}
                            </Typography>
                        </Grid>
                        {displayTransactions()}
                    </Grid>
                </SubCard>
            </FadeInWhenVisible>
        </Box>
    );
};

TX.propTypes = {
    title: PropTypes.string,
    wallet: PropTypes.string
};

export default TX;
