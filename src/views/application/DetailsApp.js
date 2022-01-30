import PropTypes from 'prop-types';
import { Box, Paper, Grid, Typography } from '@mui/material';
import QRCode from 'react-qr-code';
import StarIcon from '@mui/icons-material/Star';

const getAppUrl = (id) => `https://app.physicalweb3.com?appId=${id}`;

const DetailsApp = ({ app }) => (
    <Paper sx={{ borderRadius: 0, p: 3, position: 'relative' }} elevation="4">
        {app.attributes.featured && (
            <Box sx={{ position: 'absolute', top: 25, right: 20 }}>
                <StarIcon style={{ fill: 'orange' }} />
            </Box>
        )}
        <Grid container spacing={0.3}>
            <Grid item sx={{ mb: 3 }} xs={12}>
                <Typography variant="h3">{app.attributes.configuration.about.appName}</Typography>
                <Typography variant="h6" fontSize="0.65em">
                    <a href={getAppUrl(app.id)}>{getAppUrl(app.id)}</a>
                </Typography>
                <Typography variant="body">{app.attributes.configuration.network.name}</Typography>
            </Grid>
            <Grid item xs={12}>
                <QRCode size="128" value={getAppUrl(app.id)} />
                <img
                    src={app.attributes.configuration.about.imageUrl}
                    alt="banner"
                    style={{
                        maxHeight: '128px',
                        maxWidth: '50%',
                        marginLeft: '15px'
                    }}
                />
            </Grid>
            <Typography fontSize="0.65em">Last updated {app.attributes.updatedAt.toString()}</Typography>
        </Grid>
    </Paper>
);

DetailsApp.propTypes = {
    app: PropTypes.object
};

export default DetailsApp;
