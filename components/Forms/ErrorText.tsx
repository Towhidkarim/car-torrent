import React from 'react';

const ErrorText = ({ errorText }: { errorText?: string }) => {
  return (
    <h1 className='ml-2 font-semibold text-destructive'>{errorText ?? ' '}</h1>
  );
};

export default ErrorText;
