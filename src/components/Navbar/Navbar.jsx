import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Navbar() {
  return (
    //<AppBar position="static" sx={{ backgroundColor: '#E6DFF0', color: '#5A287D' }}>
      <Toolbar>
        {/* Centered Title */}
        <Typography variant="h1" sx={{ color:"#9785BA", flexGrow: 1, fontWeight: 'bold' }}>
          Bot AI
        </Typography>
      </Toolbar>
    //</AppBar>
  );
}
