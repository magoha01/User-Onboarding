import React from 'react'
import styled from 'styled-components'

const UserCard = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-flow: column wrap;
  align-items: center;
  border: 2px solid black;
  border-radius: 12px;
  margin: 1% 30%;

`

export default function User({ details }) {

  if (!details) {
    return <h3>Loading details...</h3>
  }

  return (
    <UserCard id='user container'>
      <h2>{details.first_name} {details.last_name}</h2>
      <p>Email: {details.email}</p>
    </UserCard>
  )
}