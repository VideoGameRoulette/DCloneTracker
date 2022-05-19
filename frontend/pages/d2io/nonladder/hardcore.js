import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useTranslation } from 'react-i18next';

export default function Home() {
  const [current, setCurrent] = useState(1);
  const [status, setStatus] = useState([
    {
      progress: 1,
      region: 1,
      ladder: 1,
      hc: 2,
      timestamped: 1652897562,
      reporter_id: 74355,
    },
    {
      progress: 1,
      region: 2,
      ladder: 1,
      hc: 2,
      timestamped: 1652906250,
      reporter_id: 76875,
    },
    {
      progress: 1,
      region: 3,
      ladder: 1,
      hc: 2,
      timestamped: 1652897606,
      reporter_id: 76875,
    },
  ]);
  const [seconds, setSeconds] = useState(0);
  const [updateTimer, setUpdateTimer] = useState(0);
  const { t } = useTranslation(['home']);

  useEffect(async () => {
    if (updateTimer === 60) {
      setUpdateTimer(0);
      const { data } = await axios.get(`/api/d2io/nonladder/hardcore`);
      setStatus(data.data);
    }
    const update = setTimeout(() => {
      setUpdateTimer(updateTimer + 1);
    }, 1000);
    return () => clearTimeout(update);
  }, [updateTimer]);

  useEffect(() => {
    if (seconds === 3) {
      setSeconds(0);
      if (current === 3) setCurrent(1);
      else setCurrent(current + 1);
    }
    const timer = setTimeout(() => {
      setSeconds(seconds + 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [seconds]);

  const getColor = num => {
    switch (num) {
      case '3':
        return 'text-yellow-800 border-yellow-500 border-2 bg-yellow-200';
      case '4':
      case '5':
      case '6':
        return 'text-green-800 border-green-500 border-2 bg-green-200';
      default:
        return 'text-red-800 border-red-500 border-2 bg-red-200';
    }
  };

  const getDate = timestamp => {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const h = hours > 12 ? hours - 12 : hours;
    const minutes = `0${date.getMinutes()}`;
    const secs = `0${date.getSeconds()}`;
    const ampm = hours > 12 ? 'pm' : 'am';
    const formattedTime = `${date.toLocaleDateString('en-US')} ${h}:${minutes.substr(
      -2,
    )}:${secs.substr(-2)} ${ampm.toUpperCase()}`;
    return formattedTime;
  };
  const regions = ['None', 'Americas', 'Europe', 'Asia'];

  return (
    <div className="w-full h-full flex flex-col justify-center items-center uppercase">
      {status.length > 0 && (
        <div
          key={status[current - 1].region}
          className={`${getColor(status[current - 1].progress)} p-2 rounded-md mr-1 font-bold`}
        >
          {`${status[current - 1].progress} / 6 ${regions[status[current - 1].region]} - ${getDate(
            status[current - 1].timestamped,
          )}`}
        </div>
      )}
      <div className="w-full h-auto flex justify-center items-center gap-2 text-white">
        {t('d2io.cta')}
        <Image width={20} height={20} src="/img/d2io.webp" alt="d2io logo" />
        {t('d2io.url')}
      </div>
    </div>
  );
}
