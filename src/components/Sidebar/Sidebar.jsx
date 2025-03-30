import { useContext } from 'react';
import { ThemeContext } from '../../theme/ThemeContext';
import { Typography, Box, Stack, Button, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

import AddCommentIcon from '@mui/icons-material/AddComment';
import CloseIcon from '@mui/icons-material/Close';

import icon from '../../assets/newchat.png';

export default function Sidebar({ setChat, closeMenu }) {
  const { mode, setMode } = useContext(ThemeContext);
  const isMobile = useMediaQuery('(max-width: 800px)');

  const handleModeToggle = () => {
    setMode((prev) => (prev === 'Light' ? 'Dark' : 'Light'));
  };

  return (
    <Box>
      {/* Close Button for Mobile View */}
      {isMobile && (
        <Button
          endIcon={<CloseIcon />}
          sx={{
            width: 1,
            justifyContent: 'flex-end',
            color: mode === 'Light' ? 'primary.dark' : 'text.primary',
          }}
          onClick={closeMenu}
        >
          Close
        </Button>
      )}

      {/* New Chat Button */}
      <Link to="/" style={{ textDecoration: 'none' }}>
        <Stack
            onClick={(e) => {
              e.preventDefault();  // 🛑 Prevent unwanted default behavior
              setChat([]);         // ✅ Reset chat
            
              if (typeof closeMenu === 'function') {
                closeMenu();       // ✅ Close sidebar only if it's a function
              }
            
              window.location.pathname = '/';  // ✅ Force navigation if React Router fails
            }}
          sx={{
            bgcolor: '#D7C7F4',
            '&:hover': { bgcolor: '#D7C7F4' },
          }}
          direction="row"
          spacing={1}
          alignItems="center"
          justifyContent="space-between"
          py={2}
          px={{ xs: 2, md: 3 }}
        >
          <Stack direction="row" gap={1} alignItems="center">
            <Box
              component="img"
              src={icon}
              height={42}
              width={36}
              borderRadius={2}
              boxShadow={4}
              flexShrink={0}
            />
            <Typography
              variant="h6"
              fontSize={{ xs: 16, md: 20 }}
              color="black"
            >
              New Chat
            </Typography>
          </Stack>
          <AddCommentIcon sx={{ color: 'text.primary' }} />
        </Stack>
      </Link>

      {/* Past Conversations Button */}
      <Box p={{ xs: 2, md: 3 }}>
        <Link to="/history">
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#D7C7F4',
              color: 'white',
              textTransform: 'none',
              '&:hover': { backgroundColor: '#D7C7F4' },
            }}
          >
            Past Conversations
          </Button>
        </Link>
      </Box>
    </Box>
  );
}
