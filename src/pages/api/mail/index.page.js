const formData = require('form-data');
const Mailgun = require('mailgun.js');
const createDOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const cors = require('cors');
const {MAILGUN_API_KEY, DOMAIN} = process.env;

const ORIGINS = ['https://staykovservice.com/', 'https://www.staykovservice.com/'];
const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL = 'servicestaykov@gmail.com';
const FROM_EMAIL = 'orders@staykovservice.com';
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;

const mailgun = new Mailgun(formData).client({
  username: 'api',
  key: MAILGUN_API_KEY
});

const window = new JSDOM('').window;
const DOMPurify = createDOMPurify(window);

cors({
  origin: (origin, callback) => {
    if (!ORIGINS.includes(origin)) {
      return callback(
        new Error(`Not allowed by CORS. Origin must be: ${ORIGINS.join(' or ')}`)
      );
    }

    return callback(null, true);
  },
});

export default async function handler(req, res){
  try{
    const email = DOMPurify.sanitize(req.body.email);
    const message = DOMPurify.sanitize(req.body.message);
    const name = DOMPurify.sanitize(req.body.name);
    // Validate email request
    if (!email || !EMAIL_PATTERN.test(email)) {
      return res.status(400).json({ error: 'Моля въведете валиден имейл' });
    }

    if (!message) {
      return res.status(400).json({ error: 'Моля въведете съобщение' });
    }

    if (email.length > MAX_EMAIL_LENGTH) {
      return res.status(400).json({
        error: `Моля въведете имейл, по кратък от ${MAX_EMAIL_LENGTH} символа`,
      });
    }

    if (!name) {
      return res.status(400).json({ error: 'Моля въведете име' });
    }

    if (name.length > MAX_EMAIL_LENGTH) {
      return res.status(400).json({
        error: `Моля въведете име, по кратко от ${MAX_EMAIL_LENGTH} символа`,
      });
    }

    if (message.length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({
        error: `Моля въведете съобщение, по кратко от ${MAX_MESSAGE_LENGTH} символа`,
      });
    }

  const data = {
    to: EMAIL,
    from: FROM_EMAIL,
    subject: `[Стайков Сървис]Нова поръчка от ${name}`,
    text: message,
    html: `
    <p><strong>${email}</strong></p>
    <p>${message}</p>`
  };
  await mailgun.messages.create(DOMAIN, 
    data
  )
  return res.status(200).json({ message: 'Съобщението изпратено успешно' });
} catch(error) {
  console.error('Rejected', error);
  return res.status(500).json({ error: 'Съобщението беше отхвърлено' });
}
}