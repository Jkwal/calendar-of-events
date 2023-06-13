import React from "react";

export const isValidEmail = (value: string) => {
  return /^\S+@\S+\.\S+$/.test(value);
};

export const onAnimationStart = (e: React.AnimationEvent<HTMLElement>) => {
  (e.target as HTMLElement).classList.remove('no-margin')
}

export const onAnimationStartMainScreen = (e: React.AnimationEvent<SVGSVGElement>) => {
  (e.target as HTMLElement).classList.remove('no-margin')
}

export const calculateTime = (unit: string) => {
  const targetDate = new Date();
  const countdownDate = new Date('2023-07-24');
  const difference = countdownDate.getTime() - targetDate.getTime();

  switch (unit) {
    case 'Days':
      return Math.floor(difference / (1000 * 60 * 60 * 24));
    case 'Hours':
      return Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    case 'Minutes':
      return Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    case 'Seconds':
      return Math.floor((difference % (1000 * 60)) / 1000);
    default:
      return 0;
  }
}

export const unitMap: Record<string, string> = {
  Days: "DD",
  Hours: "HH",
  Minutes: "MM",
  Seconds: "SS"
};