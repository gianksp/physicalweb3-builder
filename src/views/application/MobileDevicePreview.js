import PropTypes from 'prop-types';
import { Container, Box } from '@mui/material';
import mobileFrame from 'assets/images/mobile-frame.png';

const MobileDevicePreview = ({ controllerUrl }) => (
    <Container>
        <Box width={250}>
            <img
                src={mobileFrame}
                key="logo"
                alt="Logo"
                style={{
                    position: 'absolute',
                    top: '280px',
                    width: '505px',
                    height: '700px',
                    'margin-left': '12px',
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
                    top: '345px',
                    width: '343px',
                    height: '570px',
                    'margin-left': '89px',
                    'z-index': 2,
                    border: 'none',
                    borderRadius: 8
                }}
            />
        </Box>
    </Container>
);

MobileDevicePreview.propTypes = {
    controllerUrl: PropTypes.string
};

export default MobileDevicePreview;
