import React from 'react'
import './App.css'
import JSX from './components/JSX.jsx'
import UseState from './components/UseState.jsx'
import Dashboard from './components/Dashboard.jsx'
import ClassComponent from './components/classComponent.jsx'
import Lifecycle from './components/LifeCycle.jsx'
import Filter from './components/Filter.jsx'
import FormHandle from './components/FormHandle.jsx'

function App() {

  return (
    <>
      <JSX />
      <UseState message="Explorer React" />
      <ClassComponent />
      <Lifecycle />
      <Dashboard />
      <Filter />
      <FormHandle />
    </>
  )
}

export default App
