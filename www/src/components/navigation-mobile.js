/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"

import {
  BlogIcon,
  DocsIcon,
  TutorialIcon,
  PluginsIcon,
  ShowcaseIcon,
  SvgDefs,
} from "../assets/icons"
import { mediaQueries } from "../gatsby-plugin-theme-ui"
import { visuallyHidden, svgStyles } from "../utils/styles"

const getProps = ({ isPartiallyCurrent }) => {
  return {
    ...(isPartiallyCurrent
      ? {
          "data-active": true,
        }
      : {}),
  }
}

const MobileNavItem = ({ linkTo, label, icon }) => (
  <Link
    sx={{
      ...styles.link.default,
      ...styles.svg.default,
      "&[data-active]": {
        ...styles.link.active,
        ...styles.svg.active,
      },
    }}
    getProps={getProps}
    to={linkTo}
  >
    <span dangerouslySetInnerHTML={{ __html: icon }} />
    <div>{label}</div>
  </Link>
)

const MobileNavigation = () => (
  <>
    <span sx={visuallyHidden}>
      <SvgDefs />
    </span>
    <div
      sx={{
        position: `fixed`,
        display: `flex`,
        justifyContent: `space-around`,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: `navigation`,
        borderTopWidth: `1px`,
        borderTopStyle: `solid`,
        borderColor: `ui.border`,
        bg: `navigation.background`,
        height: `headerHeight`,
        fontFamily: `header`,
        paddingBottom: `env(safe-area-inset-bottom)`,
        [mediaQueries.md]: {
          display: `none`,
        },
      }}
    >
      <MobileNavItem linkTo="/docs/" label="Docs" icon={DocsIcon} />
      <MobileNavItem
        linkTo="/tutorial/"
        label="Tutorials"
        icon={TutorialIcon}
      />
      <MobileNavItem linkTo="/plugins/" label="Plugins" icon={PluginsIcon} />
      <MobileNavItem linkTo="/blog/" label="Blog" icon={BlogIcon} />
      <MobileNavItem linkTo="/showcase/" label="Showcase" icon={ShowcaseIcon} />
    </div>
  </>
)

export default MobileNavigation

const styles = {
  svg: {
    default: {
      ...svgStyles.stroke,
      ...svgStyles.default,
      "&:hover": { ...svgStyles.active },
    },
    active: svgStyles.active,
  },
  link: {
    default: {
      color: `lilac`,
      borderRadius: 1,
      fontSize: 0,
      flexShrink: 0,
      lineHeight: `solid`,
      width: 64,
      padding: 1,
      textDecoration: `none`,
      textAlign: `center`,
      "& svg": {
        display: `block`,
        height: 32,
        margin: `0 auto`,
        "& path, & line, & polygon": {
          transition: t =>
            `all ${t.transition.speed.default} ${t.transition.curve.default}`,
        },
      },
    },
    active: {
      color: `gatsby`,
      fontWeight: `bold`,
    },
  },
}
