/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState, useEffect } from "preact/hooks";

export default function setTheme<T>() {
    const [isDark, setIsDark] = useState(localStorage.theme == 'dark')

    useEffect(() => {
        if (isDark){
            localStorage.theme = 'dark'
        } else {
            localStorage.theme = 'light'
        }
        document.querySelector('html')?.setAttribute('class', localStorage.theme)

    }, [isDark]);

    return (
        <div>
            <input type="checkbox" id="theme" name="something" checked={isDark} class={tw`hidden`}/>
            <button type="checkbox" class={tw`text-center place-items-center align-middle focus:outline-none`}
                onClick={() => setIsDark(!isDark)}>
                <div class={tw`w-10 h-10 bg-gray-300 hover:bg-gray-500 align-middle place-items-center active:bg-gray-900 active:text-white rounded-full dark:border-gray-600 shadow`}>
                    <span class={tw`text-3xl align-bottom`}>☾</span>
                </div>
            </button>
        </div>
    );
}