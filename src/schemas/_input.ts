const Input = [`
  scalar DateTime
  input ExtraDateInfoInput {
    datetime: DateTime
    month: Int
    year: Int
    dayOfMonth: Int
    dayOfWeek: Int
    dayOfYear: Int
    ms: Float
    quarter: Float
    dayOfWeekHumanize: String
    week: Int
  }
`] 

module.exports = Input;