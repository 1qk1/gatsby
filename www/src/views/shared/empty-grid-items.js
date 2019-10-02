/** @jsx jsx */
import { jsx } from "theme-ui"

const EmptyGridItems = ({ styles }) => {
  let items = []

  for (let i = 0; i < 6; i++) {
    items.push(
      <div
        key={`empty-grid-item-${i}`}
        aria-hidden="true"
        sx={{
          ...styles,
          my: 0,
        }}
      />
    )
  }

  return <>{items}</>
}

export default EmptyGridItems
