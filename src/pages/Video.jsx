import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Video() {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState('');

  const extractVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/.*v=|youtu\.be\/)([^&?/]+)/);
    return match ? match[1] : '';
  };

  const openModal = (url) => {
    const id = extractVideoId(url);
    setVideoId(id);
    setShow(true);
  };

  const closeModal = () => {
    setVideoId('');
    setShow(false);
  };

  // ✅ Now using YouTube links instead of just video IDs
  const videos = [
    { url: 'https://youtu.be/eMBlkjCA298?si=QFn-q6GOKbEtlqWi',},
    { url: 'https://youtu.be/r0O6hv8sApY?si=qrK2-yGft0R1VdsY', },
    { url: 'https://youtu.be/SdvqmxzZkDg?si=COpbKrwZqvU6tg8S', },
        { url: 'https://youtu.be/eMBlkjCA298?si=QFn-q6GOKbEtlqWi', },
    { url: 'https://youtu.be/r0O6hv8sApY?si=qrK2-yGft0R1VdsY', },
    { url: 'https://youtu.be/SdvqmxzZkDg?si=COpbKrwZqvU6tg8S' },
       { url: 'https://youtu.be/eMBlkjCA298?si=QFn-q6GOKbEtlqWi',},
    { url: 'https://youtu.be/r0O6hv8sApY?si=qrK2-yGft0R1VdsY', },
  ];

  return (
    <div>
      <Navbar />

      {/* Page Header */}
      <div className="container-fluid page-header mb-5 p-0" style={{ backgroundImage: "url(assets/img/carousel-bg-1.jpg)" }}>
        <div className="container-fluid page-header-inner py-5">
          <div className="container text-center">
            <h1 className="display-3 text-white mb-3 animated slideInDown">Videos</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb justify-content-center text-uppercase">
                <li className="breadcrumb-item"><a href="/">Home</a></li>
                <li className="breadcrumb-item text-white active" aria-current="page">Videos</li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      {/* Video Gallery */}
      <div className="yt-gallery container">
  <h3 className="yt-title text-center my-4 wow fadeIn"  data-wow-delay="0.1s">Videos Gallery</h3>
  <div className="row wow fadeIn" data-wow-delay="0.1s">
    {videos.map((video, index) => {
      const videoId = extractVideoId(video.url);
      return (
        <div className="col-md-3 mb-3  " key={index} onClick={() => openModal(video.url)}  >
          <div className="yt-card">
            <img
              src={`https://img.youtube.com/vi/${videoId}/mqdefault.jpg`}
              alt={video.title}
              className="yt-thumb img-fluid"
            />
            <div className="yt-overlay">
              <span className="yt-play">▶</span>
            </div>
            <p className="yt-caption text-center">{video.title}</p>
          </div>
        </div>
      );
    })}
  </div>

  {/* Modal */}
  {show && (
    <div className="yt-modal">
      <div className="yt-modal-content">
        <span className="yt-close" onClick={closeModal}>×</span>
        <div className="yt-video-box">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            frameBorder="0"
            allowFullScreen
            title="YouTube Video"
          ></iframe>
        </div>
      </div>
    </div>
  )}
</div>


      <Footer />
    </div>
  );
}
