import { userModel } from '../models/user'
import { v4 as uuidv4 } from 'uuid';

function extra_date_info(date: any) {
  const date_info = new Date(date)
  function isLeapYear(year: number): boolean {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  function calculateDayOfYear(date: Date): number {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    const timeDifference = date.getTime() - startOfYear.getTime();
    const dayOfYear = Math.floor(timeDifference / (24 * 60 * 60 * 1000));

    return isLeapYear(date.getFullYear()) ? dayOfYear + 1 : dayOfYear + 1;
  }

  function Weekday_Cal(day: Number) {
    switch (day) {
      case 0:
        return 'sunday'
      case 1:
        return 'saturday';
      case 2:
        return 'fryday';
      case 3:
        return 'thursday';
      case 4:
        return 'wednesday';
      case 5:
        return 'tuesday'
      case 6:
        return 'monday'
    }
  }

  return {
    datetime: date,
    month: date_info.getMonth() + 1,
    year: date_info.getFullYear(),
    dayOfMonth: date_info.getDate(),
    dayOfWeek: date_info.getDay(),
    dayOfYear: calculateDayOfYear(date_info),
    ms: date_info.getTime(),
    dayOfWeekHumanize: Weekday_Cal(date_info.getDay()),
    week: Math.ceil(calculateDayOfYear(date_info)/7)
  }
}

const user_input_save = async (_: any, { user_input }: { user_input: any }) => {
  try {
    const {
      first_name = '',
      last_name = '',
      age = 0,
      img = '',
      birthday_date = '',
      email = '',
      phone = '',
      address = '',
      password = ''
    } = user_input;

    const extra_date = extra_date_info(birthday_date)



    const insert = await new userModel({
      _id: uuidv4().replace(/-/g, ""),
      first_name,
      last_name,
      age,
      img,
      birthday_date: extra_date,
      email,
      phone,
      address,
      password
    }).save()

    return insert._id

  } catch (e) {
    return e
  }
}

module.exports = {
  Mutation: {
    user_input_save
  }
}