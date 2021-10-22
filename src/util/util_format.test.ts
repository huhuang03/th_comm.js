import {formatSize} from './util_format';

test('test format1', () => {
  expect(formatSize(1024, 1)).toBe('1KB')
})
