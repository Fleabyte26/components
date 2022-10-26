/*

 MIT License

 Copyright (c) 2022 Looker Data Sciences, Inc.

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

import type { DensityProp } from '@looker/design-tokens'
import styled from 'styled-components'
import type { ReactNode } from 'react'
import React from 'react'
import { HoverDisclosure } from '../utils/HoverDisclosure'
import type { ListItemDetailOptions } from './types'
import { listItemDimensions } from './utils'

export type ListItemDetailProps = ListItemDetailOptions &
  DensityProp & {
    children?: ReactNode
    className?: string
  }

export const ListItemDetail = styled(
  ({
    accessory,
    density,
    hoverDisclosure,
    width,
    ...props
  }: ListItemDetailProps) => {
    return (
      <HoverDisclosure width={width} visible={!hoverDisclosure}>
        <div {...props} />
      </HoverDisclosure>
    )
  }
)`
  align-items: center;
  color: ${({ theme }) => theme.colors.text2};
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes.xsmall};
  height: 100%;
  margin-left: auto;
  padding-left: ${({ accessory, density = 0, theme }) =>
    accessory ? 0 : theme.space[listItemDimensions(density).gap]};
`
