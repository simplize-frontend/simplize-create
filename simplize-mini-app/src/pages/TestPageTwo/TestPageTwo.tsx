import Link from '@/components/Link';
import MainLayout from '@/layouts/MainLayout';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { BackButton, DatePicker, Header, Typography } from 'simplize-component';

const TestPageTwo: React.FC = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <MainLayout
      header={
        <Header
          title={'Bottom sheet'}
          contentLeft={<BackButton location={location} navigate={navigate} />}
          contentRight={
            <Link href="/">
              <Typography variant="body_two">Prev</Typography>
            </Link>
          }
        />
      }
    >
      <DatePicker
        onChange={(e) => {
          console.log(e);
        }}
        defaultValue={new Date()}
        type="datetime"
        isFuture
      />
    </MainLayout>
  );
};

export default TestPageTwo;
