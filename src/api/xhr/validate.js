import obey from 'obey'

const validateModel = obey.model({
  code: { type: 'number', required: true },
  msg: { type: 'string', allowNull: true, empty: true },
  data: { type: 'object', allowNull: true, empty: true },
  timestamp: { type: 'number', required: true }
})

const validate = (data) => {
  return new Promise((resolve, reject) => {
    validateModel.validate(data)
    .then(data => {
      let errnum = parseInt(data.code)
      if (errnum > 0) {
        return reject(data)
      }
      return resolve(data)
    })
    .catch(error => {
      console.warn(error)
      return reject({ msg: '数据校验不成功', code: -1 })
    })
  })
}

export default validate
