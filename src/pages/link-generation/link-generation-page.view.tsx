import React from 'react';
import { TextField, Button, Box, IconButton, InputAdornment } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { PageWrapper } from '../../components/page-wrapper';

interface LinkGenerationViewProps {
  link: string;
  newLink: string;
  setLink: (value: string) => void;
  handleGenerate: () => void;
  handleCopy: () => void;
}

// https://yclients.com/pay/9UFJO/ 

const LinkGenerationView: React.FC<LinkGenerationViewProps> = ({ link, newLink, setLink, handleGenerate, handleCopy }) => {
  return (
    <PageWrapper>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, maxWidth: 400, margin: '0 auto' }}>
        <TextField
          label="Введите ссылку"
          variant="outlined"
          fullWidth
          value={link}
          onChange={(e) => {
            const newLink = e.target.value;
            setLink(newLink);
          }}
        />

        <Button variant="contained" color="primary" onClick={handleGenerate}>
          Сгенерировать
        </Button>
        {newLink && (
          <TextField
            label="Новая ссылка"
            variant="outlined"
            fullWidth
            value={newLink}
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleCopy}>
                    <ContentCopyIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      </Box>
    </PageWrapper>
  );
}; export default LinkGenerationView;

