import Navigation from '@components/Navigation';

import style from './style.module.scss';

const Jumbotron = () => {
  return (
    <div className={style.banner}>
      <Navigation/>
      <div className={style.container}>
        <p className={style.jumbotronTitle}>The Journey<br></br>you ever dreamed of.</p>
        <p className={style.jumbotronSubtitle}>We made a tool so you can easily keep & share you travel memories.<br></br>But there is a lot more</p>
      </div>
    </div>
  );
};


export default Jumbotron;
