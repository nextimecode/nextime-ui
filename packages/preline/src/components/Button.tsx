'use client'

import { ButtonHTMLAttributes, ReactNode } from 'react'

import clsx from 'clsx'

export type ButtonProps = {
  type?: 'button' | 'submit' | 'reset'
  variant?: 'solid' | 'outline' | 'ghost' | 'soft' | 'white' | 'link'
  size?: 'small' | 'default' | 'large' | 'icon'
  color?: 'blue' | 'gray' | 'red' | 'yellow' | 'teal' | 'white'
  isLoading?: boolean
  isFullWidth?: boolean
  rounded?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
  children?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button = ({
  type = 'button',
  variant = 'solid',
  size = 'default',
  color = 'blue',
  isLoading = false,
  isFullWidth = false,
  rounded = false,
  startIcon,
  endIcon,
  children,
  ...props
}: ButtonProps) => {
  const baseClasses =
    'inline-flex items-center gap-x-2 text-sm font-medium focus:outline-none disabled:opacity-50 disabled:pointer-events-none'

  const sizeClasses = {
    small: 'py-2 px-3',
    default: 'py-3 px-4',
    large: 'py-3 px-4 sm:p-5',
    icon: 'flex justify-center items-center size-[46px]'
  }

  const variantClasses: Record<string, Record<string, string>> = {
    solid: {
      blue: 'bg-blue-600 text-white hover:bg-blue-700 focus:bg-blue-700',
      gray: 'bg-gray-800 text-white hover:bg-gray-900 focus:bg-gray-900',
      red: 'bg-red-500 text-white hover:bg-red-600 focus:bg-red-600',
      yellow:
        'bg-yellow-500 text-white hover:bg-yellow-600 focus:bg-yellow-600',
      teal: 'bg-teal-500 text-white hover:bg-teal-600 focus:bg-teal-600',
      white:
        'bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:bg-gray-50'
    },
    outline: {
      blue: 'border border-blue-600 text-blue-600 hover:text-blue-500',
      gray: 'border border-gray-800 text-gray-800 hover:text-gray-500',
      red: 'border border-red-500 text-red-500 hover:text-red-400',
      yellow: 'border border-yellow-500 text-yellow-500 hover:text-yellow-400',
      teal: 'border border-teal-500 text-teal-500 hover:text-teal-400',
      white: 'border border-white text-white hover:text-gray-800'
    },
    ghost: {
      blue: 'text-blue-600 hover:bg-blue-100 hover:text-blue-800',
      gray: 'text-gray-500 hover:bg-gray-100',
      red: 'text-red-500 hover:bg-red-100',
      yellow: 'text-yellow-500 hover:bg-yellow-100',
      teal: 'text-teal-500 hover:bg-teal-100',
      white: 'text-white hover:bg-gray-800'
    }
  }

  const roundedClasses = rounded ? 'rounded-full' : 'rounded-lg'
  const widthClasses = isFullWidth ? 'w-full' : ''
  const spinnerClasses =
    'animate-spin inline-block size-4 border-[3px] border-current border-t-transparent rounded-full'

  const computedClasses = clsx(
    baseClasses,
    sizeClasses[size],
    roundedClasses,
    widthClasses,
    variantClasses[variant]?.[color]
  )

  return (
    <button
      type={type}
      className={computedClasses}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span
          className={spinnerClasses}
          role="status"
          aria-label="loading"
        ></span>
      ) : (
        <>
          {startIcon && <span className="shrink-0">{startIcon}</span>}
          {children}
          {endIcon && <span className="shrink-0">{endIcon}</span>}
        </>
      )}
    </button>
  )
}
