'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset'
  variant?: 'solid' | 'outline' | 'ghost' | 'soft' | 'white' | 'link'
  children: ReactNode
  isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  type = 'button',
  variant = 'solid',
  children,
  isLoading = false,
  ...props
}: ButtonProps) => {
  const baseClasses =
    'py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg focus:outline-none disabled:opacity-50 disabled:pointer-events-none'
  const variantClasses = {
    solid: 'bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700',
    outline:
      'border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:border-blue-600 focus:text-blue-600',
    ghost:
      'text-blue-600 hover:bg-blue-100 hover:text-blue-800 focus:bg-blue-100 focus:text-blue-800',
    soft: 'bg-blue-100 text-blue-800 hover:bg-blue-200 focus:bg-blue-200',
    white:
      'border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50',
    link: 'text-blue-600 hover:text-blue-800 focus:text-blue-800'
  }

  const spinnerClasses =
    'animate-spin inline-block size-4 border-[3px] border-current border-t-transparent rounded-full'

  return (
    <button
      type={type}
      className={`${baseClasses} ${variantClasses[variant!]}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading && (
        <span
          className={spinnerClasses}
          role="status"
          aria-label="loading"
        ></span>
      )}
      {isLoading ? 'Loading' : children}
    </button>
  )
}
