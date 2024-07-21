import { FC } from "react";
import { IArt } from "../models/IArt";
import { Link } from "react-router-dom";

interface ArtItemProps {
    art: IArt;
  }

const Item: FC<ArtItemProps> = ({ art }:ArtItemProps) => {
    return (
        <>
        <Link to={`/detail/${art.id}`}>
        <p style={{margin: '10px 0'}}>{art.title}</p>
        </Link>
        </>
    )
}
export default Item