import PropTypes from 'prop-types'
const Message = ({err}) => {
    return (
    <div>
        <p>{err}</p>
    </div>
    )
}

export default Message

Message.propTypes = {
    err: PropTypes.string
}
