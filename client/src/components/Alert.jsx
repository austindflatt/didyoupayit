import React from 'react'
import { Alert } from '@mantine/core';
import { AlertCircle } from 'tabler-icons-react';
import { useAppContext } from '../context/appContext';

const AlertBox = () => {
  const { alertType, alertText } = useAppContext()
  return (
    <>
    <Alert icon={<AlertCircle size={16} />} color={`${alertType}`}>
      {alertText}
    </Alert>
    </>
  )
}

export default AlertBox