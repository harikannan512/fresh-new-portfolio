/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import * as cv from "../static/career/cv.json" with { type: "json" };

export default function Education() {
    return (
        <div>
            <div class ={tw`flex flex-col xl:flex-row xl:place-items-start`}>
                <div class={tw`flex1 xl:shrink w-1/2 p-3`}>
                    <div class={tw`font-mono xl:mt-10 xl:mt-0 xl:p-0 text-left xl:text-center dark:text-blue-300 text-2xl`}>
                        Education
                    </div>
                </div>
                <div class={tw`flex1 xl:w-1/2 xl:p-3`}>
                        {
                            cv.default.education.map(edu => (
                                    <div class={tw`flex flex-col xl:flex-row font-mono xl:mt-10 xl:mt-0 p-4 xl:p-0 dark:text-white`}>
                                        <div class={tw`flex-1 text-base xl:mr-20 xl:p-4 font-medium`}>
                                            <span class={tw`font-bold`}>{edu.qualification}</span>
                                            <p class={tw`italic text-sm`}>
                                                {edu.institute}
                                            </p>
                                        </div>
                                        <div class={tw`flex-1 shrink text-sm xl:ml-20 xl:p-4 font-medium`}>
                                            {edu.year}
                                            <p class={tw`italic text-sm`}>
                                                {edu.result}
                                            </p>
                                        </div>
                                    </div>    
                                )
                            )
                        }
                </div>
            </div>
        </div>
    );
}