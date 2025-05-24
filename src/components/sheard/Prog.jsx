import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CircularProgress, {
  circularProgressClasses,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[200],
    ...theme.applyStyles('dark', {
      backgroundColor: theme.palette.grey[800],
    }),
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#FB923C',
    ...theme.applyStyles('dark', {
      backgroundColor: '#308fe8',
    }),
  },
}));


function FacebookCircularProgress(props) {
  return (
    <Box sx={{ position: 'relative', }} >
    </Box>
  );
}

function GradientCircularProgress() {
  return (
    <React.Fragment>
      
    </React.Fragment>
  );
}
export default function CustomizedProgressBars({children}) {
  return (
    <Stack spacing={0} sx={{ flexGrow: 1 ,minWidth:"500px", color:"#FB923C" }}>
      <FacebookCircularProgress />
      <GradientCircularProgress />
      <br />
      <BorderLinearProgress variant="determinate"  value={children} />
    </Stack>
  );
}
