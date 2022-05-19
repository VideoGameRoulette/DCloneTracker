import React, { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/outline';
// import { MenuIcon, ChevronDownIcon } from '@heroicons/react/outline';
import * as styles from 'components/global/styles';
import * as images from 'components/images';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const GetLogo = r => {
  const router = r;
  return (
    <div className="cursor-pointer md:mr-12 mr-16" onClick={() => router.push('/')}>
      <span className="sr-only">Logo</span>
      <div className="text-leet dark:text-white w-16 h-16 bg-dclone bg-cover" />
    </div>
  );
};

const RenderIcons = item => {
  const { icon2 } = item;
  if (icon2 !== null)
    return (
      <>
        <item.icon />
        <item.icon2 />
      </>
    );
  return (
    <div className="w-8 h-8 flex justify-center items-center">
      <item.icon />
    </div>
  );
};

const Header = () => {
  const router = useRouter();
  const { t } = useTranslation(['home']);

  const d2ioNav = [
    {
      name: 'ladder.softcore',
      description: '',
      href: '/d2io/ladder/softcore',
      icon: images.LadderIcon,
      icon2: null,
    },
    {
      name: 'ladder.hardcore',
      description: '',
      href: '/d2io/ladder/hardcore',
      icon: images.LadderIcon,
      icon2: images.SkullIcon,
    },
    {
      name: 'nonladder.softcore',
      description: '',
      href: '/d2io/nonladder/softcore',
      icon: images.NonLadderIcon,
      icon2: null,
    },
    {
      name: 'nonladder.hardcore',
      description: '',
      href: '/d2io/nonladder/hardcore',
      icon: images.NonLadderIcon,
      icon2: images.SkullIcon,
    },
  ];

  const d2rwNav = [
    {
      name: 'ladder.softcore',
      description: '',
      href: '/d2rw/ladder/softcore',
      icon: images.LadderIcon,
      icon2: null,
    },
    {
      name: 'ladder.hardcore',
      description: '',
      href: '/d2rw/ladder/hardcore',
      icon: images.LadderIcon,
      icon2: images.SkullIcon,
    },
    {
      name: 'nonladder.softcore',
      description: '',
      href: '/d2rw/nonladder/softcore',
      icon: images.NonLadderIcon,
      icon2: null,
    },
    {
      name: 'nonladder.hardcore',
      description: '',
      href: '/d2rw/nonladder/hardcore',
      icon: images.NonLadderIcon,
      icon2: images.SkullIcon,
    },
  ];

  const mediaNav = [
    {
      name: 'media.twitter.title',
      description: 'media.twitter.description',
      href: 'https://twitter.com/VGRoulette',
      icon: images.TwitterIcon,
    },
    {
      name: 'media.github.title',
      description: t('media.github.description'),
      href: 'https://github.com/VideoGameRoulette',
      icon: images.SRCIcon,
    },
  ];

  const mediaSubNav = [
    {
      name: 'media.twitch.title',
      href: 'https://www.twitch.tv/videogameroulette',
      icon: images.TwitchIcon,
    },
    {
      name: 'media.youtube.title',
      href: 'https://www.youtube.com/channel/UCEQbsGUYuqh9cwXFiF1CKLQ',
      icon: images.YouTubeIcon,
    },
  ];

  const languageNav = [
    {
      name: 'language.english',
      code: 'en',
    },
    {
      name: 'language.french',
      code: 'fr',
    },
  ];

  return (
    <Popover className="relative bg-zinc-900 z-40 shadow-md">
      <div className="md:container w-full mx-auto px-4 sm:px-6">
        <div className="w-full flex justify-between items-center py-6 md:space-x-10">
          <div className="flex justify-start items-center">
            {GetLogo(router)}
            <Popover.Group as="nav" className="flex space-x-10">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open
                          ? `bg-zinc-700 ${styles.textColorHeader}`
                          : `bg-zinc-900 ${styles.textColorHeader}`,
                        'uppercase group rounded-md inline-flex items-center text-base font-medium hover:opacity-80 p-2',
                      )}
                    >
                      <span>d2io</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? `${styles.textColorHeader}` : `${styles.textColorHeader}`,
                          'ml-2 h-5 w-5 group-hover:text-gray-500',
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="uppercase relative grid gap-6 bg-zinc-800 px-5 py-6 sm:gap-8 sm:p-8">
                            {d2ioNav.map(item => (
                              <Link key={item.name} href={item.href} passHref>
                                <a
                                  className={`${styles.textColorHeader} bg-zinc-800 ${styles.colorHover} cursor-pointer p-3 flex justify-start items-center rounded-md`}
                                >
                                  <div
                                    className={`${styles.textColorHeader} w-16 h-16 flex justify-center items-center gap-1`}
                                  >
                                    {RenderIcons(item)}
                                  </div>

                                  <div className="ml-4 flex flex-col items-start">
                                    <p className="text-base font-medium">{t(item.name)}</p>
                                    <p className={`mt-1 text-sm ${styles.textColorDescription}`}>
                                      {t(item.description)}
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            ))}
                          </div>
                          <div className="uppercase px-5 py-5 bg-zinc-900 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            <Link href="https://diablo2.io" passHref>
                              <a className="w-full h-auto flex flex-row justify-center items-center gap-2 text-white">
                                {t('d2io.cta')}
                                <Image
                                  width={20}
                                  height={20}
                                  src="/img/d2io.webp"
                                  alt="d2io logo"
                                />
                                {t('d2io.url')}
                              </a>
                            </Link>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open
                          ? `bg-zinc-700 ${styles.textColorHeader}`
                          : `bg-zinc-900 ${styles.textColorHeader}`,
                        'uppercase group rounded-md inline-flex items-center text-base font-medium hover:opacity-80 p-2',
                      )}
                    >
                      <span>d2rw</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? `${styles.textColorHeader}` : `${styles.textColorHeader}`,
                          'ml-2 h-5 w-5 group-hover:text-gray-500',
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="uppercase relative grid gap-6 bg-zinc-800 px-5 py-6 sm:gap-8 sm:p-8">
                            {d2rwNav.map(item => (
                              <Link key={item.name} href={item.href} passHref>
                                <a
                                  className={`${styles.textColorHeader} bg-zinc-800 ${styles.colorHover} cursor-pointer p-3 flex justify-start items-center rounded-md`}
                                >
                                  <div
                                    className={`${styles.textColorHeader} w-16 h-16 flex justify-center items-center gap-1`}
                                  >
                                    {RenderIcons(item)}
                                  </div>

                                  <div className="ml-4 flex flex-col items-start">
                                    <p className="text-base font-medium">{t(item.name)}</p>
                                    <p className={`mt-1 text-sm ${styles.textColorDescription}`}>
                                      {t(item.description)}
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            ))}
                          </div>
                          <div className="uppercase px-5 py-5 bg-zinc-900 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            <Link href="https://d2runewizard.com" passHref>
                              <a className="w-full h-auto flex flex-row justify-center items-center gap-2 text-white">
                                {t('d2rw.cta')}
                                <div className="w-4 flex justify-center">
                                  <images.RuneWizardIcon />
                                </div>
                                {t('d2rw.url')}
                              </a>
                            </Link>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open
                          ? `bg-zinc-700 ${styles.textColorHeader}`
                          : `bg-zinc-900 ${styles.textColorHeader}`,
                        'uppercase group rounded-md inline-flex items-center text-base font-medium hover:opacity-80 p-2',
                      )}
                    >
                      <span>{t('media.title')}</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? `${styles.textColorHeader}` : `${styles.textColorHeader}`,
                          'ml-2 h-5 w-5 group-hover:text-gray-500',
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="uppercase relative grid gap-6 bg-zinc-800 px-5 py-6 sm:gap-8 sm:p-8">
                            {mediaNav.map(item => (
                              <Link key={item.name} href={item.href} passHref>
                                <a
                                  className={`${styles.textColorHeader} bg-zinc-800 ${styles.colorHover} cursor-pointer p-3 flex justify-start items-center rounded-md`}
                                >
                                  <div
                                    className={`${styles.textColorHeader} w-16 h-16 flex justify-center items-center gap-1`}
                                  >
                                    <div className="w-8 h-8 flex justify-center items-center">
                                      <item.icon />
                                    </div>
                                  </div>

                                  <div className="ml-4 flex flex-col items-start">
                                    <p className="text-base font-bold">{t(item.name)}</p>
                                    <p className={`mt-1 text-sm ${styles.textColorDescription}`}>
                                      {t(item.description)}
                                    </p>
                                  </div>
                                </a>
                              </Link>
                            ))}
                          </div>
                          <div className="uppercase px-5 py-5 bg-zinc-900 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {mediaSubNav.map(item => (
                              <Link key={item.name} href={item.href} passHref>
                                <a
                                  className={`${styles.textColorHeader} bg-zinc-800 ${styles.colorHover} cursor-pointer p-3 flex justify-start items-center rounded-md gap-2`}
                                >
                                  <div
                                    className={`${styles.textColorHeader} w-8 h-8 flex justify-center items-center gap-1`}
                                  >
                                    <div className="w-8 h-8 flex justify-center items-center">
                                      <item.icon />
                                    </div>
                                  </div>

                                  <div className="mx-2 flex flex-col items-start">
                                    <p className="text-base font-bold">{t(item.name)}</p>
                                  </div>
                                </a>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open
                          ? `bg-zinc-700 ${styles.textColorHeader}`
                          : `bg-zinc-900 ${styles.textColorHeader}`,
                        'uppercase group rounded-md inline-flex items-center text-base font-medium hover:opacity-80 p-2',
                      )}
                    >
                      <span>{t('language.title')}</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? `${styles.textColorHeader}` : `${styles.textColorHeader}`,
                          'ml-2 h-5 w-5 group-hover:text-gray-500',
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2">
                        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="uppercase relative grid gap-6 bg-zinc-800 px-5 py-6 sm:gap-8 sm:p-8">
                            {languageNav.map(item => (
                              <button
                                type="button"
                                key={item.name}
                                onClick={() => i18next.changeLanguage(item.code)}
                              >
                                <div
                                  className={`${styles.textColorHeader} bg-zinc-800 ${styles.colorHover} cursor-pointer p-3 flex justify-start items-center rounded-md`}
                                >
                                  <div className="ml-4 flex flex-col items-start">
                                    <p className="text-base font-medium">{t(item.name)}</p>
                                  </div>
                                </div>
                              </button>
                            ))}
                          </div>
                          <div className="uppercase px-5 py-5 bg-zinc-900 space-y-6 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            <div className="w-full h-auto flex flex-row justify-center items-center gap-2 text-white">
                              {t('language.select')}
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
          </div>
        </div>
      </div>
    </Popover>
  );
};

export default Header;
