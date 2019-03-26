import obey from 'obey'

const model = obey.model({
  code: { type: 'number', required: true },
  data: { type: 'object', allowNull: true, empty: true },
  msg: { type: 'string', allowNull: true, empty: true },
  timestamp: { type: 'number', required: true }
})

const validate = (data) => {
  return new Promise((resolve, reject) => {
    model.validate(data)
    .then(data => {
      let code = parseInt(data.code)
      if (code > 0) {
        return reject(data)
      }
      return resolve(data)
    }).catch(error => {
      console.warn(error)
      return reject({ msg: '数据校验不成功', code: 2001 })
    })
  })
}

export default validate
