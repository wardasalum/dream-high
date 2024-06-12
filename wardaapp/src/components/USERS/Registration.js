import React from 'react';
import { Paper, Grid, Typography, TextField, Button } from '@mui/material';

export default function Registration() {
  return (
    <Grid container spacing={3} justifyContent="center" style={{ marginTop: '20px', backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)', minHeight: '100vh'}}>
      <Grid item xs={12} sm={6}>
        <Paper elevation={4} style={{ padding: '20px' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h5" gutterBottom >
            REGISTRATION FORM
          </Typography>
          </div>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  // value={hub.name}
                  // onChange={(e) => onInputChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  name="password"
                  // value={hub.location}
                  // onChange={(e) => onInputChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Return password"
                  name="return password"
                  // value={hub.contact}
                  // onChange={(e) => onInputChange(e)}
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: 'center' }}>
                <Button type="submit" variant="contained" color="primary">
                  REGISTER
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}
