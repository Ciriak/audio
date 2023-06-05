import { theme, type ConfigProviderProps } from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
export const config: ConfigProviderProps = {
  theme: {
    algorithm: theme.darkAlgorithm,
    token: {
      colorPrimary: '#1890ff'
    }
  }
}
