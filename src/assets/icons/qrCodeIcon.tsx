// Define the custom QR code SVG as a React component
const CustomQrCodeIcon = (props: any) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 24 24"
        style={{ color: '#00B2FE' }}
        {...props}
    >
        <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9.433 5.833h-2.7a.9.9 0 0 0-.9.9v2.7a.9.9 0 0 0 .9.9h2.7a.9.9 0 0 0 .9-.9v-2.7a.9.9 0 0 0-.9-.9m0 7.815h-2.7a.9.9 0 0 0-.9.9v2.7a.9.9 0 0 0 .9.9h2.7a.9.9 0 0 0 .9-.9v-2.7a.9.9 0 0 0-.9-.9m7.834-7.815h-2.7a.9.9 0 0 0-.9.9v2.7a.9.9 0 0 0 .9.9h2.7a.9.9 0 0 0 .9-.9v-2.7a.9.9 0 0 0-.9-.9m0 7.834h-2.7a.9.9 0 0 0-.9.9v2.7a.9.9 0 0 0 .9.9h2.7a.9.9 0 0 0 .9-.9v-2.7a.9.9 0 0 0-.9-.9m3.983-4.75V5.833a3.083 3.083 0 0 0-3.083-3.083h-3.084m0 18.5h3.084a3.083 3.083 0 0 0 3.083-3.083v-3.084m-18.5 0v3.084a3.083 3.083 0 0 0 3.083 3.083h3.084m0-18.5H5.833A3.083 3.083 0 0 0 2.75 5.833v3.084"></path>
    </svg>
);

export default CustomQrCodeIcon