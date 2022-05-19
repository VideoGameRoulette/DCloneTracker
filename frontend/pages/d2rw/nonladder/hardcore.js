import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
  const [current, setCurrent] = useState(1);
  const [status, setStatus] = useState([
    {
      server: 'ladderSoftcoreAsia',
      progress: 1,
      message: 'Terror gazes upon Sanctuary',
      ladder: true,
      hardcore: false,
      region: 'Asia',
      lastReportedBy: {
        uid: '3EZk40IL97hg9B8PCqLm7QtuQl53',
        displayName: 'Sune Schmidt-Hylleborg',
      },
      lastUpdate: {
        seconds: 1652904110,
        nanoseconds: 920000000,
      },
    },
    {
      server: 'ladderSoftcoreAmericas',
      progress: 1,
      message: 'Terror gazes upon Sanctuary',
      ladder: true,
      hardcore: false,
      region: 'Americas',
      lastReportedBy: {
        displayName: 'Marcin Brzezinski',
        uid: '82Avm6XgfKhyHRe7qof4WbjPJSA2',
      },
      lastUpdate: {
        seconds: 1652861470,
        nanoseconds: 1000000,
      },
    },
    {
      server: 'ladderSoftcoreEurope',
      progress: 1,
      message: 'Terror gazes upon Sanctuary',
      ladder: true,
      hardcore: false,
      region: 'Europe',
      lastReportedBy: {
        uid: '2G1CWZt8ycSCjRsC2BXmvRXx9pz1',
        displayName: 'Hodor',
      },
      lastUpdate: {
        seconds: 1652882515,
        nanoseconds: 591000000,
      },
    },
  ]);
  const [seconds, setSeconds] = useState(0);
  const [updateTimer, setUpdateTimer] = useState(0);

  useEffect(async () => {
    if (updateTimer === 60) {
      setUpdateTimer(0);
      const data = await axios.get(`/api/d2rw/nonladder/hardcore`);
      const servers = data.data.data;
      setStatus([...servers]);
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

  return (
    <div className="w-full h-full flex flex-col justify-center items-center uppercase">
      {status.length > 0 && (
        <>
          <div
            key={status[current - 1].region}
            className={`${getColor(status[current - 1].progress)} p-2 rounded-md mr-1 font-bold`}
          >
            {`${status[current - 1].progress} / 6 ${status[current - 1].region} - ${getDate(
              status[current - 1].lastUpdate.seconds,
            )}`}
          </div>
          <div className="w-full h-auto flex justify-center items-center gap-2 text-white">
            {status[current - 1].message}
          </div>
        </>
      )}
    </div>
  );
}
