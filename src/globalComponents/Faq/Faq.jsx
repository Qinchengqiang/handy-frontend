import faqFunc from './faqFunc'


const titleArr = [
    "Will I need tools or will my professional bring them?",
    "Will my professional remove old furniture?",
    "When should I expect my professional to get in touch with me?",
    "I need more help."
]
const paragraphArr = [
    "Your professional will come with all required tools to assemble your furniture. The furniture must come with all parts necessary to assemble.",
    "Our furniture assembly service does not include removal of old furniture.",
    "After your booking is confirmed, Handy will send you confirmation emails and messages about your booking and professional. You can contact your professional at any time with questions or concerns you might have.",
    "Please call 911",
]
// pass in titleArr and paragraphArr to to faqFunc and returns the completed FAQ List with styling included 
export const Faq = faqFunc(titleArr,paragraphArr)