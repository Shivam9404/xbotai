import { AppBar, Toolbar, Typography, Button, Stack, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';

export default function Navbar() {
  return (
    //<AppBar position="static" sx={{ backgroundColor: '#E6DFF0', color: '#5A287D' }}>
      <Toolbar>
        
        {/* Centered Title */}
        <Typography variant="h6" sx={{ color:"#9785BA", flexGrow: 1, textAlign: '', fontWeight: 'bold' }}>
          Bot AI
        </Typography>

      </Toolbar>
    // </AppBar>
  );
}
