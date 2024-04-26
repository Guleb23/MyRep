import React, {useEffect, useState, }from "react";
import APIKit from "../../spotify";
import Card from "./card";
import { IconContext } from "react-icons";
import { AiFillPlayCircle } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import './trend.css';

export default function Trending() {
  const [artists, setArtists] = useState(null);
  useEffect(() => {
    APIKit.get("/me/following?type=artist").then(function (response) {
      setArtists(response.data.artists.items);
    });
  }, []);
  
  
  return (
    <div className="screen-container">
    <div className="library-body">
      {artists?.map((artist) => (
        <div
          className="playlist-card"
          key={artist.id}
          onClick={() => {
            window.open(artist.external_urls.spotify);
          }}
         
        >
          <img
            src={artist.images[0].url}
            className="playlist-image"
            alt="Playlist-Art"
          />
          <p className="playlist-title">{artist.name}</p>
          <p className="playlist-subtitle">{artist.followers.total} followers</p>
        </div>
      ))}
    </div>
  </div>
  );
}
