import { Routes, Route }  from 'react-router-dom'
import { Layout }         from './container'
import { Home, Navigation, NewProject } from './components'

function App() {
  return (
    <>
    <Navigation />
    <Routes >
      <Route path="/" element={<Layout />}>
        <Route index element={ <Home  /> } />
        <Route path="/new" element={<NewProject />}/>  
      </Route>
    </Routes>
    </>
  )
}

export default App
