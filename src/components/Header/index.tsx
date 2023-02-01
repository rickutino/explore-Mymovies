import { FiSearch } from 'react-icons/fi';
import { Input } from '../Input';
import { Container, Profile, Brand, Search } from "./styles";

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>My notes</h1>
      </Brand>

      <Search>
        <Input placeholder="Search by title" icon={FiSearch}/>
      </Search>

      <Profile to="/profile">
        <div>
          <strong>Ricardo Utino</strong>
          <span>Logout</span>
        </div>
        <img src="https://github.com/rickutino.png" alt="User image" />
      </Profile>

    </Container>
  )
}