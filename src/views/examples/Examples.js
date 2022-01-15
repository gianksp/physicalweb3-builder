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
                <Grid xs={12} md={6} xxl={3}>
                    <Box sx={{ m: 2 }}>
                        <DetailsApp app={app} />
                    </Box>
                </Grid>
            );
        });
        return list;
    };

    return (
        <Container>
            <Grid container alignItems="center" justifyContent="space-between" spacing={gridSpacing} sx={{ mt: 0, mb: 10, pl: 3, pr: 3 }}>
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: '3rem',
                        fontWeight: 900,
                        lineHeight: 1.4,
                        mb: 2
                    }}
                >
                    Examples
                </Typography>
                <Grid container sx={{ pl: 2 }}>
                    {listApps()}
                </Grid>
            </Grid>
        </Container>
    );
}
