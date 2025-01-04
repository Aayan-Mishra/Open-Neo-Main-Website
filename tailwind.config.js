/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	extend: {
  		animation: {
  			gradient: 'gradient 2s linear infinite',
  			'timeline-progress': 'timeline-progress 1.5s ease-out forwards',
  			'timeline-item': 'timeline-item 0.5s ease-out forwards',
  			flicker: 'flicker 5s linear infinite',
  			'spin-slow': 'spin 3s linear infinite',
  			wave: 'wave 2s ease-in-out infinite',
  			ripple: 'ripple 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
  			'pulse-grow': 'pulse-grow 2s ease-in-out infinite',
  			'fade-in': 'fade-in 0.5s ease-out',
  			'fade-in-up': 'fade-in-up 0.5s ease-out',
  			'fade-in-left': 'fade-in-left 0.5s ease-out',
  			'fade-in-right': 'fade-in-right 0.5s ease-out',
  			'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
  		},
  		keyframes: {
  			gradient: {
  				'0%': {
  					backgroundPosition: '0% 50%'
  				},
  				'50%': {
  					backgroundPosition: '100% 50%'
  				},
  				'100%': {
  					backgroundPosition: '0% 50%'
  				}
  			},
  			'timeline-progress': {
  				'0%': {
  					transform: 'scaleX(0)',
  					transformOrigin: 'left'
  				},
  				'100%': {
  					transform: 'scaleX(1)',
  					transformOrigin: 'left'
  				}
  			},
  			'timeline-item': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			flicker: {
  				'0%, 100%': {
  					opacity: '1'
  				},
  				'50%': {
  					opacity: '1'
  				},
  				'52%': {
  					opacity: '0.5'
  				},
  				'54%': {
  					opacity: '1'
  				},
  				'75%': {
  					opacity: '1'
  				},
  				'76%': {
  					opacity: '0.7'
  				},
  				'77%': {
  					opacity: '1'
  				}
  			},
  			wave: {
  				'0%, 100%': {
  					transform: 'rotate(0deg)'
  				},
  				'25%': {
  					transform: 'rotate(-15deg)'
  				},
  				'75%': {
  					transform: 'rotate(15deg)'
  				}
  			},
  			ripple: {
  				'0%': {
  					transform: 'scale(1)',
  					opacity: '0.5'
  				},
  				'100%': {
  					transform: 'scale(2)',
  					opacity: '0'
  				}
  			},
  			'pulse-grow': {
  				'0%, 100%': {
  					transform: 'scale(1)'
  				},
  				'50%': {
  					transform: 'scale(1.1)'
  				}
  			},
  			'fade-in': {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			'fade-in-up': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			},
  			'fade-in-left': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateX(-20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			'fade-in-right': {
  				'0%': {
  					opacity: '0',
  					transform: 'translateX(20px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			ping: {
  				'75%, 100%': {
  					transform: 'scale(2)',
  					opacity: '0',
  				},
  			},
  		},
  		typography: {
  			DEFAULT: {
  				css: {
  					maxWidth: 'none',
  					color: 'white',
  					h1: {
  						color: 'white'
  					},
  					h2: {
  						color: 'white'
  					},
  					h3: {
  						color: 'white'
  					},
  					h4: {
  						color: 'white'
  					},
  					p: {
  						color: 'white'
  					},
  					strong: {
  						color: 'white'
  					},
  					a: {
  						color: '#60a5fa'
  					},
  					code: {
  						color: '#60a5fa'
  					}
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [
    require('@tailwindcss/typography'),
      require("tailwindcss-animate")
],
};
