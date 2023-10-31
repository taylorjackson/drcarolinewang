import axios from 'axios'

type FormData = {
  fname?: string
  lname?: string
  email?: string
  tel?: string
  message?: string
}

const WORK_INQUIRY_URL =
  'https://5suknmbyc2.execute-api.us-west-2.amazonaws.com/forwardDisruptiv3WorkInquiryToTelegram'

export const contact = async (formData: FormData) => {
  try {
    return await axios.post(WORK_INQUIRY_URL, formData)
  } catch (error) {
    console.error('Error sending work inquiry!', error)
    throw error
  }
}
