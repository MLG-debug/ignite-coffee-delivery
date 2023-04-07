import React from 'react'
import { LayoutContainer } from './styles'
import { Header } from '../../components/Header'
import { Outlet } from 'react-router-dom'

export const DefaultLayout = () => {
  return (
    <>
      <Header />
      <LayoutContainer>
        <Outlet />
      </LayoutContainer>
    </>
  )
}
