import test from 'ava'
import webpackFlow from './'

test('main', t => {
  t.is(typeof webpackFlow, 'function')
})