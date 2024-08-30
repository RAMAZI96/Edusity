import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonials = (props) => {
  const slider = useRef();
 let tx = 0;
  const slideForward = ()=>{
if (tx > -50){
  tx -= 25;
}
slider.current.style.transform = `translateX(${tx}%)`;
  }
  const slideBackrward = ()=>{
    if (tx < 0){
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;

  }
  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img src={back_icon} alt="" className="back-btn" onClick={slideBackrward} />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>kseniya Gogitidze</h3>
                  <span> Kobuleti Georgia</span>
                </div>
              </div>
              <p>
              Each college is independent and self-governing, having a charter
                approved by the Privy Council, under which it is governed by a
                Head of House, elected and appointed by the governing body
                directly.
              </p>
            </div>
          </li>
          <li> 
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Ramazi Gogitidze</h3>
                  <span>Kobuleti, Georgia</span>
                </div>
              </div>
              <p>
              The three societies – Kellogg College, Reuben College
               and St Cross College – operate very much like the other
                colleges but are considered 
               of the University rather than independent colleges because, 
             
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Nato Gogitidze</h3>
                  <span>Kobuleti, Georgia</span>
                </div>
              </div>
              <p>
              There are also four permanent private halls,
              which were founded by different Christian denominations,
               and still retain their religious character today.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Miriani gogitidze</h3>
                  <span>kobuleti, Georgia</span>
                </div>
              </div>
              <p>
              Undergraduates are admitted to 32 of the
               colleges and permanent private halls. All colleges
               accept applications from mature students, while Harris 
               Manchester College is solely for mature students.
              </p>
            </div>
          </li>

        </ul>
      </div>
    </div>
  )
}


export default Testimonials
