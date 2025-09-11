import type { ReactNode } from 'react'
import './form-item.scss'

export const FormItem = ({label, children}: { label: string, children: ReactNode | ReactNode[] }) => {
  return <div className="form-item">
    <div  className="form-item__label">{label}</div>
    <div className="form-item__content">{children}</div>
  </div>
}
