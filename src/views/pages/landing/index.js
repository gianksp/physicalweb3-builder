// material-ui
import { styled } from '@mui/material/styles';

// project imports
import Header from './Header';
import Feature from './Feature';
import Demos from './Demos';
import Layouts from './Layouts';
import Test from './Test';
import Steps from './Steps';
import Subscribe from './Subscribe';
import Footer from './Footer';
import Tools from 'views/pages/landing/Tools';
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

const Landing = () => (
    <>
        <HeaderWrapper id="home">
            <AppBar />
            <Header />
        </HeaderWrapper>
        <SecondWrapper>
            <Feature />
        </SecondWrapper>
        {/* <SecondWrapper>
            <Demos />
        </SecondWrapper>
        <SecondWrapper>
            <Layouts />
        </SecondWrapper>  */}
        <SecondWrapper>
            <Test />
        </SecondWrapper>
        <SecondWrapper>
            <Tools />
        </SecondWrapper>
        <SecondWrapper>
            <Steps />
        </SecondWrapper>
        <SecondWrapper>
            <Subscribe />
        </SecondWrapper>
        <Footer />
        {/* <Customization /> */}
    </>
);

export default Landing;
