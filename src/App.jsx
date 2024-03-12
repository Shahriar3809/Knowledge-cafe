import './App.css'
import Headers from './components/Header/Header'
import Blogs from './components/Blogs/Blogs';
import Bookmark from './components/Bookmarks/Bookmark';
function App() {
  

  return (
    <>
      <Headers></Headers>
      <main className='md:flex'>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </main>
    </>
  );
}

export default App
