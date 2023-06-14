import { Fade } from "react-awesome-reveal";

const MartialArtCard = ({martialArt}) => {
    return (
        <Fade direction="left">
            <div className="card w-96  ">
  <div className="card-body text-center">
    <h2 className="card-title justify-center">{martialArt.form}</h2>
    <p>{martialArt.introduction}</p>
    
  </div>
</div>
        </Fade>
    );
};

export default MartialArtCard;