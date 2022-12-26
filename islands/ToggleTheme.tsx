/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState, useEffect } from "preact/hooks";
import { installGlobals } from "https://deno.land/x/virtualstorage@0.1.0/mod.ts";
import { asset } from "$fresh/runtime.ts";

installGlobals();

export default function setTheme() {
    if (typeof window !== 'undefined') {
        return ifDarkValid()
    }

    return (
        <div></div>
    )
}

function ifDarkValid<T>() {
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
            <button type="checkbox" class={tw`text-center align-middle focus:outline-none`}
                onClick={() => setIsDark(!isDark)}>
                <div class={tw`flex w-10 h-10 bg-gray-300 hover:bg-gray-500 align-center place-items-center active:bg-gray-900 active:text-white rounded-full dark:border-gray-600 shadow`}>
                    <img class={tw`object-scale-down h-6 w-full`} src={asset("/toggle/moon.svg")}/>
                </div>
            </button>
        </div>
    );
}