import PropTypes from 'prop-types';
import { Container, Box } from '@mui/material';
import mobileFrame from 'assets/images/mobile-frame.png';

const MobileDevicePreview = ({ controllerUrl }) => (
    <Box width={250} sx={{ position: 'relative' }}>
        <img
            src={mobileFrame}
            key="logo"
            alt="Logo"
            style={{
                position: 'absolute',
                top: '20px',
                width: '505px',
                height: '700px',
                'margin-left': '0px',
                'z-index': 1
            }}
        />
        <iframe
            src={controllerUrl}
            title="Controller Preview"
            width="568"
            height="858"
            style={{
                position: 'absolute',
                top: '90px',
                width: '343px',
                height: '570px',
                'margin-left': '77px',
                'z-index': 2,
                border: 'none',
                borderRadius: 8
            }}
        />
    </Box>
);

MobileDevicePreview.propTypes = {
    controllerUrl: PropTypes.string
};

export default MobileDevicePreview;
