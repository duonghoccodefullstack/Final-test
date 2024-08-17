import { useRef, useState } from "react";
const Video = () => {
    
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const handlePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };
    return ( 
        <div className="my-[32px]">
             <video
                    className="relative rounded-lg"
                    ref={videoRef}
                    src='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                    width='770'
                    height='472'
                    style={{ display: isPlaying ? 'block' : 'none' }}
                    // controls
                />
                 {!isPlaying && (
                <button
                    onClick={handlePlayPause}
                    className=" w-[770px] h-[472px] inset-0 flex items-center justify-center bg-black bg-opacity-50  rounded-lg"
                    style={{ border: 'none', outline: 'none' }}
                >
                    <svg
                        className="w-[97px] h-[62px] flex items-center justify-center    text-white bg-[#302f2d] p-2 rounded-lg"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M5 3L19 12 5 21V3z" />
                    </svg>
                </button>
            )}
        </div>
     );
}
 
export default Video;