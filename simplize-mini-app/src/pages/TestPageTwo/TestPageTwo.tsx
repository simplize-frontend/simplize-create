import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import MainLayout from '@/layouts/MainLayout';
import { BackButton, Header } from 'simplize-component';
import { useLocation, useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

const TestPageTwo: React.FC = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <>
      <MainLayout
        header={
          <Header
            contentLeft={<BackButton location={location} navigate={navigate} />}
          />
        }
      >
        <div className={cx('text-demo')}></div>
      </MainLayout>
    </>
  );
};

export default TestPageTwo;
