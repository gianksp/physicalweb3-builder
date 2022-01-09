// material-ui
import { styled } from '@mui/material/styles';

// project imports
import Header from 'views/pages/landing/Header';
import Feature from 'views/pages/landing/Feature';
import Demos from 'views/pages/landing/Demos';
import Layouts from 'views/pages/landing/Layouts';
import KeyFeature from 'views/pages/landing/KeyFeature';
import Steps from 'views/pages/landing/Steps';
import Subscribe from 'views/pages/landing/Subscribe';
import Footer from 'views/pages/landing/Footer';
import Examples from 'views/examples/Examples';
import AppBar from 'ui-component/extended/AppBar';

const HeaderWrapper = styled('div')(({ theme }) => ({
    paddingTop: 30,
    overflowX: 'hidden',
    overflowY: 'clip',
    [theme.breakpoints.down('md')]: {
        paddingTop: 42
    }
}));

const SecondWrapper = styled('div')(({ theme }) => ({
    paddingTop: 160,
    [theme.breakpoints.down('md')]: {
        paddingTop: 60
    }
}));

// =============================|| LANDING MAIN ||============================= //

const ExamplesPage = () => (
    <>
        <HeaderWrapper id="home">
            <AppBar />
        </HeaderWrapper>
        <SecondWrapper>
            <Examples />
        </SecondWrapper>
        {/* <SecondWrapper>
            <Demos />
        </SecondWrapper>
        <SecondWrapper>
            <Layouts />
        </SecondWrapper>
        <SecondWrapper>
            <KeyFeature />
        </SecondWrapper> 
        <SecondWrapper>
            <Steps />
        </SecondWrapper>
        <SecondWrapper>
            <Subscribe />
        </SecondWrapper> */}
        <Footer />
        {/* <Customization /> */}
    </>
);

export default ExamplesPage;
