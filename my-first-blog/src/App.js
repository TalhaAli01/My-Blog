import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';

function App() {
  return (
    <>
    <Header />
    <Main 
        title= 'Hello World'
        description= 'This is the description of my Title'
        img= "./Images/ales-nesetril-Im7lZjxeLhg-unsplash.jpg"
    />
    </>
  );
}

export default App;
