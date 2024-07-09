import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { BackButton, Header, MainLayout, Typography } from 'simplize-component';
import Link from '@/components/Link';
import { useLocation, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const TestPageOne: React.FC = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  cx;
  return (
    <>
      <MainLayout
        header={
          <Header
            title={'Bottom sheet'}
            contentLeft={<BackButton location={location} navigate={navigate} />}
            contentRight={
              <Link href="/page-2">
                <Typography variant="body_two">Next</Typography>
              </Link>
            }
          />
        }
      >
        <Typography variant="body_two">Test</Typography>
      </MainLayout>
    </>
  );
};

export default TestPageOne;
