import React from 'react'
import users from '../../data/forrm1'
const handler = (req,res) => {
    res.status(200).json(users)
}

export default handler