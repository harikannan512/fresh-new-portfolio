/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import * as cv from "../static/career/cv.json" assert { type: "json" };

export default function Header() {
    return (
        <div class={tw`xl:pd-5 xl:md-10`}>
            <div class ={tw`flex flex-col xl:flex-row xl:place-items-start`}>
                <div class={tw`flex1 xl:shrink w-1/2 p-3`}>
                    <div class={tw`font-mono xl:mt-10 xl:mt-0 xl:p-0 font-bold text-left xl:text-center dark:text-cyan-700 text-5xl`}>
                        {cv.default.name}
                    </div>
                </div>
                <div class={tw`flex1 xl:w-1/2 xl:p-3 xl:place-items-start`}>
                    <div class={tw`font-mono xl:mt-10 xl:mt-0 p-9 xl:p-0 italic xl:text-center dark:text-teal-500 xl:text-lg`}>
                        {cv.default.description}
                    </div>
                </div>
            </div>
        </div>
    )
}