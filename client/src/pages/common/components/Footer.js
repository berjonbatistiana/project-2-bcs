import React from 'react';
import { Typography, Grid } from "@material-ui/core"
import Divider from '@material-ui/core/Divider';
import Box from "@material-ui/core/Box";
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';

export const Footer = () => {
  return (
    <Grid
      container
      direction="row"
      style={{ minHeight: "20vh", backgroundColor: "#302E2E", color: "white" }}
      justify="space-around"
      alignItems="center"
    >
      <Grid item xs={3} lg={2}>
        <Box mb={3}>
          <Link href="https://github.com/berjonbatistiana/project-2-bcs" color="inherit" target="_blank">
            <GitHubIcon/>
          </Link>
        </Box>
        <Divider style={{backgroundColor: "white"}}/>
        <Box mt={3}>
          <Typography variant="caption">
            © HYPE TYPE - 2020
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3} lg={2}>
        <Box mb={3}>
          <Typography variant="caption" display="block">
            If you have any questions about this project, feel free to reach out to us!
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={3} lg={2}>
        <Typography variant="caption" display="block">
          DEVELOPED BY
        </Typography>
        <Typography variant="caption" display="block">
          <Link href="https://github.com/berjonbatistiana" color="inherit" target="_blank">
            Bermond Batistiana
          </Link>
        </Typography>
        <Typography variant="caption" display="block">
          <Link href="https://github.com/sean-marten" color="inherit" target="_blank">
            Sean Marten
          </Link>
        </Typography>
        <Typography variant="caption" display="block">
          <Link href="https://github.com/a-li-sa" color="inherit" target="_blank">
            Alisa Poon
          </Link>
        </Typography>
        <Typography variant="caption" display="block">
          <Link href="https://github.com/Bscott95" color="inherit" target="_blank">
            Brandon Scott
          </Link>
        </Typography>
      </Grid>
    </Grid>
  )
}
