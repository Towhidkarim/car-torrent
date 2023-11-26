import { CheckboxProps } from '@radix-ui/react-checkbox';
import { useEffect, useState } from 'react';
import { Checkbox } from '../ui/checkbox';
import { useSearchParams } from 'next/navigation';

const LabeledCheckbox = ({
  props,
  title,
  value,
  onCheck,
  onUnCheck,
}: {
  props?: CheckboxProps;
  title: string;
  value: string;
  onCheck?: (value: string) => void;
  onUnCheck?: (value: string) => void;
}) => {
  const params = useSearchParams();
  const available = params.get('category')?.split(',').includes(value);
  const [checked, setChecked] = useState(available);
  const handleCheck = () => {
    setChecked(!checked);
    if (!checked && onCheck !== undefined) onCheck(value);
    else if (onUnCheck !== undefined) onUnCheck(value);
  };

  useEffect(() => {
    setChecked(params.get('category')?.split(',').includes(value));
  }, [params]);

  return (
    <label className='flex items-center justify-start gap-2 cursor-pointer select-none'>
      <Checkbox {...props} onCheckedChange={handleCheck} checked={checked} />
      {title}
    </label>
  );
};
export default LabeledCheckbox;
