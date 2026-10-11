# Demo request form: setup guide

The `/demo/` page shows a pre-filled email request until a form URL is set. Once `demoFormUrl` is set in `website-static/src/_data/site.json`, the page embeds the form automatically and keeps the email option beside it.

## 1. Create the form (Google Forms)

Sign in at `forms.google.com` with the account that should own the responses, preferably a shared company account rather than a personal one.

Title: **Request a HelioLattice demo**
Description: `Tell us about your solar business and we will reply by email. We confirm your plan and implementation fee in writing after the demo.`

| # | Question | Type | Required |
|---|---|---|---|
| 1 | Company name | Short answer | Yes |
| 2 | City and state | Short answer | Yes |
| 3 | Your name | Short answer | Yes |
| 4 | Your role | Dropdown: Owner or director, Sales head, Operations head, Accounts, Other | Yes |
| 5 | Work email | Short answer, response validation: Text, Email | Yes |
| 6 | Phone or WhatsApp number | Short answer, validation: Number | Yes |
| 7 | Approximate number of open jobs | Dropdown: Under 20, 20 to 50, 51 to 150, Over 150 | Yes |
| 8 | What do you do mostly | Checkboxes: Residential, Commercial, Industrial, Channel partner network | No |
| 9 | What would you like to see in the demo | Paragraph | No |

Do not ask for bank, tax or ID details.

## 2. Settings

- Settings, Responses: leave "Collect email addresses" **off** (question 5 already collects it).
- Settings, Responses: "Send responders a copy" can stay off.
- Settings, Presentation: edit the confirmation message to `Thank you. We will email you within one working day to set up your demo.` Only promise a response time you can keep.
- Responses tab: click the green Sheets icon to create a linked Google Sheet.
- Responses tab, three dots: turn on **Get email notifications for new responses** for the account that handles demos. Better: add the team address as a collaborator on the form, so several people get notified.

## 3. Get the embed URL

1. Click **Send**.
2. Choose the `<>` (embed) tab.
3. Copy only the `src` value. It looks like `https://docs.google.com/forms/d/e/1FAIpQL.../viewform?embedded=true`.

## 4. Put it on the site

Edit `website-static/src/_data/site.json`:

```json
"demoFormUrl": "https://docs.google.com/forms/d/e/XXXX/viewform?embedded=true"
```

Then rebuild (a push does this) and open `/demo/`. The form appears in the request card.

## 5. Check before launch

- Submit a test response from a phone and from a desktop.
- Confirm the notification email arrives and the sheet row appears.
- Check the form height on a 390 px screen. The iframe is 720 px tall. If a long form scrolls inside itself, raise `height` in `src/demo/index.njk`.
- Delete the test rows from the sheet.

## 6. Limits to know

- GA4 cannot see inside the Google Form iframe, so a form submission does not show as a conversion by itself. To count demo requests, either treat visits to `/demo/` as the funnel step and count rows in the sheet, or later replace the embed with a native form that redirects to a `/demo/thanks/` page.
- Google Forms stores personal data, so the privacy policy already names "form or email providers". Keep the sheet's sharing limited to the demo team.
- The email fallback stays on the page for anyone whose browser blocks the embed.

## 7. Alternatives, if you prefer

| Option | Good for | Cost |
|---|---|---|
| Google Forms embed (recommended to start) | Zero cost, response sheet, quick | Free |
| Tally.so form | Nicer look, can redirect to a thank-you page | Free tier |
| Native HTML form posting to a small Cloudflare Worker that emails the team | Full control, a thank-you page and conversion tracking | Needs a Worker and an email sender |

I can create the Google Form for you in the browser if you sign in to Google there. Tell me when you are signed in.
