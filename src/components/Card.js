import { Link } from "react-router-dom"

export const Card = (props) =>{
    return(

        
    <div className="homepagecardheader">
        <Link to={`/offers/${props.info._id}/details`} ><img className="homepagecardimg" src={props.info.picture} alt='nothing'></img></Link>
        <div className="homepagecardbody">
            <p style={{justifyContent:"center", display:"flex"}}>Offer Name:</p>
            <p style={{justifyContent:"center", display:"flex"}}>{props.info.offername} </p>
            {/* <Link to={`/offers/${props.info._id}/details`} style={{justifyContent:"center", display:"flex"}}><button className="submitbuttonedit">Details</button></Link> */}
        </div>
        

    </div>


    )
}


