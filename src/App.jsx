import MainFlix from "./components/MainFlix"
import NavbarFlix from "./components/NavbarFlix"
import { GlobalStateProvider } from "./context/GlobalStateContext"


function App() {

  return (
    <>
      <GlobalStateProvider>
        <NavbarFlix />
        <MainFlix />
      </GlobalStateProvider>

    </>
  )
}

export default App
