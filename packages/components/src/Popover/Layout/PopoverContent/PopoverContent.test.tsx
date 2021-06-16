/*

 MIT License

 Copyright (c) 2021 Looker Data Sciences, Inc.

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 SOFTWARE.

 */

import 'jest-styled-components'
import React from 'react'
import { renderWithTheme } from '@looker/components-test-utils'
import { screen } from '@testing-library/react'
import { Basic } from './PopoverContent.story'
import { PopoverContent } from './PopoverContent'

describe('PopoverContent', () => {
  test('Basic', () => {
    renderWithTheme(<Basic />)
    expect(screen.getByText('Content Text')).toHaveStyleRule(
      'padding-bottom',
      '0.75rem'
    )
  })

  test('Custom padding', () => {
    renderWithTheme(
      <PopoverContent pl="none" pt="xlarge" pb="small">
        Hello world
      </PopoverContent>
    )
    const item = screen.getByText('Hello world')
    expect(item).toHaveStyleRule('padding-left', '0rem')
    expect(item).toHaveStyleRule('padding-top', '2rem')
    expect(item).toHaveStyleRule('padding-bottom', '0.75rem')
    expect(item).toHaveStyleRule('padding', '0.75rem') // default value
  })
})
