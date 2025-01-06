import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import "./Team.css"



const Team = () => {
  return (
    <div className="Team">
      <h3 className='Teams'>Game<span className="teams">S</span>potter Team</h3>
      <h2 className="--Team-best">Meet Our Team</h2>

      <div className="--Team-">

        <div className="--Team-hosts slideOne">
          <img src="https://images.unsplash.com/photo-1718471472310-77a63c5fad95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDB8fHxlbnwwfHx8fHw%3D" alt="" />

          <div className="--Team-bayz">
            <img src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622021.jpg" alt="" />
            <div className="--Team-details">
              <h3>Abdulakeem Adebayo</h3>
              <p>Founder</p>
              <div style={{ marginTop: "10px", gap: "10px" }}>
                <a href="https://x.com/AkeemAd28605307"><FaXTwitter color="black" size={25} style={{ marginRight: '10px' }} /></a>
                <a href="https://www.linkedin.com/in/abdulakeem-adebayo-678530199"><FaLinkedin color="blue" size={25} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* second */}

        <div className="--Team-hosts slideTwo">
          <img src="https://images.unsplash.com/photo-1716278518129-3d803cc2460b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D" alt="" />

          <div className="--Team-bayz">
            <img src="https://cdn.pixabay.com/photo/2022/01/17/17/20/bored-6945309_640.png" alt="" />
            <div className="--Team-details">
              <h3>Hoàng Nguyễn</h3>
              <p>Head of Technology</p>
              <div style={{ marginTop: "10px", gap: "10px" }}>
                <a href="https://x.com/HoangNguyen0299"><FaXTwitter color="black" size={25} style={{ marginRight: '10px' }} /></a>
                <a href="https://www.linkedin.com/in/ho%C3%A0ng-nguy%E1%BB%85n-v%C4%83n-0a6771225"><FaLinkedin color="blue" size={25} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* second */}

        <div className="--Team-hosts slideThree">
          <img src="https://images.unsplash.com/photo-1716278518129-3d803cc2460b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D" alt="" />

          <div className="--Team-bayz">
            <img src="https://cdn.prod.www.spiegel.de/images/d2caafb1-70da-47e2-ba48-efd66565cde1_w1024_r0.9975262832405689_fpx44.98_fpy48.86.jpg" alt="" />
            <div className="--Team-details">
              <h3>Kaushik</h3>
              <p>Head of Design</p>
              <div style={{ marginTop: "10px", gap: "10px" }}>
                <a href=""><FaXTwitter color="black" size={25} style={{ marginRight: '10px' }} /></a>
                <a href=""><FaLinkedin color="blue" size={25} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* second */}


        <div className="--Team-hosts slideThree">
          <img src="https://images.unsplash.com/photo-1716278518129-3d803cc2460b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D" alt="" />

          <div className="--Team-bayz">
            <img src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149622040.jpg" alt="" />
            <div className="--Team-details">
              <h3>Lateef Aminu</h3>
              <p>Blockchain Analyst </p>
              <div style={{ marginTop: "10px", gap: "10px" }}>
                <a href="https://x.com/__lareal"><FaXTwitter color="black" size={25} style={{ marginRight: '10px' }} /></a>
                <a href="https://www.linkedin.com/in/lateef-a-b85b1725b"><FaLinkedin color="blue" size={25} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* second */}

        <div className="--Team-hosts slideFour">
          <img src="https://images.unsplash.com/photo-1716278518129-3d803cc2460b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D" alt="" />

          <div className="--Team-bayz">
            <img src="https://img.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_23-2149619499.jpg" alt="" />
            <div className="--Team-details">
              <h3>Hardik Kumar</h3>
              <p>Head of Operations </p>
              <div style={{ marginTop: "10px", gap: "10px" }}>
                <a href="https://x.com/hardikkumar601?t=ota6uo4YyzdKDoIWH_oqEA&s=08"><FaXTwitter color="black" size={25} style={{ marginRight: '10px' }} /></a>
                <a href="https://www.linkedin.com/in/hardik-kumar-a4954622a"><FaLinkedin color="blue" size={25} /></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Team;
