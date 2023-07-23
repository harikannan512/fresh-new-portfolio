/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Header from "../components/Header.tsx"
import SideFlex from "../components/SideFlex.tsx";
import Education from "../components/Education.tsx";
import Experience from "../components/Experience.tsx";
import Skills from "../components/Skills.tsx";
import Certifications from "../components/Certifications.tsx";
import Projects from "../components/Projects.tsx";

export default function Career(){
    return (
        <div class={tw`dark:bg-gray-800 min-h-screen`}>
            <div class={tw`flex flex-col xl:flex-row place-items-start `}>
                <SideFlex/>
                <div class={tw` flex1 flex-row xl:flex-col place-items-center xl:mt-20`}>
                    <div class={tw`grid grid-row-5`}>
                        <Header/>
                        <Experience/>
                        <Education/>
                        <Skills/>
                        {/* <Certifications/> */}
                        <Projects/>
                    </div>
                </div>
            </div>
        </div>
    )
}