import React from 'react'
import { renderWithTheme } from '../../testHelpers'
import Text from '../../components/Text/Text'

it('renders correctly', () => {
  const { asFragment } = renderWithTheme(<Text>Play2Earn.monster</Text>)
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-bdnxRM gEsGXn"
        color="text"
      >
        Play2Earn.monster
      </div>
    </DocumentFragment>
  `)
})
