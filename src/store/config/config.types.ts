import { TypeBaseColor } from '@/constants/colors.constants'

export interface ConfigStore {
  theme: TypeBaseColor
  setTheme: (theme: TypeBaseColor) => void
}
