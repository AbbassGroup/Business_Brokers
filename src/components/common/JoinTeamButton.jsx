import React from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GroupAddIcon from '@mui/icons-material/GroupAdd';

const BRAND = {
  blue: '#56C1BC',
  darkBlue: '#45a19d',
};

const JoinTeamButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      variant="contained"
      startIcon={<GroupAddIcon />}
      onClick={() => navigate('/careers')}
      sx={{
        bgcolor: BRAND.blue,
        color: 'white',
        '&:hover': {
          bgcolor: BRAND.darkBlue,
        },
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 1000,
        borderRadius: '25px',
        padding: '10px 20px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
      }}
    >
      Join Our Team
    </Button>
  );
};

export default JoinTeamButton; 