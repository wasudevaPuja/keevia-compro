import { useState } from '#app'

export const useLang = () => {
  return useState<'id' | 'en'>('lang', () => 'id')
}
