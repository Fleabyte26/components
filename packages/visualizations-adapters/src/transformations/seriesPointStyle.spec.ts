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

import { seriesPointStyle } from './seriesPointStyle'
import { mockLineConfig, mockFields } from '../__mocks__'
import type { CLineSeries } from '../adapters'

describe('seriesPointStyle', () => {
  test('series as array', () => {
    const series: CLineSeries[] = [
      { color: 'blue', style: 'filled' },
      { color: 'red' },
    ]

    const transformedConfig = seriesPointStyle({
      config: { ...mockLineConfig, point_style: 'none', series },
      fields: mockFields,
    })

    expect(transformedConfig.config.series).toEqual([
      series[0],
      { ...series[1], style: 'none' },
    ])
  })

  test('series as object', () => {
    const series: { [k: string]: CLineSeries } = {
      'orders.count': { color: 'blue', style: 'filled' },
      'orders.average_total_amount_of_order_usd': { color: 'red' },
    }

    const transformedConfig = seriesPointStyle({
      config: { ...mockLineConfig, point_style: 'none', series },
      fields: mockFields,
    })

    expect(transformedConfig.config.series).toEqual({
      'orders.count': series['orders.count'],
      'orders.average_total_amount_of_order_usd': {
        ...series['orders.average_total_amount_of_order_usd'],
        style: 'none',
      },
    })
  })
})
