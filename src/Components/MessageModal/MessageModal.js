import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const MessageModal = ({ purchaseID }) => {

	return (
		<Stack sx={{ width: '100%' }} spacing={1}>
            <Alert severity="success" color="success">
            Muchas gracias por su compra 😊!
            </Alert>
            <Alert variant="outlined" severity="info">
                Su id de transacción es: {purchaseID}
            </Alert>
		</Stack>
	);
};

export default MessageModal;
