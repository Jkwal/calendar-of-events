import React from "react";

export const onAnimationStart = (e: React.AnimationEvent<HTMLElement>) => {
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

export interface ImockEvent {
  id: number,
  name: string,
  date: string,
  image: string
}

export const mockEvents: ImockEvent[] = [
  {
    id: 1,
    name: 'Hawaiian party',
    date: '13.02.2023',
    image: 'https://s3-alpha-sig.figma.com/img/882c/7b88/9f6f00a46339f0d8a2e376fed4290c60?Expires=1687132800&Signature=T66QyLr6PneegqEWLWxB0P1RcKaR1LBscu7PvOqoZxFyvUsQ4TIPlCQkdRn2RSa66dh0y7ZticJUH3eNV0Co9dmd1hAP1hdmm47DRgYY-PgrUQNctO3FLIH5OMH~dvhoN2beyghOZ0T9fwzDGUXrtPkc-zEkPR818uY4XXFErsRrnW2Tcw~NoHbETBzPd3cyrKKxozU6ZBEJU7DANi-h13PZBqZucysEWarlaNF0gePTuJGF7376-Vcn42cEbc0ZzsCTKzvBIry2LFyRFM8Bqy0rk0hvSNa3WkdGsnGbuKDoZ713lTPTtRh18K73TMeGNDXaRiLcq15s5-jujkTWJQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    id: 2,
    name: 'Мafia party',
    date: '15.03.2023',
    image: 'https://s3-alpha-sig.figma.com/img/551c/c192/6c135d3112481f769636513a072fff20?Expires=1687132800&Signature=YFLjs-oWj~f9Fa1K1s3XDxw42fvUV1Dcejss29~Q~hy-lnYkyYQJZZrCDfO4slO1fsw6zxDqdYMKFSAan0eS-dtgyk~W1jBLl0DlI9zV4dd0Orme4~egZBWu2wpWz0ZYsTL~kyuWQQMQdrm83bFfz9H1wyOh~c1g60Jv77zCiUXgPCzspSYlzfcovb0HfgqiQ6xM4Z6yJ7-3AE4wLEv-sp0G0-v-x6FqCpOsxvC~vLP6BkquBGeid7hp651T5~WZ22Pbjakv2oMNjFKB2WGueX4vlaL2tJhgqAsMhmexfiMd1oUZQ8cTltIxDkgq4-uv2qsF~oRWx26rASv570OBHg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    id: 3,
    name: 'Party',
    date: '17.04.2023',
    image: 'https://s3-alpha-sig.figma.com/img/c7a7/821f/00fcbad97326a89430424f52d4dc778c?Expires=1687132800&Signature=Mbk5OgmNQOrUpJYH8WGFDgek5Hou1Pdmt9~xr~fVOJaa18KnY8dX9RNxIwRTq5Z~d-3YJuLsNlMjgxXTQhLV8nCEVJmZIq2ojcdSBfVxnfTMJfElb83cqwNCXb7UFphKbgVWInZVoW6ktbdlXHErfaNP-2GpkS3mjQs7To5QpCxeAR4RbnzzjYOUk2Bg1sgAbaKZWPTsAW6x36iYPBV2Z4qNMM3-bfuuCtsl0JUpkjmYlpl8Mb5N~psEmKfCnLfhH0sXJck7dhQNjhI4fwivqwrNWNhawE6oBuGcOWkBPLLtwOvQsudjELHXHY5p7ogxg9GzNoeZeFfGPAZv8Do7aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    id: 4,
    name: 'Party on the beach',
    date: '19.05.2023',
    image: 'https://s3-alpha-sig.figma.com/img/5d9c/48c3/29f6306c89404b5eb97b67608aa05c76?Expires=1687132800&Signature=aT7KeitjIF5Hs5Rd9kQN1BLFyuQowQ-wR4-fg7dJSVbjbZwp8lrq2O~6YCRfE-UBUbv8cH3dX6Zk~pSBOLTZ5Q0IpH3Wf6pQkTZ6zOfs9TaA2ajC34QcwijX40CWXrIsu8x76y8qEeMlObg-epO9Pw4EW5h9jkfd3DF~qwNZQhjqYZK2SIfMGw5Qywkz7gyFHDiFFKy~PtADY3jkolh5PNx0Efk39NsKCe6Y0gdYawmTM-NQTL2Kzun1DFN9gNNUBYmiH9aO0eMPfTXD4d8T8NgltDIMlKzvJbT8~PCYiSHQ2sCqiBpmIWyFFgkHdG2VLBd02spvWiv1Jv-zvm-SQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    id: 5,
    name: 'Home Security',
    date: '21.06.2023',
    image: 'https://s3-alpha-sig.figma.com/img/5d9c/48c3/29f6306c89404b5eb97b67608aa05c76?Expires=1687132800&Signature=aT7KeitjIF5Hs5Rd9kQN1BLFyuQowQ-wR4-fg7dJSVbjbZwp8lrq2O~6YCRfE-UBUbv8cH3dX6Zk~pSBOLTZ5Q0IpH3Wf6pQkTZ6zOfs9TaA2ajC34QcwijX40CWXrIsu8x76y8qEeMlObg-epO9Pw4EW5h9jkfd3DF~qwNZQhjqYZK2SIfMGw5Qywkz7gyFHDiFFKy~PtADY3jkolh5PNx0Efk39NsKCe6Y0gdYawmTM-NQTL2Kzun1DFN9gNNUBYmiH9aO0eMPfTXD4d8T8NgltDIMlKzvJbT8~PCYiSHQ2sCqiBpmIWyFFgkHdG2VLBd02spvWiv1Jv-zvm-SQw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    id: 6,
    name: 'Network Design & Implementation',
    date: '23.07.2023',
    image: 'https://s3-alpha-sig.figma.com/img/622d/a026/24c8febad8efb43e1ecfd60a34f66e99?Expires=1687132800&Signature=Ksqc2xax-qhw945es4hK81gmOfDpTAyS2~wkY8z5DnII51S~dlcm-~iWN5-zSPmCnGk85hrkzt6~j519ESxug0FEM-Indb4OCrRgiUgDGRaNFSyuOn7UcH36SNhVMiCoox4yIU6c0B4oXiI6yxD1C69kmtJW3ZwLtbrcvP7oBZpHdmRsROVFdU-ik9pIOHCX9dVfZlYV-A-kAr9MzW0VBIXOqVKi3DGHkD-ZtiQKbyVYlR2FeInLwf6KToD41lNFAdiQcyoKqztpukQS3y3Rs7rOKxCS-1oK7zRJxfm46J0COX1sEmi5XRPjlw6tNAt19NpgV3PXBYTdy-T2KnDbYw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    id: 7,
    name: 'System Design & Engineering',
    date: '25.08.2023',
    image: 'https://s3-alpha-sig.figma.com/img/0a63/4d58/dc913008d96789bdba81f3d9b101915f?Expires=1687132800&Signature=W2sgyJqCi0274PQznl41-A27FVYmzmEk7abnfbLlT~h0ZV-zPnw6jyQYtmaFslG~5EyzTGAAnteHL2LX7BgfP81VPiG0gO-6c2UtA4H0~vp4P0nzSrut6k-RvEvodGyqfcROYUlEFMDydZQKR7RQTc~pnrBH49wWmh--3iq0A4qMtOYwz4UmzRmKXEHRNiTfU6OdKz5uo3BMRzsuNSKje2mF8cca62lZzp3tcZ-uxG8K0xzsv7HTn6gcakIKVcv6kCyV0fdIhKeBudXHRKLc44IEp107PO2m0TlKwNu-aD~375tcfw4YskyESnv5iYy3NunZSa19iVTovvKChWA85g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  },
  {
    id: 8,
    name: 'Client Care Plans',
    date: '27.09.2023',
    image: 'https://s3-alpha-sig.figma.com/img/c7a7/821f/00fcbad97326a89430424f52d4dc778c?Expires=1687132800&Signature=Mbk5OgmNQOrUpJYH8WGFDgek5Hou1Pdmt9~xr~fVOJaa18KnY8dX9RNxIwRTq5Z~d-3YJuLsNlMjgxXTQhLV8nCEVJmZIq2ojcdSBfVxnfTMJfElb83cqwNCXb7UFphKbgVWInZVoW6ktbdlXHErfaNP-2GpkS3mjQs7To5QpCxeAR4RbnzzjYOUk2Bg1sgAbaKZWPTsAW6x36iYPBV2Z4qNMM3-bfuuCtsl0JUpkjmYlpl8Mb5N~psEmKfCnLfhH0sXJck7dhQNjhI4fwivqwrNWNhawE6oBuGcOWkBPLLtwOvQsudjELHXHY5p7ogxg9GzNoeZeFfGPAZv8Do7aw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'
  }
]