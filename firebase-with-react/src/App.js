
import { useEffect, useState } from 'react';
import './App.css';
import { Auth } from './components/auth';
import { db,auth } from './config/firebase-config';
import {getDocs,collection,addDoc,deleteDoc,doc,updateDoc} from 'firebase/firestore'

function App() {
  const [movieList,setMovieList]=useState([]);
  const [newMovieTitle,setnewMovieTitle]=useState("");
  const [newReleaseDate,setnewReleaseDate]=useState(0);
  const [isMovieOscar,setisMovieOscar]=useState(false);
  const [updatedTitle, setUpdatedTitle]=useState("")
  const moviesCollectionRef=collection(db,"movies")
  const getMovieList=async()=>{
    //READ DATA FROM DB
    try{
    const data=await getDocs( moviesCollectionRef);
    const filteredData=data.docs.map((doc)=>({
      ...doc.data(),
    id: doc.id,
  }))
    setMovieList(filteredData)}
    catch(err){
        console.error(err);
    }

  }

const deleteMovie=async(id)=>{
  const movieDoc=doc(db,"movies",id)
    await deleteDoc(movieDoc);
}
const updateMovie=async(id)=>{
  const movieDoc=doc(db,"movies",id)
    await updateDoc(movieDoc, {title:updatedTitle});
}
  useEffect (()=>{
   
    getMovieList();

  },[])
  const onSubmitMovie=async()=>{
    try{ await addDoc(moviesCollectionRef,{
      title: newMovieTitle,
      releaseDate:newReleaseDate,
      receivedAnOscar:isMovieOscar,
      userId: auth?.currentUser?.uid
    })
      getMovieList();}
    catch(err){
      console.error(err);
    }
   
  };
  
  return (
    <div className="App">
     <Auth/>
     <div>
      <input placeholder='movie title..' onChange={(e)=>{setnewMovieTitle(e.target.value)}}/>
      <input placeholder='release date...' type='number' onChange={(e)=>{setnewReleaseDate(Number(e.target.value))}}/>
      <input type='checkbox' checked={isMovieOscar} onChange={(e)=>{setisMovieOscar(e.target.checked)}}/>
      <label>Received an Oscar</label>
      <button onClick={onSubmitMovie}>Submit Movie</button>
     </div>
     <div>
      {movieList.map((movie)=>(
        <div>
          <h1 style={{color: movie.receivedAnOscar ? "green" : "red"}}>{movie.title}</h1>
          <p>Date: {movie.releaseDate}</p>
          <button onClick={()=>{deleteMovie(movie.id)}}>Delete movie</button>
          <input placeholder='new title..' onChange={(e)=>{setUpdatedTitle(e.target.value)}}></input>
          <button onClick={()=>{updateMovie(movie.id)}}> Update Title</button>
        </div>
      ))}
     </div>
    
    </div>
  );
}

export default App;
