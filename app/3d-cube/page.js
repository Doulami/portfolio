'use client';

import dynamic from 'next/dynamic';

const CubeScene = dynamic(() => import('../../components/CubeScene'), { ssr: false });

export default function CubePage() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: 'black' }}>
      <CubeScene />
    </div>
  );
}
