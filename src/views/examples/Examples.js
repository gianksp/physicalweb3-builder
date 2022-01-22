import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Grid, Container, Button, Box } from '@mui/material';
import { gridSpacing } from 'store/constant';
import useAppCatalog from 'hooks/useAppCatalog';
import DetailsApp from 'views/application/DetailsApp';

export default function Examples() {
    const { appCatalog = [] } = useAppCatalog([]);

    const listApps = () => {
        const list = [];
        appCatalog.forEach((app) => {
            console.log(app);
            list.push(
                <Grid item xs={12} md={6} xxl={3} key={app.id}>
                    <Box>
                        <DetailsApp app={app} />
                    </Box>
                </Grid>
            );
        });
        return list;
    };

    return (
        <Container sx={{ pb: 5 }}>
            <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing}>
                <Grid item xs={12}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: '3rem',
                            fontWeight: 900,
                            lineHeight: 1.4
                        }}
                    >
                        Live Apps
                    </Typography>
                </Grid>
                {listApps()}
            </Grid>
        </Container>
    );
}
