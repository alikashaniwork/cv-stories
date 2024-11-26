import { Suspense } from "react";
import Banner from "./banner/Banner";
import BasedOn from "./based-on/BasedOn";
import Hottests from "./hottests/Hottests";
import Random from "./random/Random";
import Today from "./today/Today";
import Trending from "./trending/Trending";
import WhatToRead from "./what-to-read/WhatToRead";

export default function Sections() {
    return (
        <div className="lg:mt-12 pb-20">
            <Suspense fallback={<p>Loading Banner...</p>}>
                <Banner />
            </Suspense>
            <Suspense fallback={<p>Loading Trending...</p>}>
                <Trending />
            </Suspense>
            <Suspense fallback={<p>Loading Random...</p>}>
                <Random />
            </Suspense>
            <Suspense fallback={<p>Loading What ToRead...</p>}>
                <WhatToRead />
            </Suspense>
            <Suspense fallback={<p>Loading Hottest...</p>}>
                <Hottests />
            </Suspense>
            <Suspense fallback={<p>Loading Today...</p>}>
                <Today />
            </Suspense>
            <Suspense fallback={<p>Loading Based On...</p>}>
                <BasedOn />
            </Suspense>
        </div>
    );
}
