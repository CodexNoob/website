import "./program.css"
import program1 from "../../assets/program1.png"
import program2 from "../../assets/program2.png"
import program3 from "../../assets/program3.png"
import program_icon_1 from "../../assets/program-icon-1.png";
import program_icon_2 from "../../assets/program-icon-2.png";
import program_icon_3 from "../../assets/program-icon-3.png";

const Programs = () => {
  return (
    <div className='programs' >
        <div className="program">
            <img src={program1} alt=""/>
            <div className="caption">
              <img src={program_icon_1} alt="" />
              <p> ICS </p>
            </div>
                </div>
        <div className='program'>
            <img src={program2} alt=""/>
             <div className="caption">
              <img src={program_icon_2} alt="" />
              <p> ITE </p>
            </div>
                </div>
        <div className='program'>
            <img src={program3} alt=""/>
             <div className="caption">
              <img src={program_icon_3} alt="" />
              <p> IBE </p>
            </div>
                </div>
    </div>
  );
};

export default Programs;