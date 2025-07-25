export function LogoImage() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 2400 2800'
      xmlSpace='preserve'
      width={42}
      height={42}
    >
      <title>Logo</title>
      <g>
        <polygon
          className='fill-white'
          points='2200,1300 1800,1700 1400,1700 1050,2050 1050,1700 600,1700 600,200 2200,200 	'
        />
        <g>
          <g id='Layer_1-2'>
            <path
              className='fill-primary'
              d='M500,0L0,500v1800h600v500l500-500h400l900-900V0H500z M2200,1300l-400,400h-400l-350,350v-350H600V200h1600
					V1300z'
            />
            <rect
              x='1700'
              y='550'
              className='fill-primary'
              width='200'
              height='600'
            />
            <rect
              x='1150'
              y='550'
              className='fill-primary'
              width='200'
              height='600'
            />
          </g>
        </g>
      </g>
    </svg>
  )
}
