/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import ToggleTheme from "../islands/ToggleTheme.tsx";
import { asset } from "$fresh/runtime.ts";

export default function SideFlex() {
    return (
        <aside class={tw`flex flex-row xl:flex-col top-0 p-3 place-items-start xl:sticky xl:mt-20`}>
            <div class={tw`p-3`}>
                <ToggleTheme/>
            </div>
            <div class={tw`p-3`}>
                <a href={asset("/career/cv-en.pdf")} target="_blank">
                    <div class={tw`w-10 h-10 bg-gray-300 hover:bg-gray-500 align-middle place-items-center text-center active:bg-gray-900 active:text-white rounded-full dark:border-gray-600 shadow`}>
                        <span class={tw`text-3xl align-bottom`}>𝍌</span>
                    </div>
                </a>
            </div>
            <div class={tw`p-3`}>
                <a href={asset("/")}>
                    <div class={tw`flex w-10 h-10 bg-gray-300 hover:bg-gray-500 align-center place-items-center active:bg-gray-900 active:text-white rounded-full dark:border-gray-600 shadow`}>
                        <img class={tw`object-scale-down h-6 w-full`} src={asset("/toggle/home.svg")}/>
                    </div>
                </a>
            </div>
        </aside>
    );
}