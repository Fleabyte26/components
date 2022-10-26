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

import type { Story } from '@storybook/react/types-6-0'
import React from 'react'
import { defaultArgTypes as argTypes } from '@looker/storybook'
import { TreeCollection } from '../../Tree'
import type { LkFieldTreeProps } from '../'
import { LkFieldItem, LkFieldTree } from '../'

export default {
  argTypes,
  component: LkFieldTree,
  title: 'LkFieldTree',
}

export { FieldPicker } from './FieldPicker'

const Template: Story<Omit<LkFieldTreeProps, 'label'>> = args => (
  <TreeCollection>
    <LkFieldTree label={<strong>Orders</strong>} {...args}>
      <LkFieldTree label={<strong>Orders</strong>} defaultOpen>
        <LkFieldItem>ID</LkFieldItem>
        <LkFieldItem>Status</LkFieldItem>
        <LkFieldTree label={<strong>Created</strong>} defaultOpen>
          <LkFieldItem>Created Date</LkFieldItem>
          <LkFieldItem>Created Month</LkFieldItem>
          <LkFieldItem>Created Year</LkFieldItem>
          <LkFieldItem>Created Quarter</LkFieldItem>
        </LkFieldTree>
      </LkFieldTree>
    </LkFieldTree>
  </TreeCollection>
)

export const Basic = Template.bind({})
Basic.args = {
  defaultOpen: true,
}
