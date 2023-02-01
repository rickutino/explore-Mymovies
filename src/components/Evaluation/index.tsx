import { Star } from "../Star";
import { Tag } from "../Tag";
import { Container } from "./styles";

interface Tag {
  id: string;
  title: string;
}

interface IEvaluationProps {
  data: {
    title: string;
    comment: string;
    tags: Tag[];
  }
}

export function Evaluation({ data, ...rest }: IEvaluationProps) {
  const { title, comment, tags } = data;

  return (
    <Container {...rest} >
      <>
        <h1>{title}</h1>

        <Star />

        <p>{comment}</p>

        { tags && 
          <footer>
            {tags.map( tag => <Tag key={tag.id} title={tag.title} />)}
          </footer>
        }
      </>
    </Container>
  )
}