import React, { useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Video() {
    const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState('');

  const videos = [
    {
      id: 'hvXotgxBOvk',
      title: 'Boss: Capra Demon',
    },
    {
      id: 'MmCTJNr10xc',
      title: 'Boss: Ornstein & Smough',
    },
    {
      id: 'VXQuHSi0FqE',
      title: 'Boss: Demon Firesage',
    },
  ];

  const handleOpen = (id) => {
    setVideoId(id);
    setOpen(true);
  };

  return (
    <div>
      <Navbar />    

     {/* <!-- Page Header Start --> */}
    <div class="container-fluid page-header mb-5 p-0" style={{backgroundImage: "url(assets/img/carousel-bg-1.jpg)"}}>
        <div class="container-fluid page-header-inner py-5">
            <div class="container text-center">
                <h1 class="display-3 text-white mb-3 animated slideInDown">Videos</h1>
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb justify-content-center text-uppercase">
                        <li class="breadcrumb-item"><a href="/">Home</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">Videos</li>
                    </ol>
                </nav>
            </div>
        </div>
    </div>
    {/* <!-- Page Header End --> */}

     <div className="container py-5">
      <h3 className="mb-4 text-center">Gallery of YouTube Videos</h3>
      <div className="row">
        {videos.map((video) => (
          <div className="col-sm-4 text-center mb-4" key={video.id}>
            <div
              className="position-relative"
              style={{ cursor: 'pointer' }}
              onClick={() => handleOpen(video.id)}
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                alt={video.title}
                className="img-fluid rounded shadow"
              />
              <button
                type="button"
                className="btn btn-danger position-absolute top-50 start-50 translate-middle"
              >
                <i className="glyphicon glyphicon-play"></i>
              </button>
            </div>
            <p className="mt-2">{video.title}</p>
          </div>
        ))}
      </div>

      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
    </div>

      <Footer />
    </div>
  )
}
