import { FiStar } from "react-icons/fi";
import { Container } from "./styles";

interface IStarProps {
  rating: number,
  isStar: boolean;
}

const starArray = [...Array(5).keys()].map(i => i + 1);

export function Star({ rating = 4 }: IStarProps ) {
  return (
      <Container>
        {starArray.map((i) => (
            rating >= i 
            ? <FiStar key={i} className="checked"/>
            : <FiStar key={i} />
          )
        )}
      </Container>
  )
}