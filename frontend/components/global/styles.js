// Container Styles
export const container = 'w-full h-[75vh]';

// Flex Styles
export const flexRow = 'flex justify-center items-center gap-4 flex-wrap my-4 w-full';
export const flexColumn = 'flex flex-col justify-center items-center gap-4 flex-wrap w-11/12';

// Text Styles
export const lgText =
  '2xl:text-7xl xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl xs:text-2xl text-xl';
export const mdText =
  '2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl xs:text-lg text-md';
export const smText =
  '2xl:text-3xl xl:text-2xl lg:text-xl md:text-lg sm:text-md xs:text-sm text-xs';
export const xsText =
  '2xl:text-2xl xl:text-xl lg:text-lg md:text-md sm:text-sm xs:text-xs text-[8px]';
export const copyrightText = 'md:text-xs text-[8px]';

export const boldText = 'text-bold';

// Max-Width Images
export const maxWidth = 'lg:max-w-lg md:max-w-md sm:max-w-sm xs:max-w-[16rem] max-w-[12rem]';
// Light & Dark Mode Specific Styles
export const bgLightest = 'bg-white dark:bg-slate-700';
export const bgLight = 'bg-gray-200 dark:bg-slate-800';
export const bgDark = 'bg-zinc-300 dark:bg-slate-900';
export const bgPopup = 'bg-zinc-200 dark:bg-slate-800';
export const bgPopupBottom = 'bg-zinc-300 dark:bg-slate-900';
export const bgButton = 'bg-leet dark:bg-leet text-white';

export const logoColor = 'text-black dark:text-white';
export const textColorHeader = 'text-black dark:text-white';
export const textColorDescription = 'text-slate-500 dark:text-slate-400';
export const textColorRequired = 'text-red-500 dark:text-red-400';
export const textColorLink =
  'text-leet dark:text-sky-500 hover:text-indigo-500 dark:text-sky-300 hover:dark:text-yellow-500';
export const textColorMenuButton =
  'text-black dark:text-white hover:text-leet dark:hover:text-yellow-500 hover:bg-gray-100 dark:hover:bg-slate-500';
export const colorPopupButton =
  'text-black dark:text-white hover:bg-gray-200 dark:hover:bg-slate-600';

export const colorHover = 'hover:bg-gray-300 hover:dark:bg-gray-500';

export const buttonHover = 'hover:opacity-80';

// Table Styles
export const tableHeader = 'bg-zinc-500 dark:bg-slate-900 text-white';
export const tableOdd = 'bg-zinc-200 dark:bg-slate-800';
export const tableEven = 'bg-zinc-100 dark:bg-slate-600';

// Button Styles
export const baseButtonStyles = `${smText} font-normal inline-flex justify-center items-center py-2 px-6 min-w-[10rem] w-full`;
export const baseButtonStylesExtended = `text-white border-0 whitespace-nowrap uppercase hover:opacity-80`;
export const right = `${baseButtonStyles} ${baseButtonStylesExtended} rounded-tr-3xl rounded-br-3xl max-w-lg mb-[16px]`;
export const left = `${baseButtonStyles} ${baseButtonStylesExtended} rounded-tl-3xl rounded-bl-3xl max-w-lg mb-[16px]`;
export const center = `${baseButtonStyles} ${baseButtonStylesExtended} rounded-3xl max-w-xl mb-[16px]`;

export const shadows = 'shadow-md shadow-gray-600 dark:shadow-slate-600';

export const bBorder = 'border-b border-zinc-500 dark:border-slate-300';
export const mdBorder =
  'border-2 border-zinc-400 dark:border-slate-600 hover:border-gray-200 hover:dark:border-slate-400';
export const lgBorder = 'border-3 border-gray-300 dark:border-slate-600';
export const xlBorder = 'border-4 border-gray-300 dark:border-slate-600';

export const roundTop = 'rounded-tl-md rounded-tr-md';
export const roundBottom = 'rounded-bl-md rounded-br-md';
