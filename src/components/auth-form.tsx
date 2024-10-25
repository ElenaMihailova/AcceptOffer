import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Alert } from '@mui/material';

interface AuthFormProps {
    handleSubmit: (login: string, password: string) => void;
    errorMessage?: string;
}

export const AuthForm: React.FC<AuthFormProps> = ({ handleSubmit, errorMessage }) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        handleSubmit(login, password);
    };

    return (
        <Box
            component="form"
            onSubmit={onSubmit}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: 300,
                margin: '0 auto',
                padding: 3,
                boxShadow: 3,
                borderRadius: 2,
            }}
        >
            <Typography variant="h5" gutterBottom sx={{ color: 'primary.main' }}>
                Авторизация
            </Typography>
            {errorMessage && (
                <Alert severity="error" sx={{ width: '100%', marginBottom: 2 }}>
                    {errorMessage}
                </Alert>
            )}
            <TextField
                label="Логин"
                variant="outlined"
                fullWidth
                margin="normal"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
            />
            <TextField
                label="Пароль"
                variant="outlined"
                fullWidth
                margin="normal"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                sx={{ marginTop: 2 }}
                fullWidth
            >
                Войти
            </Button>
        </Box>
    );
};
