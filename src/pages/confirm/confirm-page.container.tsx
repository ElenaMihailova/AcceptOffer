import React, { useState } from 'react';
import { ConfirmPageView } from './confirm-page.view';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';

export const ConfirmPage: React.FC = () => {
	const [isAgreementChecked, setIsAgreementChecked] = useState(false);
	const navigate = useNavigate();

	const handleAgreementChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setIsAgreementChecked(event.target.checked);
	};

	const handleContinue = () => {
		console.log('Пользователь продолжил с подтвержденным договором');
	};

	const handleAdminNavigate = () => {
		navigate('/admin');
	};

	return (
		<>
			<Button
				variant="outlined"
				color="secondary"
				onClick={handleAdminNavigate}
				sx={{
					position: 'fixed',
					top: 16,
					right: 16,
					zIndex: 1000,
				}}
			>
				Временный переход на админскую страницу
			</Button>
			<ConfirmPageView
				isAgreementChecked={isAgreementChecked}
				onAgreementChange={handleAgreementChange}
				onContinue={handleContinue}
			/>

		</>
	)

};
