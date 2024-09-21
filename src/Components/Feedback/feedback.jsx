import './feedback.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'
import { useRef } from 'react'
const Feedback = () => {

    const slider = useRef();
        let tx = 0;

    const slideForward = ()=>{
       if(tx > - 50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }
    const slideBackward = ()=>{
         if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

  return (
    <div className='feedback'>
       <img src={next_icon} alt="" className='next_btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back_btn' onClick={slideBackward}/>
        <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user1} alt="" />
                        <div>
                            <h3> Riiz Laguipo </h3>
                            <span> Tabak, San Rafael </span>
                        </div>
                    </div>
                    <p> Choosing to pursue my degree at CDM was one of the best decisions I made. The supportive community, facilities and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
             <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user2} alt="" />
                        <div>
                            <h3> Charles Duot </h3>
                            <span> Tabak, San Rafael </span>
                        </div>
                    </div>
                    <p> Choosing to pursue my degree at CDM was one of the best decisions I made. The supportive community, facilities and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
             <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user3} alt="" />
                        <div>
                            <h3> Randy Flores </h3>
                            <span> Tabak, San Rafael </span>
                        </div>
                    </div>
                    <p> Choosing to pursue my degree at CDM was one of the best decisions I made. The supportive community, facilities and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
             <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user4} alt="" />
                        <div>
                            <h3> Martin Tina </h3>
                            <span> Tabak, San Rafael </span>
                        </div>
                    </div>
                    <p> Choosing to pursue my degree at CDM was one of the best decisions I made. The supportive community, facilities and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
        </ul>
    </div>
    </div>
  );
};

export default Feedback;