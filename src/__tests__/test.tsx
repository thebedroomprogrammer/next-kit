import {render} from '@testing-library/react'
import Home from '../pages'

test('Testing Project', () => {
  const screen = render(<Home />)

  expect(screen.container).toHaveTextContent('Worksing Fine')
})
