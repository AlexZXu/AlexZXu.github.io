
import "../styles/navbar.css"
import { BiLogoInstagramAlt } from "react-icons/bi";
import { IoIosMenu } from "react-icons/io";
import { useState } from "react";
import { useRef } from "react"
import image from "./../../public/logo.svg"
import useOutsideClick from "./useOutsideClick";
import { IoClose } from "react-icons/io5";

export default function TransparentNavbar({type}) {
  console.log(type)
  const [linkMenuOpen, setLinkMenuOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(0);

  function toggleSelection(selId) {
    if (selectedType == selId) {
      setSelectedType(0);
    }
    else {
      setSelectedType(selId)
    }
  }

  const linkType = (type=="transparent") ? "link" : "link-black"
  const arrowType = (type=="transparent") ? "down-arrow" : "down-arrow-black"
  const instagramType = (type=="transparent") ? "instagram-icon" : "instagram-icon-black"
  const hamburgerType = (type=="transparent") ? "link-hamburger-button" : "link-hamburger-button-black"

  return (
    <>
      <div className={`${type=="transparent" ? "transparent-navbar-container" : "flat-navbar-container"}`}>
        <a href="/">
          <img src={image.src} className="navbar-logo" alt="logo" />
        </a>

        <div className="link-container">
          <div className="dropdown forms-dropdown">
            <div className={linkType}>FORMS AND PAYMENTS<span className={arrowType}><svg width="9" height="9" viewBox="0 0 15 15"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path></svg></span></div>
            <div className="dropdown-content forms-content">
              <a>Membership Form</a>
              <a>Membership Dues</a>
            </div>
          </div>

          <div className="dropdown events-dropdown">
            <div className={linkType}>EVENTS<span className={arrowType}><svg width="9" height="9" viewBox="0 0 15 15"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path></svg></span></div>
            <div className="dropdown-content events-content">
              <a href="/rlc/">Region Leadership Conference</a>
              <a>Membership Dues</a>
            </div>
          </div>

          <div className="dropdown about-dropdown">
            <div className={linkType}>ABOUT US<span className={arrowType}><svg width="9" height="9" viewBox="0 0 15 15"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path></svg></span></div>
            <div className="dropdown-content about-content">
              <a>Membership Form</a>
              <a>Membership Dues</a>
            </div>
          </div>

          <div className="dropdown resources-dropdown">
            <div className={linkType}>RESOURCES<span className={arrowType}><svg width="9" height="9" viewBox="0 0 15 15"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path></svg></span></div>
            <div className="dropdown-content-left resources-content">
              <a>Membership Form</a>
              <a>Membership Dues</a>
            </div>
          </div>

          <div className="instagram-link">
            <a className={instagramType} href="https://www.instagram.com/jchsfbla/?hl=en" target="_blank"><BiLogoInstagramAlt /></a>
          </div>
        </div>




        <div className="link-hamburger-button-container">
          <button className={hamburgerType} onClick={() => {setLinkMenuOpen(true)}}><IoIosMenu /></button>
        </div>
      </div>

      {
      linkMenuOpen &&
      <div className="link-menu-background">
        <div className="dead-zone" onClick={() => {setLinkMenuOpen(false)}}>

        </div>
        <div className="link-menu-container">
          <div className="menu-close" onClick={() => {setLinkMenuOpen(false)}}>
            <IoClose />
          </div>
          <div className="menu-link" onClick={() => {toggleSelection(1)}}>FORMS AND PAYMENTS<span className="menu-down-arrow"><svg width="14" height="14" viewBox="0 0 15 15"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path></svg></span></div>
          <div className="menu-link-dropdown" style={{display: (selectedType == 1) ? "flex" : "none"}}>
            <a>Membership Form</a>
            <a>Membership Dues</a>
          </div>
          <div className="menu-link" onClick={() => {toggleSelection(2)}}>EVENTS<span className="menu-down-arrow"><svg width="14" height="14" viewBox="0 0 15 15"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path></svg></span></div>
          <div className="menu-link-dropdown" style={{display: (selectedType == 2) ? "flex" : "none"}}>
            <a href="/rlc/">Region Leadership Conference</a>
            <a>Membership Dues</a>
          </div>
          <div className="menu-link" onClick={() => {toggleSelection(3)}}>ABOUT US<span className="menu-down-arrow"><svg width="14" height="14" viewBox="0 0 15 15"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path></svg></span></div>
          <div className="menu-link-dropdown" style={{display: (selectedType == 3) ? "flex" : "none"}}>
            <a>Membership Form</a>
            <a>Membership Dues</a>
          </div>
          <div className="menu-link" onClick={() => {toggleSelection(4)}}>RESOURCES<span className="menu-down-arrow"><svg width="14" height="14" viewBox="0 0 15 15"><path d="M2.1,3.2l5.4,5.4l5.4-5.4L15,4.3l-7.5,7.5L0,4.3L2.1,3.2z"></path></svg></span></div>
          <div className="menu-link-dropdown" style={{display: (selectedType == 4) ? "flex" : "none"}}>
            <a>Membership Form</a>
            <a>Membership Dues</a>
          </div>
        </div>
      </div>
      }
    </>
  )


}
