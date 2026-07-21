"use client";
import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
    words: string[];          // Danh sách các chuỗi chữ sẽ chạy lần lượt
    typingSpeed?: number;     // Tốc độ gõ (ms)
    deletingSpeed?: number;   // Tốc độ xóa (ms)
    delayBetweenWords?: number; // Thời gian dừng lại khi gõ xong 1 từ (ms)
    className?: string;       // Custom CSS class bên ngoài
}

export const TypeWriter: React.FC<TypeWriterProps> = ({
    words,
    typingSpeed = 100,
    deletingSpeed = 50,
    delayBetweenWords = 5500,
    className = '',
}) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const fullText = words[currentWordIndex];

        let timer: NodeJS.Timeout;

        if (!isDeleting) {
            // Đang trong quá trình gõ chữ vào
            timer = setTimeout(() => {
                setCurrentText(fullText.substring(0, currentText.length + 1));
            }, typingSpeed);

            // Nếu đã gõ xong toàn bộ từ hiện tại -> Chờ một chút rồi chuyển sang trạng thái xóa
            if (currentText === fullText) {
                timer = setTimeout(() => {
                    setIsDeleting(true);
                }, delayBetweenWords);
            }
        } else {
            // Đang trong quá trình xóa chữ đi
            timer = setTimeout(() => {
                setCurrentText(fullText.substring(0, currentText.length - 1));
            }, deletingSpeed);

            // Nếu đã xóa sạch từ -> Chuyển sang từ tiếp theo trong mảng
            if (currentText === '') {
                setTimeout(() => {
                    setIsDeleting(false);
                    setCurrentWordIndex((prev) => (prev + 1) % words.length);
                }, 0);
            }
        }

        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

    return (
        <span className={`inline-flex items-center ${className}`}>
            <span className='invisible'>{`1`}</span>
            <span>{currentText}</span>
            <span className="ml-1 inline-block w-[2px] h-[1.2em] bg-white animate-pulse" />
        </span>
    );
};