/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import * as cv from "../static/career/cv.json" assert { type: "json" };

export default function Experience() {
    return (
        <div class={tw`py-4`}>
            <div class ={tw`flex flex-col xl:flex-row xl:place-items-start`}>
                <div class={tw`flex1 xl:shrink w-1/2 p-3`}>
                    <div class={tw`font-mono xl:mt-10 xl:mt-0 xl:p-0 text-left xl:text-center dark:text-blue-300 text-2xl`}>
                        Projects
                    </div>
                </div>
                <div class={tw`flex1 flex-grow xl:w-1/2 xl:px-3 xl:place-items-center`}>
                    {
                        cv.default.projects.map(proj => (
                            <div>
                                <div class={tw`flex flex-col xl:flex-row font-mono xl:mt-10 xl:mt-0 p-4 xl:p-0 dark:text-white`}>
                                    <div class={tw`flex-1 text-base xl:mr-20 xl:px-4 xl:pt-4 font-medium`}>
                                        <p class={tw`font-bold`}>
                                            {proj.name}
                                        </p>
                                    </div>
                                    <div class={tw`flex-1 shrink text-sm xl:ml-20 xl:p-4 font-medium`}>
                                        {proj.date}
                                        <p class={tw`italic font-sans text-sm`}>
                                            <a href={proj.link} target="_blank">{proj.link}</a>
                                        </p>
                                    </div>
                                </div>
                                <div class={tw`mx-2 px-2.5`}>
                                    <span class={tw`bg-gray-300 text-gray-800 text-xs font-mono px-1 py-0.5 font-semibold rounded dark:bg-gray-700 dark:text-gray-300`}>
                                        {proj.footnote}
                                    </span>
                                </div>
                                <div class={tw`pd-4 pt-2`}>
                                    {
                                        proj.description.map(xp_desc => (
                                                <p class={tw`text-base xl:mr-20 px-4 font-mono text-sm dark:text-white font-semilight`}>
                                                    - {xp_desc}
                                                </p>
                                            )
                                        )
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