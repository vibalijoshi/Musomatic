import React, { Fragment } from "react";
import HeroSection from "./HeroSection/HeroSection.js";
import HowItWorks from "./HowItWorks/HowItWorks.js";
import Eom from "./EOM/Eom.js";
import Cta from "./CtaSection/Cta.js";
import Section2 from "./Section 2/Section2.js";
import Section3 from "./Section 3/Section3.js";
import LogoAndHeadline from "./LogoAndHeadline/LogoAndHeadline.js";
import MessageDemo from "./MessageDemo/MessageDemo"


export default function HomePage() {
	return (
		<Fragment>
			<HeroSection />
			<HowItWorks />
			<Eom />
			<Cta isHomeSection={true} />
			<Section2/>
			<Section3/>
			<MessageDemo />
			<LogoAndHeadline />
		</Fragment>
	);
}
