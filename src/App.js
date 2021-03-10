import Profile from "./profile/Profile"
import fb from "./fb.jpg"
function App() {
  const handleName = name => {
    alert (`name is ${name}`);

}
  return (
    <div className="App">
      <Profile name="Walid" bio="Zouari" pro="test" handleName={handleName}> <img src={fb} alt="" /> </Profile>


    </div>
  );
}

export default App;
