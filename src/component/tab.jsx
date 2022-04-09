import '../style/global.scss'

const Tab = ({ name, color }) => {
    return <svg className="tab" viewBox="0 0 122 40">
        <g>
            <path fill={color} id="tab-shape" d="M116.486,29.036c-23.582-8-14.821-29-42.018-29h-62.4C5.441,0.036,0,5.376,0,12.003v28.033h122v-11H116.486 z" />
            <text fill='white' x="10%" y="50%">{name}</text>
        </g>
    </svg>
}

export default Tab