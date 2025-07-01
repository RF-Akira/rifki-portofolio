import { useState, useEffect } from 'react';

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const [progress, setProgress] = useState(0);
    const [typingComplete, setTypingComplete] = useState(false);
    const [loadingComplete, setLoadingComplete] = useState(false);

    const fullText = "< Hello World />";

    useEffect(() => {
        if (typingComplete) return;

        const typingInterval = setInterval(() => {
            setText((prev) => fullText.substring(0, prev.length + 1));
        }, 100);

        if (text === fullText) {
            clearInterval(typingInterval);
            setTimeout(() => setTypingComplete(true), 500);
        }

        return () => clearInterval(typingInterval);
    }, [text, typingComplete]);

    useEffect(() => {
        if (!typingComplete) return;

        const progressInterval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(() => setLoadingComplete(true), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(progressInterval);
    }, [typingComplete]);

    useEffect(() => {
        if (loadingComplete) {
            setTimeout(onComplete, 800); 
        }
    }, [loadingComplete, onComplete]);

    return (
        <div 
            className={`fixed inset-0 z-50 bg-black text-gray-100 flex flex-col items-center justify-center transition-transform duration-700 ease-in-out ${
                loadingComplete ? '-translate-y-full' : 'translate-y-0'
            }`}
        >
            <div className="mb-4 text-4xl font-mono font-bold">
                {text}
                {!typingComplete && <span className="animate-blink ml-1">|</span>}
            </div>
            
            <div className={`w-[250px] transition-opacity duration-300 ${typingComplete ? 'opacity-100' : 'opacity-0'}`}>
                <div className="w-full h-[2px] bg-gray-800 rounded overflow-hidden mb-2">
                    <div 
                        className="h-full bg-blue-500 shadow-[0_0_15px_#3b82f6] transition-all duration-300 ease-linear"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <p className='text-center text-sm font-mono'>{progress}%</p>
            </div>
        </div>
    );
};