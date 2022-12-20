/** @jsx h */
import { h } from "preact";
import { useState, useEffect, useRef } from "preact/hooks";
import { tw } from "@twind";

interface CounterPropsText {
    text: string;
}

export default function Typewriter(input: CounterPropsText) {
    
    const index = useRef(0);
    const [currentText, setCurrentText] = useState('');

    useEffect(() => {
        index.current = 0;
        setCurrentText('')
    }, [input])

    useEffect(() => {
        const timeoutId :number = setTimeout(() => {
            setCurrentText((value) => value + input.text.charAt(index.current));
            index.current += 1;
        }, 80);
        return () => {
            clearTimeout(timeoutId);
        };
    }, [currentText, input])

    return <span class={tw`leading-loose`}>{currentText}<span class={tw`inline animate-pulse`}>_</span></span>
}