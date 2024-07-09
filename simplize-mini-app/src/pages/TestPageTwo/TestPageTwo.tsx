import React from 'react';
import { MainLayout, MediaInput } from 'simplize-component';

const TestPageTwo: React.FC = (): JSX.Element => {
  return (
    <MainLayout>
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
  );
};

export default TestPageTwo;
