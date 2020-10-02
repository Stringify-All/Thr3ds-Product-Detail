import React from 'react';
import styled from 'styled-components';
import { 
  FacebookShareButton, FacebookIcon,
  TwitterShareButton, TwitterIcon, 
  TumblrShareButton, TumblrIcon, 
  RedditShareButton, RedditIcon } from 'react-share';

const ProductDescription = ({selected, style}) => {
  const url = "https://www.youtube.com/watch?v=siwpn14IE7E";

  const ShareFacebook = () => {
    return (
      <FacebookShareButton
        url={url}
        quote={selected.slogan}
        hashtag="#behygenic"
        className="facebook-share-button">
          <FacebookIcon size={26} round={true}/>
        </FacebookShareButton>
    );
  };
  
  const ShareReddit = () => {
    return (
      <RedditShareButton
        url={url}
        quote={selected.slogan}
        hashtag="#behygenic"
        className="reddit-share-button">
          <RedditIcon size={26} round={true}/>
        </RedditShareButton>
    );
  };

  const ShareTwitter = () => {
    return (
      <TwitterShareButton
        url={url}
        quote={selected.slogan}
        hashtag="#behygenic"
        className="twitter-share-button">
          <TwitterIcon size={26} round={true}/>
        </TwitterShareButton>
    );
  };

  const ShareTumblr = () => {
    return (
      <TumblrShareButton
        url={url}
        quote={selected.slogan}
        hashtag="#behygenic"
        className="tumblr-share-button">
          <TumblrIcon size={26} round={true}/>
        </TumblrShareButton>
    );
  };

  if (style.default_price !== null) {
    return ( 
      <>
        <div class="container">
          <div class="row">
            <div class="col-md-3>">
              {ShareFacebook()} 
            </div>
            <div class="col-md-3>">
              {ShareTwitter()} 
            </div>
            <div class="col-md-3>">
              {ShareReddit()} 
            </div>
            <div class="col-md-3>">
              {ShareTumblr()} 
            </div>
          </div>
        </div>
          <div>* * * * * ratings here</div>
        <div>
          <p><b>Category &gt; </b>{selected.category}</p>
        </div>
        <div> 
          <h3>{selected.name}</h3>
        </div>
        <div>
          <p><b>Current style &gt; </b>{style.name}</p>
        </div>
        <div>
          ${style.original_price}
        </div>
        </>
    );
  } else {
    return (<div>Please select a style</div>);
  }
}

export default ProductDescription;