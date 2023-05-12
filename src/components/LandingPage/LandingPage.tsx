import React, { useState } from "react";
import { memo } from "react";
import type { FC } from "react";

import resets from "../_resets.module.css";
import { FrameIcon } from "./FrameIcon";
import { FrameIcon2 } from "./FrameIcon2";
import { FrameIcon3 } from "./FrameIcon3";
import { FrameIcon4 } from "./FrameIcon4";
import { FrameIcon5 } from "./FrameIcon5";
import { FrameIcon6 } from "./FrameIcon6";
import { FrameIcon7 } from "./FrameIcon7";
import { FrameIcon8 } from "./FrameIcon8";
import { FrameIcon9 } from "./FrameIcon9";
import { FrameIcon10 } from "./FrameIcon10";
import { FrameIcon11 } from "./FrameIcon11";
import classes from "./LandingPage.module.css";

interface MenuItem {
  name: string;
  image: JSX.Element;
}

const menuItems: MenuItem[] = [
  {
    name: "Logistics management for material testing labs",
    image: <FrameIcon />
  },
  {
    name: "Standardized and reliable services",
    image: <FrameIcon2 />
  },
  {
    name: "Partnerships with high-quality and reliable testing labs",
    image: <FrameIcon3 />
  },
  {
    name:
      "Efficient and streamlined process for connecting construction companies with testing labs",
    image: <FrameIcon4 />
  },
  {
    name:
      "Simplified process for material testing in the construction industry",
    image: <FrameIcon5 />
  }
];

const MenuItem: FC<{ item: MenuItem; onClick: () => void }> = ({
  item,
  onClick
}) => (
  <div className={classes.menuItem} onClick={onClick}>
    {item.name}
  </div>
);

interface Props {
  className?: string;
}

/* @figmaId 6:562 */
export const LandingPage: FC<Props> = memo(function LandingPage(props = {}) {
  const [selectedItem, setSelectedItem] = useState<MenuItem>(menuItems[0]);

  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      {/* Left side: menu */}
      <div className={classes.menu}>
        {menuItems.map((item) => (
          <MenuItem
            key={item.name}
            item={item}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      {/* Right side: selected image */}
      <div className={classes.image}>{selectedItem.image}</div>

      <div className={classes.frame14290}>
        <div className={classes.frame14289}>
          <div className={classes.frame14288}>
            <div className={classes.happyCustomers}>Happy Customers​</div>
            <div className={classes.ourCommitmentToHighStandardsOf}>
              <div className={classes.textBlock}>
                Our commitment to high standards of quality and reliability in
                partnering with material testing labs simplifies the
                construction process and earns the trust of our clients.
              </div>
              <div className={classes.textBlock2}>
                <p></p>
              </div>
            </div>
          </div>
          <div className={classes.viewAllTestimonies}></div>
        </div>
        <div className={classes.image32}></div>
      </div>
      <div className={classes.frame14291}>
        <div className={classes.simpliTestCo}>SimpliTest Co</div>
        <div className={classes.importantLinksTestingPartnerCo}>
          <div className={classes.textBlock3}>Important Links</div>
          <ul className={classes.list}>
            <li>
              <div className={classes.textBlock4}>
                <p className={classes.labelWrapper}>
                  <span className={classes.label}>
                    Testing Partner Connector
                  </span>
                </p>
              </div>
            </li>
            <li>
              <div className={classes.textBlock5}>Order a new test</div>
            </li>
            <li>
              <div className={classes.textBlock6}>Join as a Partner Lab</div>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.frame14257}>
        <div className={classes.frame14256}>
          <div className={classes.logoNoBackground1}></div>
          <div className={classes.simpliTest}>Honestus Tech</div>
        </div>
        <div className={classes.navBarOptions}>
          <div className={classes.home}>Home</div>
          <div className={classes.portal}>Portal</div>
          <div className={classes.howItWorks}>How it Works</div>
          <div className={classes.frame}>
            <FrameIcon className={classes.icon} />
          </div>
        </div>
      </div>
      <div className={classes.frame14258}>
        <div className={classes.frame14260}>
          <div className={classes.frame14259}>
            <div className={classes.materialTestingDoneEfficiently}>
              Simplifying Material Testing
            </div>
            <div className={classes.streamlineYourConstructionMate}>
              <div className={classes.textBlock7}>
                Streamline your construction material testing process with
                SimpliTest’s reliable and standardized services, connecting you
                with top-quality labs in India.
              </div>
              <div className={classes.textBlock8}>
                <p></p>
              </div>
            </div>
          </div>
          <div className={classes.image24}></div>
        </div>
      </div>
      <div className={classes.frame14269}>
        <div className={classes.frame14265}>
          <div className={classes.frame14264}>
            <div className={classes.frame14262}>
              <div className={classes._69}>69+</div>
              <div className={classes.expertPartnerLabsAcrossIndia}>
                Expert Partner Labs across India
              </div>
            </div>
            <div className={classes.frame14263}>
              <div className={classes.trustedByNumerousConstructionC}>
                Trusted by numerous construction companies
              </div>
            </div>
          </div>
          <div className={classes.simpliTestMadeOurProjectSeamle}>
            SimpliTest made our project seamless by connecting us with a
            reliable material testing lab and taking care of all the logistics.
          </div>
        </div>
        <div className={classes.frame14268}>
          <div className={classes.a}>A+</div>
          <div className={classes.frame14267}>
            <div className={classes.frame14266}>
              <div className={classes.unnamed}>★</div>
              <div className={classes.unnamed2}>★</div>
              <div className={classes.unnamed3}>★</div>
              <div className={classes.unnamed4}>★</div>
              <div className={classes.unnamed5}>★</div>
            </div>
            <div className={classes._169Ratings}>169 ratings</div>
          </div>
        </div>
      </div>
      <div className={classes.frame14277}>
        <div className={classes.whyDoWeExist}>Why do we exist?</div>
        <div className={classes.frame14276}>
          <div className={classes.frame14271}>
            <div className={classes.image26}></div>
            <div className={classes.frame14270}>
              <div className={classes.reliableMaterialTestingPartner}>
                Reliable Material Testing Partner Connecter
              </div>
              <div className={classes.simpliTestPartnersWithQualityD}>
                SimpliTest partners with quality-driven service providers who
                adhere to strict standards, ensuring standardized and reliable
                services for a seamless construction process.
              </div>
            </div>
          </div>
          <div className={classes.frame14273}>
            <div className={classes.image25}></div>
            <div className={classes.frame14272}>
              <div className={classes.streamlinedLogisticsSupportFor}>
                Streamlined Logistics Support for Construction Projects
              </div>
              <div className={classes.ourLogisticsSupportServiceEnsu}>
                Our logistics support service ensures that the right material
                testing lab is available when needed, saving clients time and
                reducing stress.
              </div>
            </div>
          </div>
          <div className={classes.frame14275}>
            <div className={classes.image27}></div>
            <div className={classes.frame14274}>
              <div className={classes.effortlessMaterialTestingLabCo}>
                Effortless Material Testing Lab Connections
              </div>
              <div className={classes.simpliTestSStreamlinedSearchFu}>
                SimpliTest&#39;s streamlined search function simplifies the
                process of finding the right material testing lab by allowing
                users to filter by location, services
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.frame14286}>
        <div className={classes.features}>Features</div>
        <div className={classes.frame14285}>
          <div className={classes.frame14284}>
            <div className={classes.frame14279}>
              <div className={classes.logisticsManagementForMaterial}>
                Logistics management for material testing labs
              </div>
              <div className={classes.frame14278}>
                <div className={classes.learnMore}>Learn more</div>
                <div className={classes.frame2}>
                  <FrameIcon2 className={classes.icon2} />
                </div>
              </div>
            </div>
            <div className={classes.frame14280}>
              <div className={classes.standardizedAndReliableService}>
                Standardized and reliable services
              </div>
              <div className={classes.frame142782}>
                <div className={classes.learnMore2}>Learn more</div>
                <div className={classes.frame3}>
                  <FrameIcon3 className={classes.icon3} />
                </div>
              </div>
            </div>
            <div className={classes.frame14281}>
              <div className={classes.partnershipsWithHighQualityAnd}>
                Partnerships with high-quality and reliable testing labs
              </div>
              <div className={classes.frame142783}>
                <div className={classes.learnMore3}>Learn more</div>
                <div className={classes.frame4}>
                  <FrameIcon4 className={classes.icon4} />
                </div>
              </div>
            </div>
            <div className={classes.frame14282}>
              <div className={classes.efficientAndStreamlinedProcess}>
                Efficient and streamlined process for connecting construction
                companies with testing labs
              </div>
              <div className={classes.frame142784}>
                <div className={classes.learnMore4}>Learn more</div>
                <div className={classes.frame5}>
                  <FrameIcon5 className={classes.icon5} />
                </div>
              </div>
            </div>
            <div className={classes.frame14283}>
              <div className={classes.simplifiedProcessForMaterialTe}>
                Simplified process for material testing in the construction
                industry
              </div>
              <div className={classes.frame142785}>
                <div className={classes.learnMore5}>Learn more</div>
                <div className={classes.frame6}>
                  <FrameIcon6 className={classes.icon6} />
                </div>
              </div>
            </div>
          </div>
          <div className={classes.image28}></div>
        </div>
      </div>
      <div className={classes.frame14287}>
        <div className={classes.benefits}>Benefits</div>
        <div className={classes.frame142852}>
          <div className={classes.image282}></div>
          <div className={classes.frame142842}>
            <div className={classes.frame142802}>
              <div className={classes.ensuresStandardizedAndReliable}>
                Ensures standardized and reliable services for construction
                companies.
              </div>
              <div className={classes.frame142786}>
                <div className={classes.learnMore6}>Learn more</div>
                <div className={classes.frame7}>
                  <FrameIcon7 className={classes.icon7} />
                </div>
              </div>
            </div>
            <div className={classes.frame142792}>
              <div className={classes.eliminatesTheHassleOfFindingRe}>
                Eliminates the hassle of finding reliable material testing labs
                in India.
              </div>
              <div className={classes.frame142787}>
                <div className={classes.learnMore7}>Learn more</div>
                <div className={classes.frame8}>
                  <FrameIcon8 className={classes.icon8} />
                </div>
              </div>
            </div>
            <div className={classes.frame142822}>
              <div className={classes.increasesEfficiencyInTheConstr}>
                Increases efficiency in the construction industry by connecting
                the right partners for each project
              </div>
              <div className={classes.frame142788}>
                <div className={classes.learnMore8}>Learn more</div>
                <div className={classes.frame9}>
                  <FrameIcon9 className={classes.icon9} />
                </div>
              </div>
            </div>
            <div className={classes.frame142812}>
              <div className={classes.savesTimeAndResourcesByTakingC}>
                Saves time and resources by taking care of logistics
              </div>
              <div className={classes.frame142789}>
                <div className={classes.learnMore9}>Learn more</div>
                <div className={classes.frame10}>
                  <FrameIcon10 className={classes.icon10} />
                </div>
              </div>
            </div>
            <div className={classes.frame142832}>
              <div className={classes.promotesQualityAndReliabilityB}>
                Promotes quality and reliability by working with partners who
                meet high standards.
              </div>
              <div className={classes.frame1427810}>
                <div className={classes.learnMore10}>Learn more</div>
                <div className={classes.frame11}>
                  <FrameIcon11 className={classes.icon11} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});
