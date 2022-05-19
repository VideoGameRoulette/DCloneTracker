import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Header from 'components/Header';
import { useTranslation } from 'react-i18next';
import { SectionTitle, SectionDesc, SectionPara, Spacer } from 'components/global';
import * as images from 'components/images';

const sampleData = [
  {
    progress: 1,
    region: 1,
    ladder: 1,
    hc: 2,
    timestamped: 1652897562,
    reporter_id: 74355
  },
  {
    progress: 3,
    region: 2,
    ladder: 1,
    hc: 2,
    timestamped: 1652906250,
    reporter_id: 76875
  },
  {
    progress: 5,
    region: 3,
    ladder: 1,
    hc: 2,
    timestamped: 1652897606,
    reporter_id: 76875
  }
];

const sampleData2 = [
  {
    server: 'ladderSoftcoreAsia',
    progress: 1,
    message: 'Terror gazes upon Sanctuary',
    ladder: true,
    hardcore: false,
    region: 'Asia',
    lastReportedBy: {
      uid: '3EZk40IL97hg9B8PCqLm7QtuQl53',
      displayName: 'Sune Schmidt-Hylleborg'
    },
    lastUpdate: {
      seconds: 1652904110,
      nanoseconds: 920000000
    }
  },
  {
    server: 'ladderSoftcoreAmericas',
    progress: 3,
    message: 'Terror begins to form within Sanctuary',
    ladder: true,
    hardcore: false,
    region: 'Americas',
    lastReportedBy: {
      displayName: 'Marcin Brzezinski',
      uid: '82Avm6XgfKhyHRe7qof4WbjPJSA2'
    },
    lastUpdate: {
      seconds: 1652861470,
      nanoseconds: 1000000
    }
  },
  {
    server: 'ladderSoftcoreEurope',
    progress: 5,
    message: 'Terror is about to be unleashed upon Sanctuary',
    ladder: true,
    hardcore: false,
    region: 'Europe',
    lastReportedBy: {
      uid: '2G1CWZt8ycSCjRsC2BXmvRXx9pz1',
      displayName: 'Hodor'
    },
    lastUpdate: {
      seconds: 1652882515,
      nanoseconds: 591000000
    }
  }
];

export default function Home() {
  const [current, setCurrent] = useState(1);
  const [seconds, setSeconds] = useState(0);
  const { t } = useTranslation(['home']);

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
      case 3:
        return "text-yellow-800 border-yellow-500 border-2 bg-yellow-200";
      case 4:
      case 5:
      case 6:
        return "text-green-800 border-green-500 border-2 bg-green-200";
      default:
        return "text-red-800 border-red-500 border-2 bg-red-200";
    }
  }

  const getDate = timestamp => {
    const date = new Date(timestamp * 1000);
    var hours = date.getHours();
    var h = hours > 12 ? hours - 12 : hours;
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();
    var ampm = hours > 12 ? "pm" : "am";
    var formattedTime = `${date.toLocaleDateString("en-US")} ${h}:${minutes.substr(-2)}:${seconds.substr(-2)} ${ampm.toUpperCase()}`;
    return formattedTime;
  }
  const regions = ["None", "Americas", "Europe", "Asia"];

  return (
    <div className="dark w-full h-full uppercase">
      <div className="w-screen h-screen grid grid-cols-1 grid-rows-[98.5px_auto]">
        <div className="w-screen h-auto">
          <Header />
        </div>
        <div
          className={`bg-welcome bg-cover w-screen h-auto overflow-x-hidden overflow-y-auto`}
        >
          <Spacer />
          <div className="md:container mx-auto w-full h-auto">
            <div className="h-auto md:mx-10 mx-3 flex flex-col justify-center items-center rounded-2xl ">
              <div className="w-full h-[82vh] bg-[rgba(0,0,0,0.8)] mt-4 flex flex-col justify-center items-center rounded-2xl py-8 border border-zinc-700">
                <SectionTitle title={t('welcome.title')} align="text-center" />
                <Spacer />
                <SectionDesc title={t('welcome.description')} align="text-center" />
                <Spacer />
                <SectionTitle title={t('welcome.example')} align="text-center" />
                <div className="w-full h-auto flex justify-between items-center">
                  <div className="w-1/2 mt-4 flex flex-col justify-center items-center rounded-2xl py-8">
                    <SectionTitle title={t('welcome.d2io')} align="text-center" />
                    <Spacer />
                    <div
                      key={sampleData[current - 1].region}
                      className={`${getColor(sampleData[current - 1].progress)} p-2 rounded-md mr-1 font-bold`}
                    >
                      {`${sampleData[current - 1].progress} / 6 ${regions[sampleData[current - 1].region]} - ${getDate(sampleData[current - 1].timestamped)}`}
                    </div>
                    <Link
                      href="https://diablo2.io/"
                      passHref
                    >
                      <a>
                        <div className="w-auto h-auto flex justify-center items-center gap-2 text-white bg-zinc-900 p-4 rounded-md mt-1">
                          {t('d2io.cta')}<img src="https://diablo2.io/styles/zulu/theme/images/ui/tinylog.webp"></img>{t('d2io.url')}
                        </div>
                      </a>
                    </Link>
                  </div>
                  <div className="w-1/2 mt-4 flex flex-col justify-center items-center rounded-2xl py-8">
                    <SectionTitle title={t('welcome.d2rw')} align="text-center" />
                    <Spacer />
                    <div
                      key={sampleData2[current - 1].region}
                      className={`${getColor(sampleData2[current - 1].progress)} p-2 rounded-md mr-1 font-bold`}
                    >
                      {`${sampleData2[current - 1].progress} / 6 ${sampleData2[current - 1].region} - ${getDate(sampleData2[current - 1].lastUpdate.seconds)}`}
                    </div>
                    <div className="w-full h-auto flex justify-center items-center gap-2 text-white">
                      {sampleData2[current - 1].message}
                    </div>
                    <Link
                      href="https://d2runewizard.com/"
                      passHref
                    >
                      <a>
                        <div className="w-auto h-auto flex justify-center items-center gap-2 text-white bg-zinc-900 p-4 rounded-md">
                          {t('d2rw.cta')}<div className="w-4 flex justify-center"><images.RuneWizardIcon /></div>{t('d2rw.url')}
                        </div>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
