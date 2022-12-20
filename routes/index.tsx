/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Typewriter from "../islands/Typewriter.tsx";
import ToggleTheme from "../islands/ToggleTheme.tsx";

export default function Home() {
    return (
        <div>
            <div class={tw`dark:bg-gray-800 h-screen w-screen`}>
                <div class={tw` flex flex-col xl:flex-row place-items-center xl:h-screen w-screen`}>
                    <div class={tw`flex1 xl:w-1/2 p-3 place-items-center`}>
                        <div class={tw`font-mono mt-10 xl:mt-0 p-9 xl:p-0 text-center dark:text-white text-5xl`}>
                            <span class="relative">
                                <p> Hi, I'm</p>
                                <Typewriter text="Venkatesh 👋"/>
                            </span>
                        </div>
                    </div>
                    <div class={tw`shrink p-3 text-center place-items-center`}>
                        <ToggleTheme />
                    </div>
                    <div class={tw`flex1 font-mono w-1/2 place-items-center text-center`}>
                        <div>
                            <div class={tw` p-1 m-5 dark:text-white hover:font-bold`}>
                                Career
                            </div>
                            <div class={tw` p-1 m-5 dark:text-white hover:font-bold`}>
                                <a target="_blank" href="https://github.com/venkatesh2090">
                                    Github <img src="/github-mark/github-mark.svg" alt="github logo" class={tw`inline h-4 dark:hidden`}/><img src="/github-mark/github-mark-white.svg" alt="github logo" class={tw`inline h-4 hidden`}/>
                                </a>
                            </div>
                            <div class={tw`p-1 m-5 dark:text-white hover:font-bold`}>
                                <a target="_blank" href="https://www.linkedin.com/in/venkatesh-prasad-kannan">
                                    LinkedIn <img src="/linkedin-mark/LI-In-Bug.png" alt="linkedin logo" class={tw`inline h-5`}/>
                                </a>
                            </div>

                            {/* <div class={tw` p-3 hover:font-bold`}>
                                Gaming Backlog <p class={tw`inline text-2xl`}>🎮</p>
                            </div> */}
                            <div  class={tw` p-1 m-5 dark:text-white hover:font-bold`}>
                                <a target="_blank" href="https://open.spotify.com/user/xwmhfkm3kllhanvzs6cy2026r">
                                    Spotify <img src="/spotify-mark/Spotify_Icon_RGB_Green.png" alt="linkedin logo" class={tw`inline h-5`}/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function setName() {
    const custom_name = "Venkatesh Prasad Kannan";
    return custom_name;
}