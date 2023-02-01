import { Header } from "../../components/Header";

import { FiPlus } from 'react-icons/fi';
import { Container, Content, NewMovie, Title } from "./styles";
import { Evaluation } from "../../components/Evaluation";

export function Home() {
  return (
    <Container>

      <Header />



      <Content>
        <Title >
          <h2>My List</h2>
          <NewMovie to="/new">
            <FiPlus />
            Add new evaluate
          </NewMovie>
        </Title>
        <Evaluation data={{
          title:"React",
          comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error incidunt et unde assumenda nulla facilis quaerat vero beatae quisquam quam. Rem debitis quam fugiat, laborum provident obcaecati dolor voluptatem mollitia deserunt, recusandae delectus neque ipsum velit blanditiis perferendis repellat, cupiditate esse. Impedit, harum ipsa minima voluptatibus aliquid distinctio commodi corrupti? Aspernatur eaque dicta assumenda cumque tempore et, aut commodi. Impedit, nulla? Saepe, eos enim repudiandae ipsum corporis placeat quasi exercitationem molestias itaque qui. Doloremque voluptas alias atque obcaecati rem quod.",
          tags: [
            { id: "1", title: "React"},
            { id: "2", title: "Javascript"},
            { id: "3", title: "Typescript"},
          ]
        }}/>
      </Content>
      
    </Container>
  )
}