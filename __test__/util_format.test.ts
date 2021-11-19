import {formatSize} from '../lib/index';

test('test format1', () => {
  expect(formatSize(1024, 1)).toBe('1KB')
})
