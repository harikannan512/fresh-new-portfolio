/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import * as cv from "../static/career/cv.json" assert { type: "json" };

export default function Certifications() {
    return (
        <div class={tw`hidden`}>
            <div class ={tw`flex flex-col xl:flex-row xl:place-items-start`}>
                <div class={tw`flex1 xl:shrink w-1/2 p-3`}>
                    <div class={tw`font-mono xl:mt-10 xl:mt-0 xl:p-0 text-left xl:text-center dark:text-blue-300 text-2xl`}>
                        Certifications
                    </div>
                </div>
                <div class={tw`flex1 xl:w-1/2 xl:p-3 xl:place-items-center`}>
                    {
                        cv.default.certifications.map(cert => (
                            <div class={tw`flex flex-col xl:flex-row font-mono xl:mt-10 xl:mt-0 p-4 xl:p-0 dark:text-white`}>
                                <div class={tw`flex-1 text-base xl:mr-20 xl:p-4 font-medium`}>
                                    <span class={tw`font-bold`}>
                                        {cert.name}
                                    </span>
                                </div>
                                <div class={tw`flex-1 shrink text-sm xl:ml-20 xl:p-4 font-medium`}>
                                    {cert.date}
                                    <p class={tw`italic text-sm`}>
                                        <a href={cert.footnote} target="_blank">
                                            {cert.footnote}
                                        </a>
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