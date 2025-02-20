import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"
import linksArray from "./data/linksArray"
import comics from "./data/comics"
function App() {
  

  return (
   <>
      <Header links={linksArray}/>
      <Main comics={comics} />
      <Footer/>
  </>
   
  )
}

export default App
