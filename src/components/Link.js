/** @jsx jsx */
import { Link as GatsbyLink } from 'gatsby'
import { jsx } from 'theme-ui'

export const Link = ({
  children,
  to,
  activeClassName,
  partiallyActive,
  ...other
}) => {
  const internal = /^\/(?!\/)/.test(to)
  const file = /\.[0-9a-z]+$/i.test(to)

  if (internal) {
    if (file) {
      return (
        <a href={to} {...other}>
          {children}
        </a>
      )
    }
    return (
      <GatsbyLink
        to={to}
        activeClassName={activeClassName}
        partiallyActive={partiallyActive}
        {...other}
      >
        {children}
      </GatsbyLink>
    )
  }
  return (
    <a
      sx={{
        ':hover': {
          textDecorationColor: (theme) => `${theme.colors.primary}`,
        },
        ':active': {
          textDecorationColor: (theme) => `${theme.colors.primary}`,
        },
      }}
      href={to}
      {...other}
    >
      {children}
    </a>
  )
}
export default Link
