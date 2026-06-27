import fetch from 'node-fetch';

const payload = {
  name: "Test User",
  email: "test@example.com",
  phone: "+1234567890",
  country: "USA",
  travelersCount: "2",
  estimatedTravelTime: "7 days",
  travelStyle: "luxury",
  budgetRange: "$10000-$15000",
  message: "This is a test message for the contact form.",
  recaptchaToken: "test-token-12345"
};

try {
  const response = await fetch('http://localhost:3000/api/trpc/contact.submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  });
  
  const text = await response.text();
  console.log('Status:', response.status);
  console.log('Response:', text);
} catch (error) {
  console.error('Error:', error.message);
}
