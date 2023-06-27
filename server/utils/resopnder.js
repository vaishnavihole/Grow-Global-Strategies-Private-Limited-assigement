const responder = (res, data, message)=>{
    return res.json({
    success: true,
    data,
    message
  })
}

export default responder;