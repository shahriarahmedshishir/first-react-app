import "./App.css"
import Items from './components/Items'


function App() {
  const bodyColor = {
    height: "100vh",
    listStyle: "none",
    backgroundColor: "blueviolet",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "scroll"

  }
  const colorItem = {
    width: "36rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  }
  const h2 ={
    fontSize: "2rem",
    marginTop: "10px",
    marginBottom: "13px"
  }
  const p ={
    fontSize: "1.1rem",
    marginBottom: "2rem",
    textAlign: "center"
  }
  return (
    <div style={bodyColor}>
      <div style={colorItem}>
        <h2 style={h2}>Gulumulu Projects</h2>
        <p style={p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae dolore dolores <br/> libero deserunt. Repellat, quis?</p> 
        <Items></Items>
      </div>
    </div>
  )
}

export default App
