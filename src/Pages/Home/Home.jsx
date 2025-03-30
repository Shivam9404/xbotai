import { Box, Stack, Typography } from '@mui/material';
import InitialChat from '../../components/InitialChat/InitialChat';
import ChatInput from '../../components/ChatInput/ChatInput';
import ChattingCard from '../../components/ChattingCard/ChattingCard';
import FeedbackModal from '../../components/FeedbackModal/FeedbackModal';
import { useEffect, useRef, useState, useContext } from 'react';
import { useOutletContext } from 'react-router-dom';
import data from '../../aiData/sampleData.json';
import Navbar from '../../components/Navbar/Navbar';
import { ThemeContext } from '../../theme/ThemeContext';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const listRef = useRef(null);
  const [chatId, setChatId] = useState(1);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [scrollToBottom, setScrollToBottom] = useState(false);

  // ✅ Fix: Ensure `chat` is always an array
  const { chat = [], setChat } = useOutletContext();
  const { mode } = useContext(ThemeContext);

  const generateResponse = (input) => {
    if (!input.trim()) return; // ✅ Prevent empty messages
  
    const resFound = data?.find(
      (item) => input.toLowerCase() === item.question.toLowerCase()
    );
  
    const answer = resFound ? resFound.response : 'Sorry, did not understand your query!';
  
    setChat((prev) => [
      ...(prev || []),  // ✅ Ensure prev is always an array
      {
        type: 'Human',
        text: input,
        time: new Date(),
        id: prev?.length ? prev[prev.length - 1].id + 1 : 1, // ✅ Generate dynamic ID
      },
      {
        type: 'AI',
        text: answer,
        time: new Date(),
        id: prev?.length ? prev[prev.length - 1].id + 2 : 2, // ✅ Increment ID correctly
      },
    ]);
  
    setChatId((prevId) => prevId + 2); // ✅ Ensure chatId is correctly updated
  };
  

  return (
    <Stack height="100vh" justifyContent="space-between" sx={{
      '@media (max-width:767px)': {
        background: mode === 'Light' ? 'linear-gradient(#F9FAFA 60%, #EDE4FF)' : '',
      },
    }}>
      <Navbar />

      {chat.length === 0 && <InitialChat generateResponse={generateResponse} />}

      {chat.length > 0 && (
        <Stack
          height={1}
          flexGrow={0}
          p={{ xs: 2, md: 3 }}
          spacing={{ xs: 2, md: 3 }}
          sx={{
            overflow: 'auto',
            '&::-webkit-scrollbar': {
              width: '10px',
            },
            '&::-webkit-scrollbar-track': {
              boxShadow: 'inset 0 8px rgba(0,0,0,0.1)',
              borderRadius: '8px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(151, 133, 186,0.4)',
              borderRadius: '8px',
            },
          }}
          ref={listRef}
        >
          {chat.map((item, index) => (
            <ChattingCard
              key={index}
              details={item}
              updateChat={setChat}
              setSelectedChatId={setSelectedChatId}
              showFeedbackModal={() => setShowModal(true)}
            />
          ))}
        </Stack>
      )}

      <ChatInput
        generateResponse={generateResponse}
        setScroll={setScrollToBottom}
        chat={chat}
        clearChat={() => setChat([])}
      />

      <FeedbackModal
        open={showModal}
        updateChat={setChat}
        chatId={selectedChatId}
        handleClose={() => setShowModal(false)}
      />
    </Stack>
  );
}
