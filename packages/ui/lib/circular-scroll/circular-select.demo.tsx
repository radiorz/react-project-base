import React, { useState } from 'react';
import { CircularSelect } from './circular-select';

export const CircularSelectDemo: React.FC = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 24,
      }}
    >
      <h3>选择时间</h3>
      <div style={{ display: 'flex', gap: 16 }}>
        <div>
          <div style={{ textAlign: 'center' }}>小时</div>
          <CircularSelect min={0} max={23} value={hour} onChange={setHour} />
        </div>
        <div>
          <div style={{ textAlign: 'center' }}>分钟</div>
          <CircularSelect
            min={0}
            max={59}
            value={minute}
            onChange={setMinute}
          />
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        当前选择：{hour.toString().padStart(2, '0')} :{' '}
        {minute.toString().padStart(2, '0')}
      </div>
    </div>
  );
};

export default CircularSelectDemo;
