import React from 'react'

const Error = ({ msg }: { msg: string }) => {
    return (
        <div className='container-message'>
            <p className='message letnoselect'>{msg}</p>
        </div>
    )
}

export default Error