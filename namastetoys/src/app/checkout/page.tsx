// Feild name ,email
// Name , pincode , phone number , address , city dropdown , and landmark
"use client";
import { useState } from "react";
import styles from "./checkout.module.css";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";

const cities = [
  { city: "Mumbai", state: "Maharashtra", country: "India" },
  { city: "Delhi", state: "Delhi", country: "India" },
  { city: "Bangalore", state: "Karnataka", country: "India" },
  { city: "Kolkata", state: "West Bengal", country: "India" },
  { city: "Chennai", state: "Tamil Nadu", country: "India" },
  { city: "Hyderabad", state: "Telangana", country: "India" },
  { city: "Pune", state: "Maharashtra", country: "India" },
  { city: "Ahmedabad", state: "Gujarat", country: "India" },
  { city: "Jaipur", state: "Rajasthan", country: "India" },
  { city: "Surat", state: "Gujarat", country: "India" },
  // Add more city data here...
];

const Checkout = () => {
  const [value, setValue] = useState(null);
  return (
    <Box className={styles.container}>
      {/* <Typography variant="h4">How would you like to get yor order?</Typography> */}

      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Box my={1}>
            <Typography variant="h6" className={styles.label}>
              Contact information
            </Typography>
          </Box>
          <Grid item component={Box} my={1} xs={12}>
            <Typography className={styles.inputFiledLable}>
              First name
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              className={styles.inputFields}
              fullWidth
            />
          </Grid>
          <Grid item component={Box} my={1} xs={12}>
            <Typography className={styles.inputFiledLable}>
              Last name
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              className={styles.inputFields}
              fullWidth
            />
          </Grid>
          <Grid item component={Box} my={1} xs={12}>
            <Typography className={styles.inputFiledLable}>
              Phone Number
            </Typography>
            <TextField
              variant="outlined"
              className={styles.inputFields}
              size="small"
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item component={Box} my={1} xs={12}>
            <Typography className={styles.inputFiledLable}>
              Email Address
            </Typography>
            <TextField
              variant="outlined"
              size="small"
              className={styles.inputFields}
              fullWidth
            />
          </Grid>
        </Grid>

        <Grid item xs={12} md={6}>
          <Box my={1}>
            <Typography variant="h6" className={styles.label}>
              Shipping Address
            </Typography>
          </Box>
          <Grid item xs={12} component={Box} my={1}>
            <Typography className={styles.inputFiledLable}>
              address line 1
            </Typography>
            <TextField
              variant="outlined"
              className={styles.inputFields}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} component={Box} my={1}>
            <Typography className={styles.inputFiledLable}>
              apt,suite,floor,etc
            </Typography>
            <TextField
              variant="outlined"
              className={styles.inputFields}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} component={Box} my={1}>
            <Typography className={styles.inputFiledLable}>city</Typography>
            <Autocomplete
              value={value}
              size="small"
              onChange={(event, newValue: any) => {
                setValue(newValue);
              }}
              options={cities}
              getOptionLabel={(option) => option.city}
              renderInput={(params) => (
                <TextField
                  {...params}
                  className={styles.inputFields}
                  variant="outlined"
                />
              )}
            />
          </Grid>
          <Grid item xs={12} component={Box} my={1}>
            <Typography className={styles.inputFiledLable}>pincode</Typography>
            <TextField
              variant="outlined"
              type="number"
              className={styles.inputFields}
              size="small"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} component={Box} my={1}>
            <Typography className={styles.inputFiledLable}>landmark</Typography>
            <TextField
              variant="outlined"
              className={styles.inputFields}
              size="small"
              fullWidth
            />
          </Grid>
        </Grid>

         
         
         
        
        
      </Grid>

      <Grid container spacing={2} display="flex" justifyContent="flex-end">
      <Grid item xs={12} md={2} lg={2}  >
           <Box my={1}/>
           <Button fullWidth variant="outlined" color='primary' className={styles.button}>Submit</Button>
         </Grid>
         </Grid>
    </Box>
  );
};
export default Checkout;
