// material-ui
import { styled } from '@mui/material/styles';

// project imports
import Footer from 'views/pages/landing/Footer';
import AppsPage from 'views/application/Apps';
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

const ApplicationPage = () => (
    <>
        <HeaderWrapper id="home">
            <AppBar />
        </HeaderWrapper>
        <SecondWrapper>
            <AppsPage />
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

export default ApplicationPage;
