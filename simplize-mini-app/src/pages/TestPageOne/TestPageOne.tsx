import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import MainLayout from '@/layouts/MainLayout';
import { DatePicker, Header, MediaInput, Select, Typography } from 'simplize-component';
import Link from '@/components/Link';

const cx = classNames.bind(styles);

const TestPageOne: React.FC = (): JSX.Element => {
  // const [isOpenBottomsheet, setIsOpenBottomsheet] = React.useState(false);

  const MOCK = [
    {
      value: 0,
      label:
        'Giá hiện tại nhỏ hơn hoặc bằng giá mục tiêu asdawd awd ad awd aweaw dawdaw dawd c',
    },
    {
      value: 1,
      label: 'Giá hiện tại nhỏ hơn hoặc bằng giá mục tiêu',
    },
    {
      value: 2,
      label: 'Giá hiện tại lớn hơn hoặc bằng giá mục tiêu',
    },
    {
      value: 3,
      label: 'Giá cắt lên đường MA',
    },
    {
      value: 4,
      label: 'Giá cắt xuống đường MA',
    },
    {
      value: 5,
      label: 'Giá cắt lên đường EMA',
    },
    {
      value: 6,
      label: 'Giá cắt xuống đường EMA',
    },
    {
      value: Math.random(),
      label: 'Giá cắt xuống đường EMA',
    },
    {
      value: Math.random(),
      label: 'Giá cắt xuống đường EMA',
    },
    {
      value: Math.random(),
      label: 'Giá cắt xuống đường EMA',
    },
    {
      value: Math.random(),
      label: 'Giá cắt xuống đường EMA',
    },
    {
      value: Math.random(),
      label: 'Giá cắt xuống đường EMA',
    },
    {
      value: Math.random(),
      label: 'Giá cắt xuống đường EMA',
    },
    {
      value: Math.random(),
      label: 'Giá cắt xuống đường EMA',
    },
    {
      value: Math.random(),
      label: 'Giá cắt xuống đường EMA',
    },
    {
      value: Math.random(),
      label: 'Giá cắt xuống đường EMA',
    },
    {
      value: Math.random(),
      label: 'Giá cắt xuống đường EMA',
    },
  ];

  return (
    <>
      <MainLayout
        header={
          <Header
            title={'Bottom sheet'}
            contentRight={
              <Link href="/page-2">
                <Typography variant="body_two">Next</Typography>
              </Link>
            }
          />
        }
      >
        <div className={cx('text-demo')}></div>
        <Select
          defaultValue={1}
          options={MOCK}
          header={
            <Typography variant="caption_two" className={cx('title')}>
              Giá cổ phiếu
            </Typography>
          }
          onChange={(e) => {
            console.log(e);
          }}
          onDisable={(e) => {
            console.log('disable', e);
          }}
          location="1/4"
        />
        <DatePicker
          onChange={(e) => {
            console.log(e);
          }}
          defaultValue={new Date()}
          type="datetime"
          isFuture
        />

        <MediaInput
          onFileChange={(file) => {
            console.log(file);
          }}
          type="record video"
        >
          <button
            style={{
              padding: '20px',
            }}
          >
            Click Me
          </button>
        </MediaInput>
      </MainLayout>
    </>
  );
};

export default TestPageOne;
