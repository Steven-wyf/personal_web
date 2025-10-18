import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import twilio from 'twilio';

dotenv.config();

const {
  PORT = 4000,
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  TWILIO_PHONE_NUMBER,
  TARGET_PHONE_NUMBER,
  ALLOWED_ORIGINS
} = process.env;

const app = express();

const allowedOrigins = ALLOWED_ORIGINS ? ALLOWED_ORIGINS.split(',').map((origin) => origin.trim()) : undefined;

app.use(
  cors({
    origin: allowedOrigins || true
  })
);
app.use(express.json());

const smsClient =
  TWILIO_ACCOUNT_SID && TWILIO_AUTH_TOKEN
    ? twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, {
        httpClient: twilio.httpClient,
        lazyLoading: true
      })
    : null;

const isSmsConfigured = Boolean(smsClient && TWILIO_PHONE_NUMBER && TARGET_PHONE_NUMBER);

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    smsConfigured: isSmsConfigured
  });
});

app.post('/api/send-message', async (req, res) => {
  const { name, phone, email, message } = req.body || {};

  if (!name || !phone || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields.' });
  }

  if (!isSmsConfigured) {
    return res.status(500).json({ message: 'SMS service is not configured on the server.' });
  }

  const smsBody = [
    `New website inquiry from ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    '',
    message
  ].join('\n');

  try {
    await smsClient.messages.create({
      from: TWILIO_PHONE_NUMBER,
      to: TARGET_PHONE_NUMBER,
      body: smsBody
    });

    res.json({ message: 'Message delivered via SMS.' });
  } catch (error) {
    console.error('[send-message] Twilio error:', error);
    res.status(502).json({ message: 'Failed to deliver SMS.', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`[contact-api] listening on http://localhost:${PORT}`);
  if (!isSmsConfigured) {
    console.warn(
      '[contact-api] Twilio environment variables missing. SMS delivery disabled. Provide TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER, and TARGET_PHONE_NUMBER.'
    );
  }
});
