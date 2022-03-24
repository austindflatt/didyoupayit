import React from 'react'
import { NavBar } from '../components/NavBar'
import { Grid } from '@mantine/core';

const CompletedPayments = () => {
  return (
	<>
	<Grid columns={24}>
		<Grid.Col span={12}><NavBar /></Grid.Col>
	<p>Welcome to your CompletedPayments</p>
	</Grid>
	</>
  )
}

export default CompletedPayments