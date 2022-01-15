import PropTypes from 'prop-types';
import { Box, Paper, Grid, Typography } from '@mui/material';
import QRCode from 'react-qr-code';

const getAppUrl = (id) => `https://app.physicalweb3.com?appId=${id}`;

const DetailsApp = ({ app }) => (
    <Paper sx={{ mt: 5, borderRadius: 0, p: 3, ml: -3 }} elevation="4">
        <Grid item sx={{ mb: 3 }}>
            <Typography variant="h2">{app.attributes.configuration.about.appName}</Typography>
            <Typography variant="h6">
                <a href={getAppUrl(app.id)}>{getAppUrl(app.id)}</a>
            </Typography>
            <Typography variant="h6">{app.attributes.configuration.network.name}</Typography>
        </Grid>
        <Grid item>
            <QRCode size="128" value={getAppUrl(app.id)} />
            <img
                src={app.attributes.configuration.about.imageUrl}
                alt="banner"
                style={{
                    maxHeight: '128px',
                    maxWidth: '60%',
                    marginLeft: 15
                }}
            />
        </Grid>
    </Paper>
);

DetailsApp.propTypes = {
    app: PropTypes.object
};

export default DetailsApp;
