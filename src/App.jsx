import NavbarFlix from "./components/NavbarFlix"
import { GlobalStateProvider } from "./context/GlobalStateContext"

function App() {

  return (
    <>
      <GlobalStateProvider>
        <NavbarFlix />
      </GlobalStateProvider>

    </>
  )
}

export default App
