import { AppBar, Toolbar, Typography, Button, Stack, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import Avatar from '@mui/material/Avatar';

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#E6DFF0', color: '#5A287D' }}>
      <Toolbar>
        {/* Profile Avatar & New Chat Button */}
        <Stack direction="row" alignItems="center" spacing={2}>
          <Avatar src="/path-to-profile.png" alt="Profile" />
          <Button variant="text" sx={{ textTransform: 'none', color: '#5A287D' }}>
            New Chat
          </Button>
        </Stack>
        
        {/* Centered Title */}
        <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold' }}>
          Bot AI
        </Typography>

        {/* Past Conversations Button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#B18FCF',
            color: 'white',
            textTransform: 'none',
            '&:hover': { backgroundColor: '#A17EC4' }
          }}
        >
          Past Conversations
        </Button>
      </Toolbar>
    </AppBar>
  );
}
