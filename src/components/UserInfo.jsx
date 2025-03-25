import '../styles/scss/UserInfo.scss';

export default function UserInfo() {
  return (
    <section className='user-info'>
      <img
        src={require('../assets/images/avatar.png')}
        alt='Avatar'
        className='user-info__avatar'
      />
      <h1 className='user-info__name'>Venus Yip</h1>
      <p className='user-info__location'>Essex, United Kingdom</p>
      <p className='user-info__description'>
        Passionate self-taught programmer and avid gamer.
      </p>
    </section>
  );
}
