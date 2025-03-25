import './styles/reset.css';
import UserInfo from './components/UserInfo';
import Links from './components/Links';

export default function App() {
  return (
    <div className='card'>
      <UserInfo />
      <Links />
    </div>
  );
}
