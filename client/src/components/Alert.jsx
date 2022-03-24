import React from 'react'
import { Alert } from '@mantine/core';
import { AlertCircle } from 'tabler-icons-react';

const AlertBox = () => {
  return (
    <>
    <Alert icon={<AlertCircle size={16} />} title="Bummer!" color="red">
      Something terrible happened! You made a mistake and there is no going back, your data was lost forever!
    </Alert>
    </>
  )
}

export default AlertBox