import axios from 'axios'
import {useState,useEffect} from 'react'
import Navbar from '../Navbar/Navbar'

// import {useDispatch} from 'react-redux';
function Gallery() 
{
  const [news, setNews] = useState([])

  const [image_path, setImagepath] = useState([]) 




  // const dispatch = useDispatch();

  const fetchNews = () => {
    axios.get("https://newsapi.org/v2/top-headlines?country=in&apiKey=889a2b39120c4636ae66833b27dcac39")
      .then((response) => {
        console.log(response);
        setNews(response.data.articles)
      })
  }

  const d = ()=>
  {
    axios.get("http://localhost:3501/data")
    .then((response) =>{
      console.log(response)
    })
  }

const fetch_image = ()=>
{
  axios.get("http://localhost:3501/images_sharing")
  .then((response)=>{
    console.log(response.data.image_path)
    setImagepath(response.data.image_path)
    // const image_data_path = response.image_path;
    // console.log(image_data_path)
    // return response.data.image_path

  })
}



  return (
    <>
    <Navbar/>
    <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className='btn btn-primary' onClick={fetchNews}>FetchNews</button>
            <button className='btn btn-primary' onClick={d}>FetchNews</button>

          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {
            news.map((value,index) => {
              return (
                <div key={index} className="col-4">
                  <div className="card" style={{ width: "18rem" }}>
                    <img src={value.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.description}</p>
                      <a href="#" className="btn btn-primary">Main</a>
                    </div>
                  </div>
                </div>
              );
            })
          }
        </div>

        <div className='photos'>
          {fetch_image()}
          <img src ={image_path}/>
        </div>

      </div>
    </>
  )
}

export default Gallery;