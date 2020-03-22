import faqFunc from './faqFunc'


const titleArr = [
    "Which Handy professional will come to our offices?",
    "Can I skip or reschedule bookings?",
    "I need more help.",
]
const paragraphArr = [
    "Handy has a vast network of experienced, top-rated cleaners. Based on the time and date of your request, we work to assign the best professional available.  Like working with a specific pro? Add them to your Pro Team from the mobile app and they'll be requested first for all future bookings.  You will receive an email with details about your professional prior to your appointment.",
    "You can reschedule any booking for free at least 24 hours in advance of the scheduled start time. If you need to skip a booking within the minimum commitment, we’ll credit the value of the booking to your account. You can use this credit on future cleanings and other Handy services.",
    "Please call help center",
]
// pass in titleArr and paragraphArr to to faqFunc and returns the completed FAQ List with styling included 
export const OfficeFaq = faqFunc(titleArr,paragraphArr)