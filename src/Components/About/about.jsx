import './about.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
        <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className='play-icon' onClick={()=>setPlayState(true)}/>
    </div>
    <div className="about-right">
    <h3> ABOUT CDM </h3>
    <h2> Nurturing Tomorrows Leaders Today</h2>
    <p>Lorem ipsum dolor sit amet. Qui nobis sint ut quae minus eum architecto sunt a autem saepe et error consequuntur hic ipsam esse ea ratione aliquid. Non consequuntur recusandae sit obcaecati eligendi ut internos voluptates est totam quia aut similique ducimus ut quos corporis non quia necessitatibus. Ut ducimus consequatur et numquam esse qui quia reprehenderit aut quod optio ut assumenda modi ut enim vero nam ducimus quibusdam.</p>
<p>Hic dolorum repudiandae non vero praesentium ut aliquid tempore non eaque rerum aut exercitationem iure 33 alias vero est accusantium tempora. Aut quis labore id recusandae dolor ut labore eius aut consequatur nihil ad maiores cumque qui optio voluptas aut velit asperiores.</p>
<p>Aut voluptatem officia qui incidunt tempore aut dolores corporis et optio totam quo quia deserunt. Non dolore debitis aut rerum commodi ad dolor aperiam est delectus exercitationem et similique repellendus est quaerat galisum. Est labore commodi id modi explicabo et dolores itaque non sint repudiandae est repudiandae sequi 33 dolorem vitae est voluptatibus aliquid?</p>
    </div>
    </div>
  );
};

export default About;