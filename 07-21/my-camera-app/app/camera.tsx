import { useState, useRef } from 'react';

const CameraPage: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasCameraAccess, setHasCameraAccess] = useState<boolean>(false);

  const handleStartCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setHasCameraAccess(true);
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  return (
    <div>
      <h1>Camera Page</h1>
      {hasCameraAccess ? (
        <video ref={videoRef} autoPlay playsInline />
      ) : (
        <button onClick={handleStartCamera}>Start Camera</button>
      )}
    </div>
  );
};

export default CameraPage;
