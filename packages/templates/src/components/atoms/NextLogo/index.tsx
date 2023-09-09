type Props = {
  color?: string
  colorPrimary?: string
}

export function NextLogo({ colorPrimary, color = '#17171B' }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 146 63"
      fill="none"
      width="117"
      height="50"
      role="img"
    >
      <path
        d="M31.7049 14.9238V46.6237L26.0368 42.2593L5.66809 26.5585V46.6237H0V15.0343L5.66809 19.4042L26.0368 35.105V14.9238H31.7049Z"
        fill={color}
      />
      <path
        d="M110.898 14.9404L98.6223 30.829L110.842 46.6458H103.705L95.0645 35.442L86.4243 46.6458H79.2866L91.4902 30.829L79.2148 14.9238H86.3469L95.0645 26.2215L103.782 14.9238H110.898V14.9404ZM79.2148 46.6458H79.2866L79.2148 46.7397V46.6458ZM110.898 46.7176L110.842 46.6458H110.898V46.7176Z"
        fill={color}
      />
      <path
        d="M146 14.9492V20.6008H132.984V46.6325H127.327V20.6008H114.312V14.9492H146Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M52.1446 33.197L51.7303 59.3613L34.0631 58.1901C33.0533 58.4271 32.137 58.9592 31.4306 59.7187C30.7242 60.4782 30.2599 61.4307 30.0965 62.455C29.9778 62.4152 29.8318 62.3713 29.6668 62.3216C28.5491 61.9853 26.5567 61.3857 26.2294 60.0187C25.8538 58.5326 29.7761 55.1184 30.2733 54.7814C30.1355 53.9291 30.2524 53.0552 30.6091 52.269C30.9658 51.4828 31.5466 50.8193 32.2787 50.3618L41.5266 41.7324L41.3609 30.3353L73.8171 0L73.6127 12.8335L52.1446 33.197ZM66.1498 33.3346L53.2115 45.5715L53.532 33.6274L65.7023 22.269L66.1498 33.3346ZM76.9617 35.8983L52.9966 59.0627L53.306 47.4501L76.5308 25.2801L76.9617 35.8983Z"
        fill={colorPrimary}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M52.1446 33.197L51.7303 59.3613L34.0631 58.1901C33.0533 58.4271 32.137 58.9592 31.4306 59.7187C30.7242 60.4782 30.2599 61.4307 30.0965 62.455C29.9778 62.4152 29.8318 62.3713 29.6668 62.3216C28.5491 61.9853 26.5567 61.3857 26.2294 60.0187C25.8538 58.5326 29.7761 55.1184 30.2733 54.7814C30.1355 53.9291 30.2524 53.0552 30.6091 52.269C30.9658 51.4828 31.5466 50.8193 32.2787 50.3618L41.5266 41.7324L41.3609 30.3353L73.8171 0L73.6127 12.8335L52.1446 33.197ZM66.1498 33.3346L53.2115 45.5715L53.532 33.6274L65.7023 22.269L66.1498 33.3346ZM76.9617 35.8983L52.9966 59.0627L53.306 47.4501L76.5308 25.2801L76.9617 35.8983Z"
        fill={colorPrimary}
      />
    </svg>
  )
}
