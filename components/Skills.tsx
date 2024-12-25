/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import * as cv from "../static/career/cv.json" with { type: "json" };

export default function Education() {
    return (
        <div class={tw`py-4`}>
            <div class ={tw`flex flex-col xl:flex-row xl:place-items-start`}>
                <div class={tw`flex1 xl:shrink w-1/2 p-3`}>
                    <div class={tw`font-mono xl:mt-10 xl:mt-0 xl:p-0 text-left xl:text-center dark:text-blue-300 text-2xl`}>
                        Skills
                    </div>
                </div>
                <div class={tw`flex1 xl:w-1/2 xl:p-3 font-mono dark:text-white`}>
                    {
                        cv.default.skills.map(skill => (
                            <div>
                                <span class={tw`bg-gray-500 hover:bg-gray-700 text-gray-200 text-sm font-bold m-2 p-1 text-center rounded dark:bg-blue-200 dark:text-blue-800`}>{skill.name}</span>
                                <div class={tw`grid grid-cols-4 xl:grid-cols-5 p-4 xl:gap-1`}>
                                    {
                                        skill.list.map(each => (
                                            <span class={tw`bg-gray-300 text-gray-800 text-sm font-medium xl:m-2 m-0.5 py-1 text-center rounded dark:bg-gray-700 dark:text-gray-300`}>{each}</span>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}