import { NavLink } from "react-router-dom";
const CardComponent = (props) => {

    return (

        <div className="container mb-4">
            <div className="row">
                <div className="col-12 blured cardComponent">
                    <div className="img">
                        <NavLink to={props.to}><img class="project-image" src={props.img} alt="Card" /></NavLink>
                    </div>
                    <div className="cardComponentBody">
                        <h3 className="black title">{props.title}</h3>
                        <NavLink to={props.to} className="black link">Details</NavLink>
                        <p >{props.notification}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardComponent;