import { Fragment } from "react";

import Hero from "../components/hero/hero";
import {
  homeObjOne,
  homeObjThree,
  homeObjTwo,
} from "../components/infoSection/data";
import InfoSection from "../components/infoSection/info-section";
import Services from "../components/services/services";

export default function Home() {
  return (
    <Fragment>
      <Hero />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
    </Fragment>
  );
}
