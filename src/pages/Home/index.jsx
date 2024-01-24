import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import { ping } from '@containers/App/actions';
import PageHeader from '@components/Header';
import SearchField from './components/Search';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ping());
  }, [dispatch]);

  return (
    <div>
      {/* <FormattedMessage id="app_greeting" /> */}
      <PageHeader title='Journey'/>
      <SearchField/>
    </div>
  );
};

export default Home;
